extern crate openssl;

#[macro_use]
extern crate diesel;
#[macro_use]
extern crate diesel_migrations;
embed_migrations!("./migrations");

use std::env;
use std::io;

use actix_cors::Cors;
use actix_web::{http, middleware, web, App, HttpServer};
use dotenv::dotenv;

mod db;
mod entities;
mod graphql;
mod resolvers;

#[actix_web::main]
async fn main() -> io::Result<()> {
    env_logger::init();

    // get env variables (or fail)
    let is_dev: bool = match env::var("ENVIRONMENT") {
        Ok(val) => val == "development",
        Err(_) => {
            // load variables from .env if backend is not running in docker container
            dotenv().ok();
            get_var("ENVIRONMENT") == "development"
        }
    };
    let db_url = get_var("DATABASE_URL");
    let port = get_var("PORT");

    // setup db pool
    let pool = db::connect(&db_url);

    // run diesel migrations
    let conn = pool.clone().get().unwrap();
    embedded_migrations::run(&conn).expect("Could run migrations!");

    println!("Server Running on port {port} - http://localhost:{port}/graphql", port = port);
    HttpServer::new(move || {
        let allowed_origin = get_var("ALLOWED_ORIGIN");
        App::new()
            .data(pool.clone())
            .wrap(
                Cors::default()
                    .allowed_origin_fn(move |origin, _| {
                        // allow * in development - else graphql playgrund cant be used
                        if !is_dev {
                            origin.as_bytes().eq(allowed_origin.as_bytes())
                        } else {
                            true
                        }
                    })
                    .allowed_methods(vec!["GET", "POST"])
                    .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
                    .allowed_header(http::header::CONTENT_TYPE)
                    .max_age(3600),
            )
            .wrap(middleware::Logger::default())
            .configure(graphql::register)
            .default_service(web::to(|| async { "404" }))
    })
    .bind(format!("0.0.0.0:{}", port))?
    .run()
    .await
}

fn get_var(name: &str) -> String {
    env::var(name).expect(format!("{} variable missing!", name).as_str())
}

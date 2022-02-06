pub mod schema;

use diesel::pg::PgConnection;
use diesel::r2d2::{self, ConnectionManager, PooledConnection};

pub type Pool = r2d2::Pool<ConnectionManager<PgConnection>>;
pub type PoolConn = PooledConnection<ConnectionManager<PgConnection>>;

pub fn connect(url: &str) -> Pool {
  let manager = ConnectionManager::<PgConnection>::new(url);
  r2d2::Pool::builder().build(manager).expect("Failed to connect to database!")
}

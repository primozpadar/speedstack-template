import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Placeholder mutation */
  createPlaceholder: Placeholder;
};


export type MutationCreatePlaceholderArgs = {
  newPlaceholder: NewPlaceholder;
};

export type NewPlaceholder = {
  text: Scalars['String'];
};

/** Placeholder object */
export type Placeholder = {
  __typename?: 'Placeholder';
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Placeholder query */
  placeholders: Array<Placeholder>;
};

export type PlaceholdersQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaceholdersQuery = { __typename?: 'Query', placeholders: Array<{ __typename?: 'Placeholder', id: number, text: string }> };

export type CreatePlaceholderMutationVariables = Exact<{
  data: NewPlaceholder;
}>;


export type CreatePlaceholderMutation = { __typename?: 'Mutation', createPlaceholder: { __typename?: 'Placeholder', id: number, text: string } };


export const PlaceholdersDocument = gql`
    query Placeholders {
  placeholders {
    id
    text
  }
}
    `;

/**
 * __usePlaceholdersQuery__
 *
 * To run a query within a React component, call `usePlaceholdersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceholdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceholdersQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlaceholdersQuery(baseOptions?: Apollo.QueryHookOptions<PlaceholdersQuery, PlaceholdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaceholdersQuery, PlaceholdersQueryVariables>(PlaceholdersDocument, options);
      }
export function usePlaceholdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaceholdersQuery, PlaceholdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaceholdersQuery, PlaceholdersQueryVariables>(PlaceholdersDocument, options);
        }
export type PlaceholdersQueryHookResult = ReturnType<typeof usePlaceholdersQuery>;
export type PlaceholdersLazyQueryHookResult = ReturnType<typeof usePlaceholdersLazyQuery>;
export type PlaceholdersQueryResult = Apollo.QueryResult<PlaceholdersQuery, PlaceholdersQueryVariables>;
export const CreatePlaceholderDocument = gql`
    mutation CreatePlaceholder($data: NewPlaceholder!) {
  createPlaceholder(newPlaceholder: $data) {
    id
    text
  }
}
    `;
export type CreatePlaceholderMutationFn = Apollo.MutationFunction<CreatePlaceholderMutation, CreatePlaceholderMutationVariables>;

/**
 * __useCreatePlaceholderMutation__
 *
 * To run a mutation, you first call `useCreatePlaceholderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaceholderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaceholderMutation, { data, loading, error }] = useCreatePlaceholderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePlaceholderMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaceholderMutation, CreatePlaceholderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaceholderMutation, CreatePlaceholderMutationVariables>(CreatePlaceholderDocument, options);
      }
export type CreatePlaceholderMutationHookResult = ReturnType<typeof useCreatePlaceholderMutation>;
export type CreatePlaceholderMutationResult = Apollo.MutationResult<CreatePlaceholderMutation>;
export type CreatePlaceholderMutationOptions = Apollo.BaseMutationOptions<CreatePlaceholderMutation, CreatePlaceholderMutationVariables>;
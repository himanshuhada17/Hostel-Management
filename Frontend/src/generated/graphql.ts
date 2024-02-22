import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Bed = {
  __typename?: 'Bed';
  amount: Scalars['String']['output'];
  bedNumber: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  person: Person;
  rents: Array<Rent>;
  room: Room;
  roomId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPerson: Person;
  createRoom: Room;
  createUser: User;
  deleteUser: Scalars['String']['output'];
  updatePerson: Person;
  updateRoom: Room;
  updateUser: User;
};


export type MutationCreatePersonArgs = {
  input: PersonInput;
};


export type MutationCreateRoomArgs = {
  input: RoomInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdatePersonArgs = {
  id: Scalars['String']['input'];
  input: UpdatePersonInput;
};


export type MutationUpdateRoomArgs = {
  id: Scalars['String']['input'];
  input: UpdateRoomInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};

export type Person = {
  __typename?: 'Person';
  bed: Bed;
  email: Scalars['String']['output'];
  emergenyContact?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  idNumber: Scalars['String']['output'];
  idProof: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  rents?: Maybe<Array<Rent>>;
  room: Room;
  roomId: Scalars['String']['output'];
};

export type PersonInput = {
  email: Scalars['String']['input'];
  emergenyContact?: InputMaybe<Scalars['String']['input']>;
  idNumber: Scalars['String']['input'];
  idProof: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllPersons: Array<Person>;
  getAllRooms: Array<Room>;
  getAllUsers: Array<User>;
  getPersonById: Person;
  getRoomById: Room;
  getUserById: User;
};


export type QueryGetPersonByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRoomByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};

export type Rent = {
  __typename?: 'Rent';
  bed: Bed;
  bedId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  dueDate: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  person: Person;
  personId: Scalars['String']['output'];
  room: Room;
  roomId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Room = {
  __typename?: 'Room';
  beds: Array<Bed>;
  floor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  persons: Array<Person>;
  rents: Array<Rent>;
  roomNumber: Scalars['String']['output'];
  roomStatus: Scalars['String']['output'];
};

export type RoomInput = {
  floor: Scalars['String']['input'];
  roomNumber: Scalars['String']['input'];
  roomStatus: Scalars['String']['input'];
};

export type UpdatePersonInput = {
  emergenyContact?: InputMaybe<Scalars['String']['input']>;
  idNumber: Scalars['String']['input'];
  idProof: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoomInput = {
  roomStatus: Scalars['String']['input'];
};

export type UpdateUserInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', email: string, id: string, name: string, password: string, username: string } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', email: string, id: string, name: string, password: string, username: string }> };


export const CreateUserDocument = gql`
    mutation CreateUser($input: UserInput!) {
  createUser(input: $input) {
    email
    id
    name
    password
    username
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    email
    id
    name
    password
    username
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
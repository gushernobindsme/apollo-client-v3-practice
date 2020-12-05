import {gql} from "@apollo/client";

export const GET_SHARKS = gql`
    query getSharks {
        sharks {
            id
            name
            rate
        }
    }
`;

export const CREATE_SHARK = gql`
    mutation createShark($input: CreateSharkInput) {
        createShark(input: $input) {
            id
            name
            rate
        }
    }
`;

export const UPDATE_SHARK = gql`
    mutation updateShark($input: UpdateSharkInput) {
        updateShark(input: $input) {
            id
            name
            rate
        }
    }
`;

export const SHARK_FRAGMENT = gql`
    fragment UpdatedShark on Shark {
        rate
    }
`;

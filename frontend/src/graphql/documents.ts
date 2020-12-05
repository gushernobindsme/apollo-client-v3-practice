import { gql } from '@apollo/client';

export const GET_SHARKS = gql`
  query getSharks {
    sharks {
      id
      originalTitle
      japaneseTitle
      rate
    }
  }
`;

export const CREATE_SHARK = gql`
  mutation createShark($input: CreateSharkInput) {
    createShark(input: $input) {
      id
      originalTitle
      japaneseTitle
      rate
    }
  }
`;

export const UPDATE_SHARK = gql`
  mutation updateShark($input: UpdateSharkInput) {
    updateShark(input: $input) {
      id
      originalTitle
      japaneseTitle
      rate
    }
  }
`;

export const SHARK_FRAGMENT = gql`
  fragment UpdatedShark on Shark {
    rate
  }
`;

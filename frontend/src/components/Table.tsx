import React from 'react';
import { Button, HTMLTable } from '@blueprintjs/core';
import Ratings from './Ratings';
import SharksModel from '../graphql/models';
import { ApolloQueryResult } from '@apollo/client/core';

export type TableProps = {
  data?: SharksModel;
  fetchMore: (fetchMoreQueryOptions: {
    variables: { offset: number };
  }) => Promise<ApolloQueryResult<SharksModel>>;
  updateShark(id: number, rate: number): void;
};

const Table: React.FC<TableProps> = ({ data, fetchMore, updateShark }) => {
  return (
    <>
      <HTMLTable striped={true}>
        <thead>
          <tr>
            <th>Id</th>
            <th>OriginalTitle</th>
            <th>JapaneseTitle</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.sharks.map((shark) => {
              return (
                <tr key={shark.id}>
                  <th>{shark.id}</th>
                  <td>{shark.originalTitle}</td>
                  <td>{shark.japaneseTitle}</td>
                  <td>
                    {shark.id && (
                      <Ratings
                        id={shark.id}
                        rate={shark.rate || 0}
                        mutation={updateShark}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </HTMLTable>
      <Button
        onClick={async () => {
          const currentLength = data?.sharks.length || 0;
          await fetchMore({
            variables: {
              offset: currentLength,
            },
          });
        }}
      >
        fetch more
      </Button>
    </>
  );
};

export default Table;

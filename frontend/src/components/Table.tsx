import React from 'react';
import { Button, HTMLTable } from '@blueprintjs/core';
import Ratings from './Ratings';
import SharksModel from '../graphql/models';

export type TableProps = {
  data?: SharksModel;
  fetchMore: (arg0: { variables: { offset: any } }) => any;
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
          await fetchMore({
            variables: {
              offset: data?.sharks.length,
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

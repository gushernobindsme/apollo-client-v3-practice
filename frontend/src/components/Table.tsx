import React from 'react';
import { Button, HTMLTable } from '@blueprintjs/core';
import Ratings from './Ratings';
import SharksModel from '../graphql/models';

export type TableProps = {
  data?: SharksModel;
  fetchMore: (arg0: { variables: { cursor: any } }) => any;
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
            data.sharks &&
            data.sharks.edges &&
            data.sharks.edges.map((shark) => {
              const node = shark.node;
              return (
                <tr key={node?.id}>
                  <th>{node?.id}</th>
                  <td>{node?.originalTitle}</td>
                  <td>{node?.japaneseTitle}</td>
                  <td>
                    {node?.id && (
                      <Ratings
                        id={node.id}
                        rate={node.rate || 0}
                        mutation={updateShark}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </HTMLTable>
      {data && data.sharks.pageInfo?.hasNextPage && (
        <Button
          onClick={async () => {
            await fetchMore({
              variables: {
                cursor: data?.sharks?.pageInfo?.endCursor,
              },
            });
          }}
        >
          fetch more
        </Button>
      )}
    </>
  );
};

export default Table;

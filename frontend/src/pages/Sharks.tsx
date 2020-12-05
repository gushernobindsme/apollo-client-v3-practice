import React, { useState } from 'react';
import { Button, Dialog, HTMLTable } from '@blueprintjs/core';
import { useSharks } from '../graphql/hooks';
import Ratings from '../components/Ratings';
import CreateDialog from '../components/CreateDialog';

const Sharks: React.FC = () => {
  const { loading, error, data, createShark, updateShark } = useSharks();

  const [showDialog, setShowDialog] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Button
        onClick={() => {
          setShowDialog(true);
        }}
      >
        add new shark movie
      </Button>
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
      <Dialog
        isOpen={showDialog}
        onClose={() => {
          setShowDialog(false);
        }}
        title="Please enter the shark movie information"
      >
        <CreateDialog
          mutation={createShark}
          close={() => {
            setShowDialog(false);
          }}
        />
      </Dialog>
    </div>
  );
};
export default Sharks;

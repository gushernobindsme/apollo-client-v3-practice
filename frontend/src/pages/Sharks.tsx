import React, { useState } from 'react';
import { Button, Dialog } from '@blueprintjs/core';
import { useSharks } from '../graphql/hooks';
import CreateDialog from '../components/CreateDialog';
import Table from '../components/Table';

const Sharks: React.FC = () => {
  const {
    loading,
    error,
    data,
    fetchMore,
    createShark,
    updateShark,
  } = useSharks();

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
      <Table data={data} fetchMore={fetchMore} updateShark={updateShark} />
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

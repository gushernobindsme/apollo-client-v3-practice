import React, { useState } from 'react';
import { Button, Classes, FormGroup, InputGroup } from '@blueprintjs/core';

export type CreateDialogProps = {
  mutation(name: string): void;
  close(): void;
};

const CreateDialog: React.FC<CreateDialogProps> = ({ mutation, close }) => {
  const [name, setName] = useState('');

  return (
    <>
      <div className={Classes.DIALOG_BODY}>
        <FormGroup label="Name" labelFor="name">
          <InputGroup
            id="name"
            defaultValue={name}
            placeholder="Your favorite shark movie"
            onChange={(event: any) => {
              setName(event.target.value);
            }}
          />
        </FormGroup>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <Button
          type="submit"
          className="btn btn-primary"
          onClick={async () => {
            await mutation(name);
            setName('');
            close();
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default CreateDialog;

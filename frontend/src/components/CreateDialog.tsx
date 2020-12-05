import React, { useState } from 'react';
import { Button, Classes, FormGroup, InputGroup } from '@blueprintjs/core';

export type CreateDialogProps = {
  mutation(originalTitle: string, japaneseTitle: string): void;
  close(): void;
};

const CreateDialog: React.FC<CreateDialogProps> = ({ mutation, close }) => {
  const [originalTitle, setOriginalTitle] = useState('');
  const [japaneseTitle, setJapaneseTitle] = useState('');

  return (
    <>
      <div className={Classes.DIALOG_BODY}>
        <FormGroup label="OriginalTitle" labelFor="originalTitle">
          <InputGroup
            id="originalTitle"
            defaultValue={originalTitle}
            placeholder="Shark Exocist"
            onChange={(event: any) => {
              setOriginalTitle(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup label="JapaneseTitle" labelFor="japaneseTitle">
          <InputGroup
            id="japaneseTitle"
            defaultValue={japaneseTitle}
            placeholder="デビルシャーク"
            onChange={(event: any) => {
              setJapaneseTitle(event.target.value);
            }}
          />
        </FormGroup>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <Button
          type="submit"
          className="btn btn-primary"
          onClick={async () => {
            await mutation(originalTitle, japaneseTitle);
            setOriginalTitle('');
            setJapaneseTitle('');
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

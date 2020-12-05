import {gql, useMutation, useQuery} from "@apollo/client";
import React, {useState} from "react";
import {Shark, CreateSharkInput, UpdateSharkInput} from "../graphql/graphql.schema";
import {Button, HTMLTable, Icon, Label} from "@blueprintjs/core";

interface SharksModel {
  sharks: Shark[];
}

const GET_SHARKS = gql`
    query getSharks {
        sharks {
            id
            name
            rate
        }
    }
`;

const CREATE_SHARK = gql`
    mutation createShark($input: CreateSharkInput) {
        createShark(input: $input) {
            id
            name
            rate
        }
    }
`;

const UPDATE_SHARK = gql`
    mutation updateShark($input: UpdateSharkInput) {
        updateShark(input: $input) {
            id
            name
            rate
        }
    }
`;

const SHARK_FRAGMENT = gql`
    fragment UpdatedShark on Shark {
        rate
    }
`;

const Sharks: React.FC = () => {
  const {loading, error, data} = useQuery<SharksModel>(
    GET_SHARKS,
    {}
  );

  const [createShark] = useMutation(CREATE_SHARK, {
    update(cache, {data: {createShark}}) {
      const newShark = {id: createShark.id, name: createShark.name};
      cache.writeQuery({
        query: GET_SHARKS,
        data: {
          sharks: [...data?.sharks || [], newShark]
        }
      })
    }
  });

  const [updateShark] = useMutation(UPDATE_SHARK, {
    update(cache, {data: {updateShark}}) {
      console.log(cache.readQuery({ query: GET_SHARKS }));
      cache.writeFragment({
        id: cache.identify(updateShark),
        fragment: SHARK_FRAGMENT,
        data: {
          rate: updateShark.rate,
        }
      })
    }
  });

  const [name, setName] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Movie list</h3>
      <HTMLTable striped={true}>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Rate</th>
        </tr>
        </thead>
        <tbody>
        {data && data.sharks.map((shark) => {
          const rate = shark.rate || 0;
          return (
            <tr key={shark.id}>
              <th>{shark.id}</th>
              <td>{shark.name}</td>
              <td>
                <Icon icon={rate >= 1 ? 'star' : 'star-empty'} onClick={async () => {
                    const input = new UpdateSharkInput();
                    input.id = shark.id;
                    input.rate = 1;
                    await updateShark({variables: {input}});
                }}/>
                <Icon icon={rate >= 2 ? 'star' : 'star-empty'} onClick={async () => {
                  const input = new UpdateSharkInput();
                  input.id = shark.id;
                  input.rate = 2;
                  await updateShark({variables: {input}});
                }}/>
                <Icon icon={rate >= 3 ? 'star' : 'star-empty'} onClick={async () => {
                  const input = new UpdateSharkInput();
                  input.id = shark.id;
                  input.rate = 3;
                  await updateShark({variables: {input}});
                }}/>
                <Icon icon={rate >= 4 ? 'star' : 'star-empty'} onClick={async () => {
                  const input = new UpdateSharkInput();
                  input.id = shark.id;
                  input.rate = 4;
                  await updateShark({variables: {input}});
                }}/>
                <Icon icon={rate >= 5 ? 'star' : 'star-empty'} onClick={async () => {
                  const input = new UpdateSharkInput();
                  input.id = shark.id;
                  input.rate = 5;
                  await updateShark({variables: {input}});
                }}/>
              </td>
            </tr>
          );
        })}
        </tbody>
      </HTMLTable>
      <div>
        <h3>Create new movies</h3>
        <div>
          <Label>Title</Label>
          <input
            defaultValue={name}
            type="text"
            className="bp3-input"
            onChange={(event) => {
              setName(event.target.value);
            }}/>
        </div>
        <Button
          type="submit"
          className="btn btn-primary"
          onClick={async () => {
            const input = new CreateSharkInput();
            input.name = name;
            await createShark({variables: {input}});
            setName('');
          }}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default Sharks;
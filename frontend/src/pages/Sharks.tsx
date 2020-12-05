import React, {useState} from "react";
import {Button, HTMLTable, Label} from "@blueprintjs/core";
import {useSharks} from "../graphql/hooks";
import Ratings from "../components/Ratings";

const Sharks: React.FC = () => {
  const {
    loading,
    error,
    data,
    createShark,
    updateShark,
  } = useSharks();

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
          return (
            <tr key={shark.id}>
              <th>{shark.id}</th>
              <td>{shark.name}</td>
              <td>
                {shark.id &&
                  <Ratings id={shark.id} rate={shark.rate || 0} mutation={updateShark}/>
                }
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
            await createShark(name);
            setName('');
          }}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default Sharks;
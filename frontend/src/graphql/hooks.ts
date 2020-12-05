import {useMutation, useQuery} from "@apollo/client";
import SharksModel from "./models";
import {CREATE_SHARK, GET_SHARKS, SHARK_FRAGMENT, UPDATE_SHARK} from "./documents";
import {CreateSharkInput, UpdateSharkInput} from "./graphql.schema";

export const useSharks = () => {
  const {loading, error, data} = useQuery<SharksModel>(
    GET_SHARKS,
    {}
  );

  const [createSharkMutation] = useMutation(CREATE_SHARK, {
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

  const [updateSharkMutation] = useMutation(UPDATE_SHARK, {
    update(cache, {data: {updateShark}}) {
      console.log(cache.readQuery({query: GET_SHARKS}));
      cache.writeFragment({
        id: cache.identify(updateShark),
        fragment: SHARK_FRAGMENT,
        data: {
          rate: updateShark.rate,
        }
      })
    }
  });

  const createShark = async (name: string) => {
    const input = new CreateSharkInput();
    input.name = name;
    await createSharkMutation({variables: {input}});
  }

  const updateShark = async (id: number, rate: number) => {
    const input = new UpdateSharkInput();
    input.id = id;
    input.rate = rate;
    await updateSharkMutation({variables: {input}});
  }

  return {
    loading,
    error,
    data,
    createShark,
    updateShark,
  };
}
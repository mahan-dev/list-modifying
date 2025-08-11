"use client";
import toast from "react-hot-toast";
import Todo from "models/todoInterface";

import UserList from "@/templates/UserList";

interface TodoProps {
  lists: Todo[];
  onRemove: (id: number) => void;
}

const Home = ({ lists, onRemove }: TodoProps) => {
  const removeHandler = (id: number) => {
    if (!id) return toast.error("something went wrong 😞");

    onRemove(id);
    toast.success(`id: ${id} - deleted 👌`);
  };
  return (
    <>
      {!!lists.length ? (
        <UserList
          lists={lists}
          removeHandler={removeHandler}
        />
      ) : (
        <h2 className=" mt-6 text-center ">nothing found 😞</h2>
      )}
    </>
  );
};

export default Home;

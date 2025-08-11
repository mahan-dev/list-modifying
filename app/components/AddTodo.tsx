
import React, { useState } from "react";
import styles from "./addTodo.module.css";
import addIcon from "../../public/assets/icons/plus.svg";

import toast from "react-hot-toast";
import Image from "next/image";

interface AddProps {
  title: (search: string) => void;
}

const AddTodo = ({ title }: AddProps) => {
  const [value, setValue] = useState("");
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return toast.error("Please enter a todo item 😞");
    title(value);
    toast.success("Successfully added 👌");
    setValue("");
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.form__elements}>
        <input
          type="text"
          value={value}
          placeholder="Add a new todo"
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit">
          
          <Image src={addIcon} width={20} height={20} alt="search" />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;

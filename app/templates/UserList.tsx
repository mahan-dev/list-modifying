"use client";
import Todo from "@/models/todoInterface";
import React from "react";
import styles from "./home.module.css";
interface listProps {
  lists: Todo[];
  removeHandler: (id: number) => void;
}

const UserList = ({ lists, removeHandler }: listProps) => {
  return (
    <>
      {lists.map((item) => {
        const { id, title } = item;

        return (
          <ul className={styles.list} key={id}>
            <div
              className={styles["list__item-info"]}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span className="text-red">id: {id} -</span>
              <p>{title}</p>
            </div>
            <button
              className={styles["list__button-remove"]}
              onClick={() => removeHandler(id)}
            >
              remove
            </button>
          </ul>
        );
      })}
    </>
  );
};

export default UserList;

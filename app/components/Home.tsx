"use client"
import toast from "react-hot-toast";
import Todo from "models/todoInterface";
import styles from "./home.module.css";

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
      {lists.map((item) => {
        const { id, title } = item;

        return (
          <ul className={styles.list} key={id}>
            <div
              className={styles["list__item-info"]}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span className="text-red" >id: {id} -</span>
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

export default Home;

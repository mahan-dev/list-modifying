import axios from "axios";
import Todo from "../models/todoInterface";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

class Todos {
  http = axios.create({
    baseURL: BASE_URL,
  });

  async getTodos() {
    const { data } = await this.http.get<Todo[]>("todos");
    return data;
  }

  async addTodo(title: string) {
    const { data } = await this.http.post<Todo>("todos", { title });
    return data;
  }
}

export default new Todos();

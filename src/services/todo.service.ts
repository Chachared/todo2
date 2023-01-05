import type { Todo } from "@/interfaces/todo.interface";

const BASE_URL = 'https://restapi.fr/api/todos';

export async function fetchTodo(): Promise<Todo[]> {
  return await (await fetch(BASE_URL)).json();
}

    //addTodo
    //updateTodo
    //deleteTodo







import type { Todo } from "@/interfaces/todo.interface";

const BASE_URL = 'https://restapi.fr/api/todos';

export async function fetchTodos(): Promise<Todo[]> {
  return await (await fetch(BASE_URL)).json();
}

export async function addTodo(todo:Todo): Promise<Todo> {
  return await (
  await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
          "Content-Type": 'application/json'
      }
  })
).json();
}

export async function editTodo(todoId: string, todo: Todo): Promise<Todo> {
  return await (
    await fetch(`${BASE_URL}/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify(todo),
      headers: {
          "Content-Type": 'application/json'
      }
    })
  ).json();
}

export async function deleteTodo(todoId: string): Promise<string> {
  await (await fetch(`${BASE_URL}/${todoId}`, { method: "DELETE" })).json();
  return todoId;
}






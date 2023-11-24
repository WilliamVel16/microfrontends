import { useEffect, useState } from "react";
import { storeTodo, ITodo } from "@wvelorg/store";

export default function Root(props) {

  const [todos, setTodos] = useState<ITodo[]>([]);
  
  useEffect(() => {
    const subscription = storeTodo.storeTodo$.subscribe(setTodos);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <section>{props.name} is mounted!
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
      
    </ul>
  </section>;
}

import React, { useEffect, useState } from "react";
import { storeTodo, ITodo } from "@wvelorg/store";

export default function Root(props) {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const subscription = storeTodo.storeTodo$.subscribe(setTodos);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleToggleCompleted = (id: number) => {
    storeTodo.changeCompleted(id);
  };

  const handleDeleteTodo = (id: number) => {
    storeTodo.deleteTodo(id);
  };

  return (
    <section style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headerStyle}>{props.name} is mounted!</h2>
        <ul style={listStyle}>
          {todos.map((todo) => (
            <li key={todo.id} style={listItemStyle}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  marginRight: "8px",
                }}
              >
                {todo.text}
              </span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(todo.id)}
              />
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={deleteButtonStyle}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Estilos en línea
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  height: "40vh",
  margin: "0",
};

const cardStyle = {
  width: "600px",
  backgroundColor: "#f0f0f0",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "auto",
};

const headerStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "24px",
  marginBottom: "16px",
};

const listStyle = {
  listStyle: "none",
  padding: "0",
  margin: "0",
};

const listItemStyle = {
  fontSize: "18px",
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
};

const deleteButtonStyle = {
  marginLeft: "8px",
  padding: "8px",
  backgroundColor: "#ff6b6b",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};



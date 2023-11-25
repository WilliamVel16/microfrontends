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

  return (
    <section style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headerStyle}>Welcome</h2>
        <ul style={listStyle}>
          {todos.map((todo) => (
            <li key={todo.id} style={listItemStyle}>
              {todo.text}
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
  height: "40vh", // Altura al 100% del viewport
  margin: "0", // Sin margen en la parte superior e inferior
};

const cardStyle = {
  width: "600px",
  backgroundColor: "#f0f0f0", // Color de fondo del "card"
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
  overflow: "auto"
};

const headerStyle = {
  fontFamily: "Arial, sans-serif", // Cambia la fuente según tus preferencias
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
};


import { useFetch } from "./useFetch";
import "./app.css";

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const albums = data ? data.slice(0, 10) : [];
  return (
    <div className="App-albums">
      <h1>API albums</h1>
      <button className="button-albums" onClick={handleCancelRequest}>
        Cancel Request
      </button>
      <div className="card-albums">
        <ul className="ul-card-albums">
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {albums.map((alb) => (
            <li className="li-card-albums" key={alb.id}>
              {" "}
              {alb.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

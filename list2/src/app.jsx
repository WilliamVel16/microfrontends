import { useFetch } from "./useFetch";
import "./app.css"

function App() {
    const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/photos")
    const albums = data ? data.slice(0, 10) : [];
    return(
        <div className="App" >
            <h1>API albums</h1>
            <button onClick={handleCancelRequest}>
                Cancel Request
            </button>
            <div className="card">
                <ul>
                    { error && <li>Error: {error}</li>}
                    { loading && <li>Loading...</li>}
                    { albums.map((alb) => (
                        <li key={alb.id}> {alb.title} </li>
                    )) }
                </ul>
            </div>
        </div>
    );
}

export default App
import { useFetch } from "./useFetch";
import "./app.css"

function App() {
    const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/photos")
    const albums = data ? data.slice(0, 10) : [];
    return(
        <div className="App-2" >
            <h1>API albums</h1>
            <button className="button-2" onClick={handleCancelRequest}>
                Cancel Request
            </button>
            <div className="card">
                <ul className="ul-card-2">
                    { error && <li>Error: {error}</li>}
                    { loading && <li>Loading...</li>}
                    { albums.map((alb) => (
                        <li className="li-card-2" key={alb.id}> {alb.title}</li>
                    )) }
                </ul>
            </div>
        </div>
    );
}

export default App
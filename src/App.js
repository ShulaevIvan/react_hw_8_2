import logo from './logo.svg';
import './App.css';
import useJsonFetch  from './hooks/useJsonFetch/UseJsonFetch';

function App() {
  // const url = 'http://localhost:7070/error';
  // const [data, loading, error] = useJsonFetch(url);
  // console.log(loading)
  return (
    <div className="App">
      <p>{loading ? 'loading' : 'ready'}</p>
    </div>
  );
}

export default App;

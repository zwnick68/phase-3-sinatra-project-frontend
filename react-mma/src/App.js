
import './App.css';
import HomePage from "./components/HomePage"
function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay muted loop poster=''>
        <source src="../Top Finishes_ Conor McGregor.mp4" type="video/mp4"></source>
      </video>
      <HomePage />
    </div>
  );
}

export default App;

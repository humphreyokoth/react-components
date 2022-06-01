import logo from './logo.svg';
import './App.css';

function App() {





  function FirstComponent({wordOne,wordTwo}){
    return(
      <div>
      <h1>{wordOne}</h1>
      <p>{wordTwo}</p>
      </div>
    )
  }
  return (
    <div className="App">
      <FirstComponent wordOne ="First"/>
      <FirstComponent/>
      <FirstComponent/>
    </div>
  );
}

export default App;

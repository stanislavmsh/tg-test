// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp 

function App() {

  useEffect(() => {
    tg.ready()
  },[])


  return (
    <div className="App">
      TEST
      {/* <button onClick={onClose}> Закрыть </button> */}
    </div>
  );
}

export default App;

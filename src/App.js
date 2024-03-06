// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/header';

function App() {

  const {tg} = useTelegram()
  useEffect(() => {
    tg.ready()
  },[tg])


  return (
    <div className="App">
      
      <Header />
      {/* <button onClick={onClose}> Закрыть </button> */}
    </div>
  );
}

export default App;

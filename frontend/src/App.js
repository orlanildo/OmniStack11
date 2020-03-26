import React from 'react';
import './global.css'
import Routes from './routes'

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;

// O use State retorna um Array [valr, funcaoDeAtualizacaoDoValor]
// let [ cont, setCont ] = useState(0)

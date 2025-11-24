
import React, { useState, useEffect } from 'react';
import './ContadorCurtidas.css';

function ContadorCurtidas() {
  // Estado inicial do contador
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    if (curtidas >= 5) {
      console.log("Curtidas em alta!"); 
      alert("Curtidas em alta!");      
    }
  }, [curtidas]); 

 
  const adicionarCurtida = () => {
    setCurtidas(curtidas + 1);
  };


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contador de Curtidas</h2>
      <p>Curtidas: {curtidas}</p>
      <button onClick={adicionarCurtida}>Curtir 👍</button>
      {curtidas >= 5 && <p style={{ color: "green" }}>Curtidas em alta!</p>}
    </div>
  );
}

export default ContadorCurtidas;

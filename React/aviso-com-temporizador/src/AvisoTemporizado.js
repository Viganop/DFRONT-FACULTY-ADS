// AvisoTemporizado.jsx
import React, { useState, useEffect } from "react";

function AvisoTemporizado() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    // Configura o temporizador de 3 segundos
    const timer = setTimeout(() => {
      setVisivel(false);
    }, 3000);

    // Função de limpeza para evitar vazamento de memória
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visivel) {
    return null; // não renderiza nada quando visível é false
  }

  return (
    <div>
      Bem-vindo!
    </div>
  );
}

export default AvisoTemporizado;

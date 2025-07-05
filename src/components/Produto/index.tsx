import React from 'react';


interface Props {
  
  produto: {
    id: number;
    nome: string;
    preco: number;
    // ... outros campos do produto, se houver
  };

  aoComprar: () => void;
}

const Produto: React.FC<Props> = ({ produto, aoComprar }) => {
  return (
    <div className="produto">
      <h3>{produto.nome}</h3>
      <p>Preço: R$ {produto.preco}</p>
      <button onClick={aoComprar}>Comprar</button>
    </div>
  );
};

export default Produto;

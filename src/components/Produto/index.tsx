import React from 'react'
import { Produto as ProdutoType } from '../../App'

// Função utilitária para formatar o valor em reais
export const paraReal = (valor: number): string => {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

interface Props {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  estaNosFavoritos?: boolean
  favoritar?: (produto: ProdutoType) => void
}

const Produto: React.FC<Props> = ({
  produto,
  aoComprar,
  estaNosFavoritos,
  favoritar
}) => {
  return (
    <div className="produto">
      <h3>{produto.nome}</h3>
      <p>Preço: {paraReal(produto.preco)}</p>
      <button onClick={() => aoComprar(produto)}>Comprar</button>
      {favoritar && (
        <button onClick={() => favoritar(produto)}>
          {estaNosFavoritos ? 'Remover dos favoritos' : 'Favoritar'}
        </button>
      )}
    </div>
  )
}

export default Produto

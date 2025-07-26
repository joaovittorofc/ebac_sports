import * as S from './styles'
import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.cart.items
  )

  // Soma o total do carrinho multiplicando preço e quantidade de cada item
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    return acc + item.preco * item.quantidade
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Ícone de cesta" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header

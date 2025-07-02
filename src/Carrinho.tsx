
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store'
import { removeItem, clearCart } from './store/cartSlice'

const Carrinho = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const total = items.reduce((soma, item) => soma + item.preco * item.quantidade, 0)

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {items.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.nome} — R$ {item.preco} x {item.quantidade}
              <button onClick={() => dispatch(removeItem(item.id))}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <>
          <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>Esvaziar carrinho</button>
        </>
      )}
    </div>
  )
}

export default Carrinho

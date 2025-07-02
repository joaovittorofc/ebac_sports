# EBAC Sports — Refatorado com Redux Toolkit

Este projeto é um fork do repositório original [`ogiansouza/ebac_sports`](https://github.com/ogiansouza/ebac_sports), no qual foi realizada a refatoração do gerenciamento de estado utilizando **Redux Toolkit**.

---

## ✅ O que foi feito

### 🔄 Substituição do `useState` por Redux:
- O carrinho de compras agora é controlado globalmente usando **Redux Toolkit**.
- Foi criado um **slice (`cartSlice.ts`)** responsável por adicionar, remover e limpar produtos do carrinho.

### 📦 Integração com Redux:
- Criada uma `store` global com `configureStore`
- Aplicado o `<Provider>` com a `store` no `main.tsx`
- Uso de `useSelector` e `useDispatch` para acessar e modificar o estado global.

### 🛍️ Componentes refatorados:
| Componente | O que mudou |
|------------|--------------|
| `App.tsx` | Removeu `useState` do carrinho, e usou `dispatch(addItem)` |
| `Carrinho.tsx` | Criado para exibir produtos do carrinho usando `useSelector` |
| `Header` | Passou a usar `useSelector` para contar itens e calcular total |
| `Produto` | Deixou de usar prop `aoComprar` e agora usa `dispatch(addItem)` diretamente |

---

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Redux Toolkit
- Redux Toolkit Query (pronto para uso futuro)
- Styled Components

---

## 🚀 Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/joaovittorofc/ebac_sports.git

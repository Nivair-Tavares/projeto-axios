import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Product from './components/Product'
import Sale from './components/Sale'

function App() {

  const [produtos, setProdutos] = useState([])
  const [vendas, setVendas] = useState([])

  useEffect(() => {
    console.log("Carregar Página")

    axios.get(`https://api.dionamite.com/api/products`).then(response => {
      setProdutos(response.data.data)
    })

    axios.get(`https://api.dionamite.com/api/sales`).then(response => {
      setVendas(response.data.results)
    })
  }, [])

  return (
    <>
      <div>
        <h1>A Minha Lista de Produtos</h1>
        {produtos.map(produto => (
          <Product produto={produto} key={produto.id} />
        ))}

        <h1>Lista de Vendas</h1>
        {vendas.map(venda => (
          <Sale venda={venda} key={venda.id} />
        ))}
      </div>
    </>
  )
}

export default App
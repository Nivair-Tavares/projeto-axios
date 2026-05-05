import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Product from './components/Product'

function App() {

  const [produtos, setProdutos] = useState([])

  // O que está aqui abaixo é executado apenas 1x, quando a página carrega
  useEffect(() => {
    console.log("Carregar Página")

    axios.get(`https://api.dionamite.com/api/products`).then(response => {
      const resultado = response.data
      const productsResponse = resultado.data
      setProdutos(productsResponse)
    })
  }, [])


  return (
    <>
      <div>
        <h1>A Minha Lista de Produtos</h1>

        {produtos.map(produto => (
          <Product produto={produto} key={produto.id} />
        ))}

      </div>
    </>
  )
}

export default App

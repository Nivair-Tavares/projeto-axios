import React from 'react'

function Product(props) {

    const { produto } = props
    const toPrice = cents => `€ ${cents / 100}`.replace(".", ",")

    return (
        <div className='product-card'>

            <img src='https://www.svgrepo.com/show/508699/landscape-placeholder.svg' />

            <h2>{produto.name}</h2>
            <h3>{produto.brand}</h3>

            <div className='spacer-md'></div>

            <div className='price'>{toPrice(produto.price_cents)}</div>

        </div>
    )
}

export default Product
import React from 'react'

function Sale(props) {

  const { venda } = props
  const toDate = iso => new Date(iso).toLocaleDateString('pt-PT')
  const toPrice = eur => `€ ${eur.toFixed(2).replace('.', ',')}`

  return (
    <div className='sale-card'>

      <img src='https://www.svgrepo.com/show/508699/landscape-placeholder.svg' />

      <h2>{venda.store}</h2>
      <h3>{venda.product_sku}</h3>

      <div className='spacer-md'></div>

      <div className='price'>
        <span style={{ fontSize: '0.5em', opacity: 0.6 }}>{venda.quantity}x · {toDate(venda.date)}</span>
        <br />
        {toPrice(venda.total_eur)}
      </div>

    </div>
  )
}

export default Sale
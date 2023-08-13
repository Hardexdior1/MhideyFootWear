import React from 'react'
import '../Styles/Main.css'

const MainPage = ({product}) => {
  return (
    <div className='main'>

{product.map((item)=>{
      const{name,image,negotiable,price}=item
      return <div key={item.id}>
        <div className='main-div'>
      <div className='img-carrier'>
        <img src={image} alt={name} />
      </div>

      <div className="priceAndName">
        <div className="pricePlusName">
        <h4>{name}</h4>
        <h4>&#x20A6;{price}</h4>
        </div>

        {negotiable? <i className="negotiable">negotiable</i>:<i className='notNegotiable'>Not negotiable </i>}
      </div>


        </div>


      </div>
     })}
    </div>
  )
}

export default MainPage
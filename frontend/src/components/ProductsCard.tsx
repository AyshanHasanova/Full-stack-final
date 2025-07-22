
import React from 'react'
interface KartlarnPropsu{
  shekilProps : string;
  priceProps : string;
  nameProps : string;

}

const ProductsCard:React.FC <KartlarnPropsu>= ({shekilProps,priceProps,nameProps}) => {
  return (
    <div className="card" >
   
      <div className="card-body">
      <img src={shekilProps}alt="" />
    
     <div className="card-title">
     <p className="card-text">{priceProps}</p>
    <div className="card-name">{nameProps}</div>
    <div className="rate">
           
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      </div>
     </div>
   
  
      </div>
      
    </div>

  )
}

export default ProductsCard

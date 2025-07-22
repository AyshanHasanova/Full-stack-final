
import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface Melumat{
  id:number;
  product_image:string;
  product_price: string;
  product_name : string;
}

const Search:React.FC = () => {
  const [search,setSearch] = useState ("")

  const [product,setProduct] = useState <Melumat []>([])
  useEffect(()=>{
    axios.get("/assets/product.json").then(res=>setProduct(res.data))
  },[])
  return (
   <>
    
    
    <div className="product-area">
    <input type="text" placeholder='search data' value={search} onChange={(e)=>setSearch(e.target.value)} />
    
   <i className="fa-solid fa-magnifying-glass"></i>
   <div className='myproducts'>
    {
      product && product.slice(0.8)
      .filter((x)=>x.product_name.toLowerCase().includes(search.toLowerCase()))
     
      .map((birMelumat)=>(
        <div key={birMelumat.id} className="card">
        <div className="card-image">
            <img src={birMelumat.product_image} alt="" />
            <div className="icons-overlay">
            <i className="fa-solid fa-bag-shopping"></i>
            <i className="fa-solid fa-eye"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-brands fa-nfc-directional"></i>
            </div>
            <div className="card-title">
                <div className="card-text">{birMelumat.product_price}
                </div>
                <div className="card-name">{birMelumat.product_name}</div>
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

      )
    }
   </div>

  
  
  </div>
   </>
  
 
  )
}

export default Search
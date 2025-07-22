import React from 'react'

const Discover:React.FC = () => {
  return (
    <section className="discover"data-aos="fade-up">
       
    <h2>More to Discover</h2>
    <p>Our bundles were designed to conveniently package your tanning <br/> essentials while saving you money.</p>
      <div className="shops">
        <div className="shop1 ">
            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/image-box-10.jpg" alt=""/>
            <div className="shop-text">
                <h3>Summer Collection</h3>
            <p>Shop Now  <i className="fa-solid fa-arrow-right"></i></p>
            </div>
          
        </div>

        <div className="shop1 ">
            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/image-box-11-1.jpg" alt=""/>
            <div className="shop-text">
                <h3>From Our Blog</h3>
                <p> Read More  <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </div>
      </div>
       
   


</section>
  )
}

export default Discover
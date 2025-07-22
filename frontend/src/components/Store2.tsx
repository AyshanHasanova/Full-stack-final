import React from 'react'

const Store2:React.FC = () => {
  return (
    <section className="store2">
    <div className="store2-left col-12 col-md-6">
        <h2>New York Store</h2>
            <div className="store-connection">
                <div className="direction1">
                  
                    <div className="addres">
                        <h6>Address</h6>
                        <p>3245 Abbot Kinney BLVD  - <br/> PH Venice, CA 124</p>
                        <p>76 East Houston Street <br/>
                            New York City</p>
                            <a href="#">Get Direction</a>
                  
                </div>
                </div>
                <div className="direction1">
                    <div className="hour">
                        <h6>Hour of operation</h6>
                        <p> <span>Mon - Fri: </span>08:30 - 20:00</p>
                        <p><span>Sat & Sun:</span> 09:30 - 21:30</p>
                    </div>
                </div>
               
               
           
         </div>

         <div className="store-media">
            <div className="direction1">
             
                <div className="phone">
                    <h6>Contact</h6>
                    <p>Mobile: <span>068 26589 996</span> </p>
                    <p>Hotline: <span>1900 26886</span></p>
                    <p>E-mail: hello@grace.com</p>
                </div>

            </div>

            <div className="direction2">
                <h6>Social media</h6>
                <div className="icon">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>

            </div>
         </div>
    
    </div>

   <div className="store-right col-12 col-md-6">
    <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/store-02.jpg" alt=""/>

   </div>
   </section>
  )
}

export default Store2
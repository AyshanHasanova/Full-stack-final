import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container foot py-3">

        <div className="footer-top">

          <div className="footer-left ">
            <div className="footer-section">
              <h4>Company</h4>
              <p>Find a location nearest <br /> you. See <span>Our Stores</span></p>
              <span>+391 (0)35 2568 4593</span>
              <p>hello@domain.com</p>

            </div>
            <div className="footer-section">
              <h4>Useful links</h4>
              <a href="#">New Products</a>
              <a href="#">Best Sellers</a>
              <a href="#">Bundle & Save</a>
              <a href="#">Online Gift Card</a>

            </div>
            <div className="footer-section">
              <h4>Infomation</h4>
              <a href="#">Start a Return</a>
              <a href="#">Contact Us</a>
              <a href="#">Shipping FAQ</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>

            </div>
          </div>
          <div className="footer-right ">
            <div className="footer-section ">
              <h4>Good emails</h4>
              <p>Enter your email below to be the first to know about new collections <br /> and product launches.</p>
              <form className="subscribe-form
                            ">  <input className='gmail' type="email" placeholder="Enter your email address" />
               <input className="btn" type="button" value="Subscribe" 
       style={{ backgroundColor: "black", color: "#fff", width: "40%" }} />
              </form>



            </div>
          </div>
        </div>






        <div className="footer-bottom py-5">
          <div className="icons">
            <p>© Glowing 2022</p>
            <div className="social-icons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className="glowing">
            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/elementor/thumbs/logo-black-pollo2rrr9op85vlueyalq3ndsvd1guppjav5e9o04.png" alt="" />
          </div>


          <div className="payment-icons">
            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/icon-pay.png" alt="" />
          </div>


        </div>
      </div>



    </footer>
  )
}

export default Footer
import React from 'react'

const Features:React.FC = () => {
  return (
    <section className="features">
    <div className="container features-card">
        <div className="row text-center">
            <div className="shipping-icon col-12 col-md-6 col-lg-3">
               <img src="/assets/images/icons/icon1.png" alt="" />
                <h5>Free Shipping</h5>
                <p>Free Shipping for orders over $130</p>
            </div>
            <div className="shipping-icon col-12 col-md-6 col-lg-3">
                <img src="/assets/images/icons/icon2.png" alt="" />
                 <h5>Returns
                </h5>
                 <p>Within 30 days for an exchange.</p>
             </div>
             <div className="shipping-icon col-12 col-md-6 col-lg-3">
                <img src="/assets/images/icons/icon3.png" alt="" />
                 <h5>Online Support</h5>
                 <p>24 hours a day, 7 days a week</p>
             </div>
             <div className="shipping-icon col-12 col-md-6 col-lg-3">
                <img src="/assets/images/icons/icon4.png" alt="" />
                 <h5>Flexible Payment</h5>
                 <p>Pay with Multiple Credit Cards</p>
             </div>

        </div>

    </div>
 </section>
  )
}

export default Features
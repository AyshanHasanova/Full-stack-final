import React from 'react'

const Companies:React.FC = () => {
  return (
    <section className="companies">
    <div className="conatiner shirketler">
     
            <h2>As seen in</h2>
            
            <div className="testimonials"data-aos="fade-up">
             <div className="testimonial ">
                <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/testimonial-03.png" alt=""/>
                <p>"Also the customer service is <br/> phenomenal.I would purchase again"</p>
             </div>
    
             <div className="testimonial "data-aos="fade-up">
                <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/testimonial-02.png" alt=""/>
                <p>"Great product line.Very attentive staff to <br/> deal with"</p>
             </div>
    
             <div className="testimonial third"data-aos="fade-up">
                <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/testimonial-01.png" alt=""/>
                 <p>"Looking to affordably upgrade your <br/> everday dinneware ? Looking no further than e.Space"</p>
             </div>
            </div>
      
    </div>
  

  </section>
  )
}

export default Companies
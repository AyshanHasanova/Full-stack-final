import React from 'react'

const Touch:React.FC = () => {
  return (
    <>

<section className="touch">
        <div className="container connection">
            <div className="with">
                <h2>Keep In Touch with Us</h2>
                <p>We’re talking about clean beauty gift sets, of course – and we’ve got a <br/> bouquet of beauties for yourself or someone you love.</p>
            </div>
            <div className="direction">
                <div className="direction1">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="addres">
                        <h6>Address</h6>
                        <p>3245 Abbot Kinney BLVD  - <br/> PH Venice, CA 124</p>
                        <p>76 East Houston Street <br/>
                            New York City</p>
                            <a href="#">Get Direction</a>
                    </div>
                </div>
                <div className="direction1">
                    <i className="fa-solid fa-phone"></i>
                    <div className="phone">
                        <h6>Contact</h6>
                        <p>Mobile: <span>068 26589 996</span> </p>
                        <p>Hotline: <span>1900 26886</span></p>
                        <p>E-mail: hello@grace.com</p>
                    </div>

                </div>

                <div className="direction1">
                    <i className="fa-regular fa-clock"></i>
                    <div className="hour">
                        <h6>Hour of operation</h6>
                        <p> <span>Mon - Fri: </span>08:30 - 20:00</p>
                        <p><span>Sat & Sun:</span> 09:30 - 21:30</p>
                    </div>
                </div>
            </div>
            <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560302.0769742727!2d7.630400641725654!3d51.19521574211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf689c35aee9%3A0x3a735e4f87bc8b68!2sGlowing%20Rooms%203D%20Schwarzlicht%20Minigolf%20Dresden!5e0!3m2!1saz!2saz!4v1738772702289!5m2!1saz!2saz"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

        </div>
       </section>
    </>
  )
}

export default Touch
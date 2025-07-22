import React from 'react'
import AccordionComponent from './AccordionComponent'

const Accordion2:React.FC = () => {
  return (
    <section className="accordion">
    <div className="container accordion-menu">
       <h3>Returns & Exchanges</h3>
       <div className="row faq-menu">
           <div className="accordion1 col-12 col-md-6">
               <AccordionComponent/>
           </div>
           <div className="accordion1 col-12 col-md-6">
            <AccordionComponent/>
           </div>
       </div>
    </div>
</section>
  )
}

export default Accordion2
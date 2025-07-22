import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const AccordionComponent:React.FC = () => {
  return (
    <Accordion>
    <AccordionItem header="How did my package ship?">
    Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

 </AccordionItem>

    <AccordionItem header="How long will my package take ?">
    Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.
    </AccordionItem>

    <AccordionItem header="What are business days?">
    Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.
    </AccordionItem>
  </Accordion>
  )
}

export default AccordionComponent
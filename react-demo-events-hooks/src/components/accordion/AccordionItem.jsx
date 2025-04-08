
import { useState } from "react";


const AccordionItem = ({ title, children, isAccordionOpen, onToggle }) => {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleAccordion = () => {
  //   setIsOpen(prev => !prev);
  // }




  return (
    <div className="accordion">
      <div className="accordion__title">
        {title} <button onClick={onToggle}>apri/chiudi</button>
      </div>
      {isAccordionOpen && <div className="accordion_body">
        {children}
      </div>}
    </div>

  )
}


export default AccordionItem;
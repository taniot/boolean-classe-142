
import { useState } from "react"
import AccordionItem from "./AccordionItem"

const faqs = [
  {
    id: 1,
    title: 'Domanda 1',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quos quaerat quasi similique sapiente provident dolorum blanditiis magnam dicta autem. Veritatis quasi perspiciatis qui, voluptatum error molestiae incidunt commodi magnam!'
  },
  {
    id: 2,
    title: 'Domanda 2',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quos quaerat quasi similique sapiente provident dolorum blanditiis magnam dicta autem. Veritatis quasi perspiciatis qui, voluptatum error molestiae incidunt commodi magnam!'
  },
  {
    id: 3,
    title: 'Domanda 3',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quos quaerat quasi similique sapiente provident dolorum blanditiis magnam dicta autem. Veritatis quasi perspiciatis qui, voluptatum error molestiae incidunt commodi magnam!'
  },
]



const AccordionList = () => {

  const [activeAccordion, setActiveAccordion] = useState(null);


  if (!faqs.length) {
    return <div>Nessuna FAQ trovata</div>
  }


  return <div className="accordion_list">

    {faqs.map(faq => <AccordionItem
      key={faq.id}
      title={faq.title}
      isAccordionOpen={activeAccordion === faq.id}
      onToggle={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
    >{faq.content}</AccordionItem>)}



  </div>


}

export default AccordionList;
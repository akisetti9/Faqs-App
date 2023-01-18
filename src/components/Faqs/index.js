// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="container">
      <div className="inner-container">
        <h1 className="title">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(each => (
            <FaqItem faqItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs

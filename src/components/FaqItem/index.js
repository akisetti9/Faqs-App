// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  onClickButton = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {showAnswer} = this.state
    const {faqItem} = this.props
    const {id, questionText, answerText} = faqItem
    const buttonImg = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const buttonAlt = showAnswer ? 'minus' : 'plus'
    return (
      <li key={id} className="list-container">
        <div className="question-box">
          <h1>{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            <img src={buttonImg} alt={buttonAlt} />
          </button>
        </div>
        {showAnswer ? (
          <>
            <hr className="blank-line" />
            <p>{answerText}</p>
          </>
        ) : (
          ''
        )}
      </li>
    )
  }
}

export default FaqItem

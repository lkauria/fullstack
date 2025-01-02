import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        Not given feedback yet
      </div>
    )
  }
  return (
    <div>
      {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => { 

  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {

  }
  
  const handleNeutralClick = () => {

  }

  const handleBadClick = () => {

  }

  return (
    <div>
      Give feedback

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <History allClicks={allClicks} /> 
      {/* //not as a text here but an own component\ */}
      Good, {good}
      Neutral, {neutral}
      Bad, {bad}
      <p>total {total}</p>
    </div>
  )
}

export default App;

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) =>
    <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    if(all > 0) {
        return (
            <div>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {all}</p>
                <p>average {average}</p>
                <p>positive {positive}%</p>
            </div>
        )
    } else {
        return <p>No feedback given</p>
    }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const addGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage((good + 1 - bad) / (all + 1))
    setPositive((good + 1) / (all + 1) * 100)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad) / (all + 1))
    setPositive(good / (all + 1) * 100)
  }

  const addBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - bad - 1) / (all + 1))
    setPositive(good / (all + 1) * 100)
  }

  return (
    <div>
        <h1>give feedback</h1>
        <Button onClick={addGood} text='good' />
        <Button onClick={addNeutral} text='neutral' />
        <Button onClick={addBad} text='bad' />
        <h2>statistics</h2>
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad} all={all}
            average={average}
            positive={positive}
        />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
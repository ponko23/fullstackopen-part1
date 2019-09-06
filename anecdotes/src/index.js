import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => <h1>{text}</h1>
const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>
const Anecdote = ({text}) => <p>{text}</p>
const Vote = ({vote}) => <p>has {vote} vote</p>

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0 ,0 ,0])
  const [maxIndex, setMaxIndex] = useState(0)

  const setNextAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const voteSelectedAnecdote= () => {
      const copy = [ ...points ]
      copy[selected] += 1
      setPoints(copy)
      console.log(copy)

      let max = Math.max.apply(null, copy)
      setMaxIndex(copy.indexOf(max))
      
  }
  
  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} />
      <Vote vote={points[selected]} />
      <Button clickHandler={voteSelectedAnecdote} text='vote' />
      <Button clickHandler={setNextAnecdote} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <Anecdote text={anecdotes[maxIndex]} />
      <Vote vote={points[maxIndex]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import { useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
) 

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Votes = (props) => (
  <p>has {props}</p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    console.log("randomindex", randomIndex);
    return randomIndex;
  }

  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    console.log('copy', copy);
    return copy
  }

  const [selected, setSelected] = useState(getRandomAnecdote)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <Header text="Anecdote of the day" />
      {/* Display the currently selected anecdote and its votes */}
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      {/* Button to get the next random anecdote */}
      <Button handleClick={() => setSelected(getRandomAnecdote)} text="next anecdote" />

      {/* Button to give a vote for selected anecdote */}
      <Button handleClick={() => setVotes(addVote)} text="vote" />
      <Header text="Anecdote with most votes" />

      {/* Display the anecdote with the most votes */}
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>

    </div>
  )
}

export default App
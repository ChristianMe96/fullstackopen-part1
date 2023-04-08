import { useState } from 'react'

const Header = () => <h2>give feedback</h2>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const History = ({good, neutral, bad}) => {
    return (
        <div>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header />
            <Button handleClick={() => {setGood(good + 1)}} text='good' />
            <Button handleClick={() => {setNeutral(neutral + 1)}} text='neutral' />
            <Button handleClick={() => {setBad(bad + 1)}} text='bad' />
            <History good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
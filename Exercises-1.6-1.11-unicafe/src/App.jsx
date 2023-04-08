import { useState } from 'react'

const Header = () => <h2>give feedback</h2>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({good, neutral, bad, all}) => {
    let average = (good * 1 + bad * -1) / all;
    let positive = good / all * 100;

    if (all === 0) {
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text='good' value={good}/>
                    <StatisticLine text='neutral' value={neutral}/>
                    <StatisticLine text='bad' value={bad}/>
                    <StatisticLine text='all' value={all}/>
                    <StatisticLine text='average' value={average}/>
                    <StatisticLine text='positive' value={positive} withPercentSign={true} />
                </tbody>
            </table>
        </div>
    )
}

const StatisticLine = ({text, value, withPercentSign = false}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}{withPercentSign ? '%' : ''}</td>
        </tr>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const handleGoodClick = () => {
        const updatedGood = good + 1;
        setGood(updatedGood)
        setAll(updatedGood + neutral + bad)
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1;
        setNeutral(updatedNeutral)
        setAll(good + updatedNeutral + bad)
    }

    const handleBadClick = () => {
        const updatedBad = bad + 1;
        setBad(updatedBad)
        setAll(good + neutral + updatedBad)
    }



    return (
        <div>
            <Header />
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        </div>
    )
}

export default App
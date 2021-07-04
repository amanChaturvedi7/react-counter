import PropTypes from 'prop-types'
import { useState } from 'react'

const Counter = ({ min, max }) => {
    const [counterValue, setCounterValue] = useState(min)
    const handleChange = event => {
        let { value, min, max } = event.target
        value = Math.max(Number(min), Math.min(Number(max), Number(value)))
        if (value) {
            setCounterValue(value)
        }
    };
    const incrementCounter = () => {
        if (counterValue < max)
            setCounterValue(counterValue + 1)
    }
    const decrementCounter = () => {
        if (counterValue > min)
            setCounterValue(counterValue - 1)
    }
    return (
        <div>
            <button className='dec-btn' onClick={decrementCounter}>
                -
            </button>
            <div className='counter-container'>
                <input min={min} max={max} onChange={handleChange} value={counterValue} className='counter-inp'></input>
            </div>
            <button className='inc-btn' onClick={incrementCounter}>
                +
            </button>
        </div>
    )
}

Counter.defaultProps = {
    min: 1,
    max: 1000
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
}

export default Counter

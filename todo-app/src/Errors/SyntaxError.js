import React, {useState} from 'react'

export const SyntaxError = () => {
    const[count, setCount] = useState(0)

    const handleCkick = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleCkick}>Click Me!</button>

    </div>
  )
}

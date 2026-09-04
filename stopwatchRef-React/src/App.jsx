import { useState, useRef } from 'react'
import './App.css'
// Example using useRef

export default function Stopwatch() {
  const [starttime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
    const internalRef = useRef(null)

    function handleStart() {
      setStartTime(Date.now())
      setNow(Date.now())
    }

    clearInterval(internalRef.current);
    internalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)

    function handleStop() {
      clearInterval(internalRef.current)
    }

    let secondPassed = 0;
    if (starttime != null && now != null) {
      secondPassed = (now - starttime) / 1000;
    }
  return (
    <>
    <h1>Time passed: {secondPassed.toFixed(3)}</h1>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    </>
  )
}



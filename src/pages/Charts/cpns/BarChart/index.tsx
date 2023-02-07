import React, { useEffect, useRef } from 'react'
import PieBox from './style'
import Chart from '../../charts copy'

const state = [
  { num: 80 },
  { num: 100 },
  { num: 60 },
  { num: 130 },
  { num: 170 },
  { num: 160 },
  { num: 150 },
]


const BarChart: React.FC = () => {
  
  const barRef = useRef(null)

  useEffect(()=>{
    const c1: any = barRef.current
    const context = c1.getContext('2d')
    const bar = new Chart(100, 300, 400, 200, context)
    
    bar.showLineOrScale(true, true)    
    bar.Bar(20, state)
  }, [])

  return (
    <PieBox>
      <canvas ref={barRef} id='c1' width="600" height="400"></canvas>
    </PieBox>
  )
}

export default BarChart
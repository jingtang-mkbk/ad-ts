import React, { useEffect, useRef } from 'react'
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


const LineChart: React.FC = () => {
  const lineRef =useRef(null)

  useEffect(()=>{
    const c1: any = lineRef.current
    const context = c1.getContext('2d')
    const bar = new Chart(100, 300, 400, 200, context)
    
    bar.showLineOrScale(true, true)    
    bar.Line(state)
  }, [])

  return (
    <>
    <div style={{ width: '600px', height: '400px', borderRadius: '4px' }}>
      <canvas ref={lineRef} width="600" height="400"></canvas>
    </div>
    </>
  )
}

export default LineChart
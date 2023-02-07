import React from "react"
import BarChart from "./cpns/BarChart"
import LineChart from "./cpns/LineChart"
import PieChart from "./cpns/PieChart"
import TestChart from './cpns/TestChart'
import ChartBox from './style'

const Charts:React.FC = () => {

  return (
    <>
      <ChartBox>
        <div className="left">
          <div className="barchart">
            <BarChart/>
          </div>
        </div>
        <div className="right">
          <div className="linechart">
            <LineChart/>
          </div>
        </div>
        <div className="left">
          <div className="piechart">
            <PieChart/>
          </div>
        </div>
        <div className="right">
          <div className="testchart">
            <TestChart/>
          </div>
        </div>
      </ChartBox>
    </>
  )
}

export default Charts
import styled from "styled-components"

const ChartBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .left, .right{
    width: 50%;
    margin-bottom: 12px;

    .barchart, .linechart, .piechart, .testchart{
      padding: 24px;
      background-color: #fff;
      border-radius: 2px;
    }
  }

  .left{
    padding-right: 6px;
    

    .barchart{

    }
  }

  .right{
    padding-left: 6px;

    .linechart{

    }
  }
`
export default ChartBox
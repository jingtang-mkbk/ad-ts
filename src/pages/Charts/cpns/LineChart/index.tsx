import React, { useEffect, useRef } from 'react'

const state = [
      { num: 80 },
      { num: 100 },
      { num: 60 },
      { num: 130 },
      { num: 170 },
      { num: 160 },
      { num: 150 },
    ]
const xTxt = ['1', '2', '3', '4', '5', '6', '7']
const yTxt = ['50', '100', '150']

const LineChart: React.FC = () => {
  const lineRef =useRef(null)

  useEffect(()=>{
    const c1: any = lineRef.current
    const context = c1.getContext('2d')

    context.lineWidth = 1;
    context.lineCap = 'square';

    // 坐标系原点x,y  坐标系宽高width height   刻度scale    需要有beginPath closePath
    const CoordinateSystem = (xOrigin: number, yOrigin: number, xWidth: number, yHeight: number, line=true, scale=false) => {
      const scaleWidth = 50
      const arrowWidth = 10
      const arrowHeight = 5
      const scaleHegiht = 5
      const txtHeight = 20
      
      // 是否显示坐标
      if (line){
        // x轴
        context.moveTo(xOrigin, yOrigin);
        context.lineTo(xWidth + xOrigin, yOrigin);
        // y轴
        context.moveTo(xOrigin, yOrigin);
        context.lineTo(xOrigin, yOrigin - yHeight);
        context.strokeStyle = 'black';
        context.stroke();
        
        // x轴箭头
        context.moveTo(xWidth + xOrigin + arrowWidth, yOrigin);
        context.lineTo(xWidth + xOrigin - arrowWidth, yOrigin - arrowHeight);
        context.lineTo(xWidth + xOrigin - arrowWidth, yOrigin + arrowHeight);
        // y轴箭头
        context.moveTo(xOrigin, yOrigin - yHeight - arrowWidth);
        context.lineTo(xOrigin - arrowHeight, yOrigin - yHeight + arrowWidth);
        context.lineTo(xOrigin + arrowHeight, yOrigin - yHeight + arrowWidth);
        context.fillStyle = 'black';

        context.fill();
      }
      
      // 是否显示刻度
      if(scale){
        context.font='12px 微软雅黑';
        context.textAlign='center';
        context.textBaseline='bottom';
        // x轴刻度
        xTxt.forEach((it,index) => {
          context.moveTo(xOrigin + scaleWidth * (index + 1), yOrigin);
          context.lineTo(xOrigin + scaleWidth * (index + 1), yOrigin + scaleHegiht);
          context.fillText(it, xOrigin + scaleWidth * (index + 1), yOrigin + txtHeight);
        })
        // y轴刻度
        yTxt.forEach((it, index) => {
          context.moveTo(xOrigin, yOrigin - scaleWidth * (index + 1));
          context.lineTo(xOrigin - scaleHegiht, yOrigin - scaleWidth * (index + 1));
          context.fillText(it, xOrigin - txtHeight,  yOrigin - scaleWidth * (index + 1) + 5);
        })

        context.stroke();
      }

      // 折线图
      // 折线图
      const lineChart = (data: any) => {
        context.moveTo(xOrigin + scaleWidth, yOrigin - data[0].num)
        
        data.forEach((it: any, index: number) => {
          if (index >= 1)
            context.lineTo(xOrigin + scaleWidth*(index+1), yOrigin - it.num);
        })
        context.stroke();
      }
      lineChart(state)

    }
    CoordinateSystem(100, 300, 400, 200, true, true)
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
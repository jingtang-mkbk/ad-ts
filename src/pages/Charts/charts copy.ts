

export default class Chart{
  xTxt: string[]
  yTxt: string[]
  context: CanvasRenderingContext2D
  xOrigin: number
  yOrigin: number
  xWidth: number
  yHeight: number
  scaleWidth: number

  // 坐标原点xOrigin, yOrigin    canvas宽高xWidth, yHeight    canvas的id
  constructor(xOrigin: number, yOrigin: number, xWidth: number, yHeight: number, context: CanvasRenderingContext2D){
    this.xTxt = ['1', '2', '3', '4', '5', '6', '7']
    this.yTxt = ['50', '100', '150']
    // this.c1 = document.getElementById(canvasId);
    this.context = context;
    this.context.lineWidth = 1;
    this.context.lineCap = 'square';
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;
    this.xWidth = xWidth;
    this.yHeight = yHeight;
    this.scaleWidth = 50
  }

  
  // 柱状图
  Bar = (barWidth: number, data: any) => {
    data.forEach((it: any, index: any) => {
      const h = it.num - barWidth
      this.context.beginPath();
      this.context.moveTo(this.xOrigin + this.scaleWidth * (index + 1) + barWidth / 2, this.yOrigin - barWidth / 2);
      this.context.arc(this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin - barWidth / 2, barWidth / 2, 0, Math.PI, false);
      this.context.moveTo(this.xOrigin + this.scaleWidth * (index + 1) + barWidth / 2, this.yOrigin - h - barWidth / 2);
      this.context.arc(this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin - h - barWidth / 2, barWidth / 2, 0, Math.PI, true);

      this.context.rect(this.xOrigin + this.scaleWidth * (index + 1) - barWidth / 2, this.yOrigin - h - barWidth / 2, barWidth, h);
      const linearGradient = this.context.createLinearGradient(this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin, this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin - h - barWidth);
      linearGradient.addColorStop(0, 'rgb(254, 174, 161)');
      linearGradient.addColorStop(1, 'rgb(253, 116, 114)');
      this.context.fillStyle = linearGradient;
      this.context.fill();
      this.context.closePath();
    })
    // context.lineTo(this.xOrigin + this.scaleWidth - barWidth /2, y);
  }

  // 折线图
  Line = (data: any) => {
    this.context.moveTo(this.xOrigin + this.scaleWidth, this.yOrigin - data[0].num)

    data.forEach((it: any, index: any) => {
      if (index >= 1)
        this.context.lineTo(this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin - it.num);
    })
    this.context.stroke();
  }

  // 显示刻度，横纵坐标
  showLineOrScale = (line = true, scale = false) =>{
    const arrowWidth = 10
    const arrowHeight = 5
    const scaleHegiht = 5
    const txtHeight = 20

    // 是否显示坐标
    if (line) {
      // x轴
      this.context.moveTo(this.xOrigin, this.yOrigin);
      this.context.lineTo(this.xWidth + this.xOrigin, this.yOrigin);
      // y轴
      this.context.moveTo(this.xOrigin, this.yOrigin);
      this.context.lineTo(this.xOrigin, this.yOrigin - this.yHeight);
      this.context.strokeStyle = 'black';
      this.context.stroke();
      // x轴箭头
      this.context.moveTo(this.xWidth + this.xOrigin + arrowWidth, this.yOrigin);
      this.context.lineTo(this.xWidth + this.xOrigin - arrowWidth, this.yOrigin - arrowHeight);
      this.context.lineTo(this.xWidth + this.xOrigin - arrowWidth, this.yOrigin + arrowHeight);
      // y轴箭头
      this.context.moveTo(this.xOrigin, this.yOrigin - this.yHeight - arrowWidth);
      this.context.lineTo(this.xOrigin - arrowHeight, this.yOrigin - this.yHeight + arrowWidth);
      this.context.lineTo(this.xOrigin + arrowHeight, this.yOrigin - this.yHeight + arrowWidth);
      this.context.fillStyle = 'black';
      this.context.fill();
    }

    // 是否显示刻度
    if (scale) {
      this.context.font = '12px 微软雅黑';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'bottom';
      // x轴刻度
      this.xTxt.forEach((it, index) => {
        this.context.moveTo(this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin);
        this.context.lineTo(this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin + scaleHegiht);
        this.context.fillText(it, this.xOrigin + this.scaleWidth * (index + 1), this.yOrigin + txtHeight);
      })
      // y轴刻度
      this.yTxt.forEach((it, index) => {
        this.context.moveTo(this.xOrigin, this.yOrigin - this.scaleWidth * (index + 1));
        this.context.lineTo(this.xOrigin - scaleHegiht, this.yOrigin - this.scaleWidth * (index + 1));
        this.context.fillText(it, this.xOrigin - txtHeight, this.yOrigin - this.scaleWidth * (index + 1) + 5);
      })

      this.context.stroke();
    }
  }
}

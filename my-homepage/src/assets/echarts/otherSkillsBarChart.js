export const otherOption = {
  title: { text: '其他技术' },
  tooltip: {},
  xAxis: {
    max: 100
  },
  yAxis: {
    data: ['Android', 'Webpack', '部署发布', 'SQL', 'Photoshop', 'Git'],
    name: '其他技术',
    axisLabel: {
      interval: 0,
      rotate: 30
    }
  },
  series: [{
    name: '熟练度',
    type: 'bar',
    data: [30, 60, 80, 60, 80, 70],
    itemStyle: {
      normal: {
        color: '#e2ec58'
      }
    }
  }]
}

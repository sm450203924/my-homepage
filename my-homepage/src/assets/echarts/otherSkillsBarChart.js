export const otherOption = {
  title: { text: '其他技术' },
  tooltip: {},
  xAxis: {
    max: 100
  },
  yAxis: {
    data: ['Android', 'Git', 'Webpack', 'SQL', 'Photoshop'],
    name: '其他技术',
    axisLabel: {
      interval: 0,
      rotate: 30
    }
  },
  series: [{
    name: '熟练度',
    type: 'bar',
    data: [30, 60, 60, 70, 90],
    itemStyle: {
      normal: {
        color: '#e2ec58'
      }
    }
  }]
}

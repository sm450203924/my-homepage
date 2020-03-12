export const frontendOption = {
  title: { text: '前端技术' },
  tooltip: {},
  xAxis: {
    max: 100

  },
  yAxis: {
    data: ['Jquery', 'Bootstrap', 'React', 'Vue', 'Javascript', 'CSS(3)', 'HTML(5)'],
    name: '前端技术',
    nameLocation: 'end',
    axisLabel: {
      interval: 0,
      rotate: 30
    }
  },
  series: [{
    name: '熟练度',
    type: 'bar',
    barWidth: '50%',
    data: [70, 70, 70, 85, 85, 95, 90],
    itemStyle: {
      normal: {
        color: '#434dc6'
      }
    }
  }]
}

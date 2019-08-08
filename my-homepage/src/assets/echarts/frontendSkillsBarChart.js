export const frontendOption = {
  title: { text: '前端技术' },
  tooltip: {},
  xAxis: {
    max: 100

  },
  yAxis: {
    data: ['React', 'Angular', 'Vue', 'Jquery', 'Bootstrap', 'Javascript', 'CSS(3)', 'HTML(5)'],
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
    data: [20, 40, 50, 75, 70, 85, 75, 95, 90],
    itemStyle: {
      normal: {
        color: '#434dc6'
      }
    }
  }]
}

export const frontendOption = {
  title: { text: '前端技术' },
  tooltip: {},
  xAxis: {
    max: 100

  },
  yAxis: {
    data: ['React', 'Angular', 'Vue', 'AngularJS', 'Jquery', 'Bootstrap', 'Javascript', 'CSS(3)', 'HTML(5)'],
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
    data: [20, 40, 50, 60, 80, 85, 65, 95, 90],
    itemStyle: {
      normal: {
        color: '#434dc6'
      }
    }
  }]
}

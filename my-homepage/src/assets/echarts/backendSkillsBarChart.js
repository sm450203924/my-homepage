export const backendOption = {
  title: { text: '后端语言' },
  tooltip: {},
  xAxis: {
    max: 100
  },
  yAxis: {
    data: ['C++', 'Python', 'PHP', '.NET C#', 'Java'],
    name: '后端语言',
    axisLabel: {
      interval: 0,
      rotate: 30
    }
  },
  series: [{
    name: '熟练度',
    type: 'bar',
    data: [50, 65, 60, 50, 70],
    itemStyle: {
      normal: {
        color: '#b03b23'
      }
    }
  }]
}

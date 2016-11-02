import {Line} from 'vue-chartjs'
export default Line.extend({
  mounted () {
    this.renderChart({
      labels: ['第一季度', '第二季度', '第三季度', '第四季度'],
      datasets: [
        {
          label: 'aaa',
          backgroundColor: '#f87979',
          data: [40, 20, 30, 28]
        }
      ]
    })
  }
})

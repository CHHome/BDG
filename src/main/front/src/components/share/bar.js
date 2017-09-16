import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;
/*扩展定义组件*/
export default Bar.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})


import {Bar} from 'vue-chartjs'

export default Bar.extend({
  props:['data','options'],
  mounted(){
    console.log(this.options);
    this.renderChart(this.data,this.options);
  }
})

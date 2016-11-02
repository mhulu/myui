<template>
  <div class="container-fluid container-fullw padding-bottom-10">
    <div class="row">
      <div class="col-sm-6 col-lg-4">
        <div class="panel panel-azure no-border no-radius">
          <div class="panel-body no-padding">
            <div class="space10 padding-15">
              <h4 class="text-white text-bold no-margin"><i class="fa fa-file-text"></i> 我的笔记本</h4>
              <div class="block margin-top-15 margin-bottom-10">
               <i class="fa fa-file-text stats-icon"></i>
               <ul class="stats-list">
                 <li>演示数据1</li>
                 <li>演示数据2</li>
                 <li>演示数据3</li>
               </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="col-sm-6 col-lg-4">
        <div class="panel panel-purple no-border no-radius">
          <div class="panel-body no-padding">
            <div class="space10 padding-15">
              <h4 class="text-white text-bold no-margin"><i class="fa fa-clock-o"></i> 待办事宜</h4>
              <div class="block margin-top-15 margin-bottom-10">
               <i class="fa fa-clock-o stats-icon"></i>
                <ul class="stats-list">
                 <li>去总局拿资料</li>
                 <li>分发文件</li>
                 <li>打印文稿</li>
               </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="panel panel-green no-border no-radius">
          <div class="panel-body no-padding">
            <div class="space10 padding-15">
              <h4 class="text-white text-bold no-margin"><i class="fa fa-puzzle-piece"></i> 应用中心</h4>
              <div class="block margin-top-15 margin-bottom-10">
               <i class="fa fa-puzzle-piece stats-icon"></i>
               <ul class="stats-list">
                 <li>聊天室</li>
                 <li>内容发布</li>
                 <li>公卫管理</li>
               </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-light-grey">
        <div class="panel-heading border-light">微信公众号关注人数</div>
          <div class="body">
            <chart :type="'line'" :data="data" :options="options"></chart>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-light-grey">
        <div class="panel-heading border-light">内部人员构成</div>
          <div class="body">
            <chart :type="'pie'" :data="dataPie"></chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from '../../components/Chart.vue'

export default {
  components: {
    Chart
  },
  data () {
    return {
      dataPie: {
        labels: ['20岁以下', '20岁-35岁', '35岁-45岁', '45岁-55岁', '55岁以上'],
        datasets: [{
          data: [60, 200, 290, 500, 22],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#1abc9c',
            '#e67e22'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#1abc9c',
            '#e67e22'
          ]
        }]
      },
      data: {
        labels: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份'],
        datasets: [
          {
            label: '2016上半年体质指数走向',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [23, 30, 26, 27, 38, 39],
            spanGaps: false
          }
        ]
      },
      options: {
        segmentShowStroke: false
      }
    }
  }
}
</script>
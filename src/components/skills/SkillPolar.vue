<script>
  import { PolarArea } from 'vue-chartjs'

  export default {
    extends: PolarArea,
    data () {
      return {
        chartData: {
          labels: [
              'HTML', 
              'CSS', 
              'Sass', 
              'Javascript', 
              'NodeJS',
              'Express',
              'VueJS',
              'ReactJS',
              'Redux',
              'Gatsby',
              'NextJS',
              'MongoDB',
              'PostGreSQL',
              'GitKraken',
              'Git'
            ],
          datasets: [
            {
              label: 'Polar Area Chart',
              borderWidth: 1,
              backgroundColor: [
                'rgb(228, 77, 38)',
                'rgb(1, 112, 186)',
                'rgb(204, 104, 153)',
                'rgb(240, 219, 79)',
                'rgb(104, 196, 0)',                
                'rgb(184, 184, 193)',                
                'rgb(65, 184, 131)',                
                'rgb(97, 218, 251)',                
                'rgb(118, 74, 188)',                
                'rgb(116, 76, 158)',                
                'rgb(165, 165, 165)',                
                'rgb(126, 110, 102)',                
                'rgb(51, 103, 145)',                
                'rgb(18, 131, 121)',                
                'rgb(222, 76, 54)'                
              ],
              data: [8, 8, 7, 7, 6, 5, 7, 6, 5, 7, 5, 7, 6, 5, 4]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animateRotate: true,
          scale: {
                ticks: {
                    display: true,
                    maxTicksLimit: 1
                }
            },
            legend: {
                display: false,
                position: 'right'
            }
        },
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
}
</script>


import React, {
  Component
} from 'react'

const GroupHighchart = require('react-highcharts')
const GroupHighchartMore = require('highcharts-more')
GroupHighchartMore(GroupHighchart.Highcharts)


export default class StageReportKidHighchart extends Component {
  constructor(props) {
    super(props)
    const {
      ReportGrowHighchart
    } = this.props
    this.config = {
      chart: {
        BackgroundColor: '#000',
        polar: true,
        type: 'line',
        //height:300
        /* spacing:[30,0,30,0]*/
      },
      credits: {
        enabled: false //去掉水印
      },
      title: {
        text: '图中表明的星级为自己宝宝的星级',
        floating: false,
        align: 'left',
        style: {
          color: '#999',
          fontSize: '0.1rem',
        },
        y: 5
      },
      pane: {
        size: '75%'
      },
      xAxis: {
        categories: [
          '语言' + ReportGrowHighchart[0],
          '数理逻辑' + ReportGrowHighchart[1],
          '运动' + ReportGrowHighchart[2],
          '视觉空间' + ReportGrowHighchart[3],
          '音乐' + ReportGrowHighchart[4],
          '人际交往' + ReportGrowHighchart[5],
          '自然观察' + ReportGrowHighchart[6],
          '自我认知' + ReportGrowHighchart[7]
        ],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
          style: {
            fontSize: '0.1rem',
            color: '#999'
          },
          x: 0,
          y: 5
        },
      },
      yAxis: {
        tickPixelInterval: 10,
        labels: {
          enabled: false //Y轴刻度值不显示
        },
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
      },
      tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}"><br/>',
      },
      series: [{
        type: 'area',
        color: '#12B7F5',
        data: ReportGrowHighchart,
        pointPlacement: 'on',
      }],
      legend: {
        enabled: false,
      }
    }
  }
  render() {
    return (
      <div className="ReportGroupHighchart">
        <GroupHighchart config={this.config} style={{"min-width":"2rem","max-width": "2.5rem","height":"1.5rem","margin": "0 auto"}} />
        {this.props.children}
      </div>
    )
  }
}

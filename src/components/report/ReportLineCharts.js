import React, {
  Component
} from 'react'

const ReactHighcharts = require('react-highcharts')

class ReportLineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    const {
      unit,
      testName,
      chartTitle,
      categories,
      weightHigherValue,
      weightLowerValue,
      weightTestValue
    } = this.props
    this.config = {
      chart: {
        height: 300,
        backgroundColor: 'none'
      },
      credits: {
        enabled: false
      },
      title: {
        text: chartTitle,
        align: 'left',
        y: 2,
        style: {
          fontSize: '13px',
          color: '#B2B2B2'
        }
      },
      colors: ["#FF5555", "#FCCA77", "#00CAAB"],
      xAxis: {
        labels: {
          step: 2,
          align: 'center',
          style: {
            color: '#B2B2B2',
            fontSize: "10px"
          },
          autoRotation: false,
        },
        gridLineColor: "#DFDDD6",
        gridLineDashStyle: 'Dot',
        gridLineWidth: 1.5,
        tickLength: 5,
        categories: categories
      },
      yAxis: {
        title: {
          text: ''
        },

        labels: {
          align: 'left',
          x: 3,
          y: -5,
          style: {
            color: '#B2B2B2',
            fontSize: "10px",
          }
        },
        gridLineColor: "#DFDDD6",
        gridLineDashStyle: 'Dot',
        gridLineWidth: 1.5,
      },
      tooltip: {
        valueSuffix: unit
      },
      plotOptions: {
        series: {
          events: {
            //控制图标的图例legend不允许切换
            legendItemClick: function(event) {
              return false; //return  true 则表示允许切换
            }
          }
        }
      },
      legend: {
        enabled: true,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        y: 20,
        x: -5,
        borderWidth: 0,
        itemStyle: {
          fontSize: '12px',
          color: '#888',
          fontWeight: 'normal'
        }
      },
      series: [{
        name: testName + '上限',
        marker: {
          radius: 3,
          symbol: 'circle'
        },
        data: weightHigherValue
      }, {
        marker: {
          radius: 3,
          symbol: 'circle'
        },
        name: testName + '下限',
        data: weightLowerValue
      }, {
        marker: {
          radius: 3,
          symbol: 'circle'
        },
        name: '实测' + testName,
        data: weightTestValue
      }]
    }
  }
  render() {
    return (
      <div className="chartsBox" style={{"width":"108%","marginLeft":"-4%","marginTop":"0.4rem"}}>
        <ReactHighcharts config={this.config}></ReactHighcharts>
      </div>
    )
  }
}

export default ReportLineCharts

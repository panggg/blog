import React, {
  Component
} from 'react'

const ReactHighcharts = require('react-highcharts')

class ReportBarCharts extends Component {
  constructor(props) {
    super(props)
    const {
      chartTitle,
      categories,
      chartData
    } = this.props
    this.config = {
      colors: ["rgba(245,136,87,0.76)", "rgba(245,136,87,0.76)", "rgba(253,191,48,0.76)", "rgba(103,201,248,0.76)", "rgba(254,127,170,0.76)", "rgba(250,116,117,0.76)", "rgba(254,221,56,0.76)", "rgba(146,207,104,0.76)", "rgba(255,155,244,0.76)"],
      title: {
        text: chartTitle,
        align: 'left',
        y: 2,
        style: {
          fontSize: '13px',
          color: '#B2B2B2'
        }
      },
      xAxis: {
        labels: {
          align: 'center',
          style: {
            color: '#B2B2B2',
            fontSize: "10px"
          },
          autoRotation: false,
          formatter: function() {
            let labelVal = this.value;
            let reallyVal = labelVal;
            if (labelVal.length > 3) {
              reallyVal = labelVal.substr(0, 2) + "<br/>" + labelVal.substring(2, labelVal.length);
            }
            return reallyVal;
          }
        },
        tickLength: 0,
        showFirstLabel: false,
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
          },
          formatter: function() {
            return this.value + '%';
          }
        },
        min: 0,
        max: 100,
        tickInterval: 10,
        gridLineColor: "#DFDDD6",
        gridLineDashStyle: 'Dot',
        gridLineWidth: 1.5,
      },
      tooltip: {
        valueSuffix: '%'
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'column',
        name: "百分比",
        colorByPoint: true,
        data: chartData,
      }]
    }
  }

  render() {
    return (
      <div className="chartsBox" style={{"width":"108%","marginLeft":"-4%","marginTop":"0.2rem","position":"relative"}}>
        <ReactHighcharts config={this.config}></ReactHighcharts>
        {this.props.children}
      </div>
    )
  }
}

export default ReportBarCharts

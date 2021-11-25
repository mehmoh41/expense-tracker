import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)

    const maxDataPoint = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {
            props.dataPoints.map((dataPoint,index) => 
            <ChartBar 
            value={dataPoint.value} 
            key={index} 
            label={dataPoint.label} 
            maxValue={maxDataPoint} 
            />
            )
        }
        
        </div>
    )
}
export default Chart;
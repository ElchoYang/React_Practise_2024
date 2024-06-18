import { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import useDashboard from './../hooks/useDashboard'
const DashboardView = () => {

    const [chartOptions, setChartOptions] = useState({})
    const { getChartA } = useDashboard()

    useEffect(() => {
        getChartA().then((option) => {
            setChartOptions(option)
        })
    }, [])

    return (
        <>
            <div style={{ height: '500px', width: '100%' }}>
                <ReactEcharts
                    option={chartOptions}
                    style={{ height: '100%', width: '100%' }}
                />
            </div>
        </>
    )

}

export default DashboardView;
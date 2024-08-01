import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Chart = () => {
    return (
        <div className='chart-container'>
            <div className="chart-header">
                <div>Portion of Sales</div>
                <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
            <div className="graph">
                <img src="/src/assets/chart.png" alt="chart" id='chart-img'/>
            </div>
        </div>
    )
}

export default Chart
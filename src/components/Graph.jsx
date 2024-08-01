import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Graph = () => {
    return (
        <div className='graph-container'>
            <div className="graph-header">
                <div>Sales vs Orders</div>
                <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
            <div className="graph">
                <img src="/src/assets/graph.png" alt="graph" id='graph-img'/>
            </div>
        </div>
    )
}

export default Graph
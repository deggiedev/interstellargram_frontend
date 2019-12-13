import React from 'react'
import DashboardCard from './DashboardCard.js'
import { Card } from 'semantic-ui-react'

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Card.Group centered className="Dashboard">
                    {Object.entries(this.props.celestialEvents).map(([key, value]) => key !== 'location' ? <DashboardCard celestialEvent={key} celestialEventData={value}/> : null)}
                </Card.Group>
            </>       
        )
    } 
}

export default Dashboard;
import React from 'react'
import { Card } from 'semantic-ui-react'

class DashboardCard extends React.Component {
    render() {
        return (
            <>
                <Card className="DashboardCard">
                    <h2>{this.props.celestialEvent}</h2>
                    <h2>{this.props.celestialEventData}</h2>
                </Card>
            </>
        )
    }
}

export default DashboardCard;
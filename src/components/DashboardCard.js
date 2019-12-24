import React from 'react'
import { Card } from 'semantic-ui-react'

class DashboardCard extends React.Component {

    render() {
        return (
            <>
                <Card className="DashboardCard">
                    <h1>{isNaN(this.props.celestialEventData) === false ? Math.round(this.props.celestialEventData) : this.props.celestialEventData}</h1>
                    <Card.Content extra>
                    <h2>{this.props.celestialEvent.replace(/_/, " ")}</h2>
                    </Card.Content>
                </Card>
            </>
        )
    }
}

export default DashboardCard;
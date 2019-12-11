import React from 'react'

class DashboardCard extends React.Component {
    render() {
        return (
            <>
                <div className="DashboardCard">
                    <h2>{this.props.celestialEvent}</h2>
                    <h2>{this.props.celestialEventData}</h2>
                </div>
            </>
        )
    }
}

export default DashboardCard;
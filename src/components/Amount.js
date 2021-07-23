// React Amount Component
import React from 'react'

const Amount = (props) => {
    return (
        <div className="mx-3">
            <div className="card">
                <div className="card-body display-6">
                    <p className="lead text-muted fs-6">{ props.allAmounts[0].DATE }</p>
                    Rs.{ props.allAmounts[0].SAVED }
                </div>
            </div>
        </div>
    )
}

export default Amount

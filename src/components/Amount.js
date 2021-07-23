// React Amount Component
import React from 'react'

const Amount = (props) => {
    return (
        <div className="m-3">
            <div className="card">
                <div className="card-body display-6">
                    <p className="lead text-muted fs-6">{ props.amount.DATE }</p>
                    Rs.{ props.amount.SAVED }
                </div>
            </div>
        </div>
    )
}

export default Amount

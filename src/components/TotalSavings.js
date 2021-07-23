// React Total Savings Component
import React from 'react'
import Amount from './Amount'

const TotalSavings = (props) => {
    return (
        <>
        { props.totalAmount.map( (eachAmount) => {
            return <Amount amount={eachAmount} />
        } ) }
        </>
    )
}

export default TotalSavings

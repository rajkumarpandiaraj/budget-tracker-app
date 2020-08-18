import React from 'react'

function Balance(props) {
    const {budget, totalExpenses} = props
    const balance = budget - totalExpenses
    return (
        <div className="budget-container-display">
                <div className="budget display">
                    <h3>budget</h3>
                    <span>Rs.{budget}</span>
                </div>

                <div className="expenses display">
                    <h3>expenses</h3>
                <span>RS.{totalExpenses}</span>
                </div>

                <div className="balance display">
                    <h3>balance</h3>
                    <span>RS.{balance}</span>
                </div>
            </div>
    )
}

export default Balance
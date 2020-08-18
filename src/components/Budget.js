import React from 'react'

function Budget(props) {
    const {budgetValue, handleBudgetChange, handleSubmit} = props;
    return (
        <form action="" id="budget-form">
            <label>please enter your budget</label>
            <input type="number" name="budget" id="budget-input" value={budgetValue} onChange={handleBudgetChange} />
            <input type="button" value="Calculate"  onClick={handleSubmit}/>
        </form>
    )
}

export default Budget

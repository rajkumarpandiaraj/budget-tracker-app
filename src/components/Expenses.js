import React from 'react'
import Expenselist from './Expenselist' 


function Expenses(props) {
    const {handleExpenseDescriptionChange, handleExpenseChange, handleSubmit, expenseDescriptionValue, expenseAmountValue, expensesArr} = props
    return (
        <>
            <form action="" id="expenses-form">
                <label>please enter your expenses</label>
                <input onChange={handleExpenseDescriptionChange} value={expenseDescriptionValue} type="text" name="expenses-title" id="expenses-title"/>
                <label>please enter your expenses amount</label>
                <input onChange={handleExpenseChange} value={expenseAmountValue}type="text" name="expenses-amount" id="expenses-amount"/>
                <input type="button" value="Add Expenses" onClick={handleSubmit} />
            </form>
            
        <div className="expenses-container-display">
            <ul>
                <li className='list-item'>
                    <span>EXPENSE TITLE</span>
                    <span>EXPENSE AMOUNT</span>
                </li>
                {
                    expensesArr.map(expense => <Expenselist key={expense.expenseDescription} title={expense.expenseDescription} amount={expense.expenseAmount} /> )
                }
            </ul>
        </div>
            
            
        </>

    )
}

export default Expenses

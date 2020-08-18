import React,{useReducer, useEffect} from 'react'
import Budget from './Budget'
import Expenses from './Expenses'
import Balance from './Balance'
// import Expenselist from './Expenselist' 

const initialState = {
    total : 0,
    budget : 0,
    budgetValue : '',
    expenses : {
        expenseDescription : 'rent',
        expenseAmount : 5000
    },
    expensesArr : []
}
function reducer(state, action){
    switch(action.event){
        case 'budgetValueOnChange' :
            return {...state, budgetValue : action.value}
        case 'expenseDescriptionChange' :
            return {...state, expenses :{...state.expenses, expenseDescription : action.value}}
        case 'expenseChange' :
            return {...state, expenses :{...state.expenses, expenseAmount : action.value}} 
        case 'budgetSubmit':
            return({...state, budget : state.budgetValue, budgetValue : ''}) 
            case 'expenseSubmit':
                return({...state, expensesArr: [...state.expensesArr, state.expenses], expenses:{expenseAmount : '',expenseDescription : ''}})
            case 'sum':
                return {...state, total: action.value}
                default :
            return state
    }
}

function Budgetapp() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        let totalExpenses = 0
        state.expensesArr.forEach(expense => {
            totalExpenses += +expense.expenseAmount
        });

        dispatch({event : 'sum', value : totalExpenses})
    },[state.budget, state.expensesArr])
    return (
        <div className='container'>
            <h2>Budget App</h2>
            <div id='budget-container'>
                <Budget budgetValue={state.budgetValue} 
                        handleBudgetChange={(e)=> dispatch({event: 'budgetValueOnChange', value: e.target.value})} 
                        handleSubmit={(e)=> dispatch({event: 'budgetSubmit'})} />
                <Balance budget={state.budget}
                        totalExpenses={state.total}/>
            </div>
            <div id='expenses-container'>
                <Expenses handleExpenseDescriptionChange={(e)=> dispatch({event: 'expenseDescriptionChange', value: e.target.value})}
                            handleExpenseChange={(e)=> {e.preventDefault(); dispatch({event: 'expenseChange', value: e.target.value})}}
                            handleSubmit={(e)=> dispatch({event: 'expenseSubmit'})}
                            expenseDescriptionValue ={state.expenses.expenseDescription}
                            expenseAmountValue ={state.expenses.expenseAmount} 
                            expensesArr={state.expensesArr}/>
                {/* <Expenselist expensesArr={state.expensesArr}/> */}
            </div>
        </div>
    )
}

export default Budgetapp

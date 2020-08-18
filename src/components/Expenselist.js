import React from 'react'

function Expenselist(props) {
    const {title, amount} = props
    return (
        <>
        <li className='list-item'>
            <span>{title}</span>
            <span>{amount}</span>
        </li>
        </>
    )
}

export default Expenselist

import React from 'react'

export default function Expense(props) {
  return (
  
      <div>
        <form>
          <input 
            type="text"
            name="nameOfExpense"
            value={props.nameOfExpense}
            onChange={props.handleExpenseChange}
          />
          <input 
            type="number"
            name="amountOfExpense"
            value={props.amountOfExpense}
            onChange={props.handleExpenseChange}
          />
          <button onClick={props.handleExpenseSubmit}>Click Me I Do Nothing</button>
        </form>
      </div>
   
  )
}

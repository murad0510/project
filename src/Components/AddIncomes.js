import React, { useState } from 'react'

export default function AddIncomes({addIncomes}) {
    const [incomesName,setIncomesName]=useState("");
    const [incomesMoney,setIncomesMoney]=useState(0);

    function AddIncomes(){
        // console.log(incomes);

        var incomes={
            name: incomesName,
            money:incomesMoney
      };

      addIncomes(incomes);
    }

  return (
    <div>
       <input value={incomesName}  placeholder="Enter a incomes name"  onChange={(e)=>setIncomesName(e.target.value)} />
       <input value={incomesMoney}  placeholder="Enter a incomes money"  onChange={(e)=>setIncomesMoney(e.target.value)} />

       <button onClick={AddIncomes}>Add new incomes</button>
    </div>
  )
}

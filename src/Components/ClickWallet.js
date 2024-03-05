import React from 'react'
import '../App.css';
import AddIncomes from './AddIncomes';

export default function ClickWallet({selectedWallet,addIncomes}) {
    // console.log(selectedWallet.incomes);

    function AddIncome(incomes){
      // console.log(incomes);
      addIncomes(incomes);
    }

  return (
    <div>
      <div>
        <div style={{display:"flex"}} className='all'>
            <div style={{width:"50%"}}>
                <h1>INCOME</h1>
                 {
                     selectedWallet.incomes.map((i)=>(
                      (
                       <div key={i.id}>
                           <h1>{i.name}</h1>
                           <h1>{i.money}</h1>
                         </div>
                       )    
                       ))
                  }        
                  <AddIncomes addIncomes={AddIncome}></AddIncomes>  
             </div>

             <div style={{width:"50%"}}>
                <h1>EXPS</h1>
                  {
                    selectedWallet.exps.map((i)=>(
                      (
                        <div key={i.id}>
                            <h1>{i.name}</h1>
                            <h1>{i.money}</h1>
                          </div>
                        )    
                        ))
                      }
             </div>
         </div>
      </div>
    </div>
  )
}

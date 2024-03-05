import React, { useRef, useState } from 'react'
import '../App.css';
import AddIncomes from './AddIncomes';
import AddExps from './AddExps';

export default function ClickWallet({selectedWallet,addIncomes,addExps}) {
    // console.log(selectedWallet.incomes);
    
    // const [totalExps,setTotalExps]=useState(0);
    // const [totalIncomes,setTotalIncomes]=useState(0); 

    var [total,setTotal]=useState(0);
    var totalIn=useRef(0);
    var totalEx=useRef(0);
    
    for (let i = 0; i < selectedWallet.incomes.length; i++) {
      const element = selectedWallet.incomes[i];
      totalIn.current+=parseFloat(element.money);
    }

    for (let i = 0; i < selectedWallet.exps.length; i++) {
      const element = selectedWallet.exps[i];
      totalEx.current+=parseFloat(element.money);
    }

    // setTotalIncomes(totalIn);
    // setTotalExps(totalEx);

    function AddIncome(incomes){
      addIncomes(incomes);
    }

    function AddExp(exps){
      addExps(exps);
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
                      <AddExps addExps={AddExp}></AddExps>
             </div>
         </div>

         <div>
          <div style={{display:"flex"}}>

            <h1>Total Income : {totalIn.current}</h1>
            <h1>Total Exps : {totalEx.current}</h1>

          </div>
         </div>

         <div style={{display:"flex",width:"100%",height:"40vh"}}>
           <div style={{height:"20%",width:"20%",backgroundColor:"red"}}></div>
           <div style={{height:"100%",width:"20%",backgroundColor:"blue"}}></div>
           <div style={{height:"100%",width:"20%",backgroundColor:"green"}}></div>
         </div>
      </div>
    </div>
  )
}
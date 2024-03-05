import React, { useState } from 'react'

export default function AddExps({addExps}) {
    const [expsName,setExpsName]=useState("");
    const [expsMoney,setExpsMoney]=useState(0);

    function AddExps(){
        // console.log(incomes);

        var exps={
            name: expsName,
            money:expsMoney
      };

      addExps(exps);
    }

  return (
    <div>
       <input value={expsName}  placeholder="Enter a exps name"  onChange={(e)=>setExpsName(e.target.value)} />
       <input value={expsMoney}  placeholder="Enter a exps money"  onChange={(e)=>setExpsMoney(e.target.value)} />

       <button onClick={AddExps}>Add new exps</button>
    </div>
  )
}

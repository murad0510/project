import React, { useState } from 'react'


export default function AddCard({currences,addWallet}) {
    const [name,setName]=useState("");
    const [currence,setCurrence]=useState("");

    function AddWallet(){

      
      var wallet={
        
          name: name,
          currence:currence
        
        // ...products
    };
      
      // console.log(wallet);
        addWallet(wallet);
    }
 console.log(currences);
  return (
    <div>
      <label>Bank name</label>
      <input value={name}  placeholder="Enter a bank name"  onChange={(e)=>setName(e.target.value)} />

      <label>Currence</label>
      <select onChange={(e)=>setCurrence(e.target.value)}>
        {
            currences.map((c)=>
                <option key={c.id} value={c.name}>{c.name}</option>
            )
        }
      </select>

      <button onClick={AddWallet}>Add new wallet</button>
    </div>
  )
}

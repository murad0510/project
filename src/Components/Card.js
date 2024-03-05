import React from 'react'

export default function Card({bankName,cardId,selectedWallet}) {

    function CardSelected(cardId){
        selectedWallet(cardId);
    }

  return (
    <div onClick={()=>CardSelected(cardId)} style={{width:"30%",height:"8vh",textAlign:"center",margin:"auto",backgroundColor:"red",borderRadius:"20px",marginTop:"2%"}}>
      <h1 style={{paddingTop:"13px"}}>{bankName}  Card</h1>
    </div>
  )
}

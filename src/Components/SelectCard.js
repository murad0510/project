import React, { useState } from 'react'
import {cards} from '../data.js';
import Card from './Card.js';
import AddCard from './AddCard.js';
import ClickWallet from './ClickWallet.js';

var nextId=3;

export default function SelectCard() {
    
    const [wallets,setWallet]=useState(cards);
    const [selectedWallet,setSelectedWalled]=useState(null);


    const [currences,setCurrence]=useState([
        {
            id:1,
            name:"USD"
        },
        {
            id:2,
            name:"AZN"
        },
        {
            id:3,
            name:"EUR"
        }
    ]);



    function SelectedWallet(cardId){
        // console.log(cardId);
        const wallet = wallets.filter((w) => w.id == cardId);
        // console.log(wallet[0]);
        setSelectedWalled(wallet[0]);
    }

    function AddIncomes(incomes){
        const income = {
            name: incomes.name.trim(),
            money:incomes.money,
          };
          let new_incomes = [...selectedWallet.incomes, income];

        setSelectedWalled({ ...selectedWallet, incomes: new_incomes });      
    }

    
    function AddExps(exps){
        const exp = {
            name: exps.name.trim(),
            money:exps.money,
          };
          let new_exps = [...selectedWallet.exps, exp];

        setSelectedWalled({ ...selectedWallet, exps: new_exps });      
    }

    // var clickWallet="";

    // if(selectedWallet!=null){
    //     clickWallet="<ClickWallet selectedWallet={selectedWallet} ></ClickWallet>";
    // }

    const c = wallets.map((card) => (
            <Card key={card.id} bankName={card.name} cardId={card.id} selectedWallet={SelectedWallet}></Card>
      ));

      function AddWallet(wallet){
        // console.log(wallet.name);
        setWallet([
            ...wallets,
            {
              id: ++nextId,
              name: wallet.name,
              currence:wallet.currence,
              incomes:[],
              exps:[]
            },
          ]);
      }
// console.log(c);
    return (
        <div>
            {c}
            <AddCard addWallet={AddWallet} currences={currences} ></AddCard>
            {selectedWallet!=null && <ClickWallet selectedWallet={selectedWallet} addIncomes={AddIncomes} addExps={AddExps}></ClickWallet>}
    </div>
  )
}

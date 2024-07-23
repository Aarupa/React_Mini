/* eslint-disable no-const-assign */
import { useState } from "react";

function Board(){

    const winnerArr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    // eslint-disable-next-line no-unused-vars
    const [inputs, setInputs] = useState(Array(9).fill(null));
    const [player, SetPlayers] = useState (true);

    // eslint-disable-next-line no-unused-vars
    const winner = calculatewinner();

    let status =" ";

    if(winner){
        status = "winner is " + (player ? "O" : "X" );
    }
    else{
        status = "next player is"+ (player ? "X" :"O");
    }

    function calculatewinner(){
        for (let i=0 ; i< winnerArr.length ; i++){
            const [a,b,c] = winnerArr[i];
            if( inputs[a] && inputs[a] === inputs[b] && inputs[a] === inputs[c]){
                return true;
            }
        }
        return null;
    }
    // eslint-disable-next-line no-unused-vars
    const handleInput = (event)=>{

        if(event.target.className.includes('input-box')==false ||inputs[event.target.dataset.key]!==null)
            return;


        const index = parseInt(event.target.dataset.key); // Access data-key attribute
        console.log(index);
        const copyArray = inputs.map((input,idx)=>{
            if(idx === index){
                return player ? "X" :"O";
            }
            return input;
        })
        setInputs(copyArray);
        SetPlayers(!player);
    }

    return(
        <section className="grid grid-cols-3 ">
        { 
            inputs.map((input,index) =>{
                return <div 
                    key={index} 
                    data-key={index} 
                    className=" input-box w-24 h-24 border border-black border-2 b rounded-md bg-slate-200"
                    onClick={handleInput}
                    >{input}</div>
            })
        }

        <p>{status}</p>
        </section>
    );
}

export default Board;
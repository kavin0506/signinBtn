import { useState } from "react";

const UsestateCom=()=>{

    const [inn,setinn]=useState(false);
    const[state,setstate]=useState(false);

      function  changeBtn(){
        setinn(inn? false : true)
        // if(inn===false){
        // setinn(true)
        // }
        // else{
        //     setinn(false);
        // }
           
    }
   
    return(
        <div className="signinBtn">
            <h2>SigIn Button</h2>

        <button onClick={changeBtn}>{inn ?'signout':'signin'}</button>
           <p>{inn ? 'you are welcome ':"please signin"}</p>
           
        </div>
    )
   
}



export default UsestateCom;










// const[incre,increfun]=useState(0);

// function increment(){
//         increfun(incre+1)

//     }
//     function decre(){
//         increfun(incre>0?incre-1:0)

//     }


// <button onClick={increment}>+</button>
//            <span>{incre}</span>
//            <button onClick={decre}>-</button>
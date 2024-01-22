import { useState } from "react";

function App() {
  const [counter,setcounter ]=useState(0)
  return (
    <div>
      <div>
        <button data-testid="minusonebtn" onClick={()=>setcounter(counter-1)} disabled={counter===0}>minusonebtn</button>
        <button data-testid="plusonebtn" onClick={()=>setcounter(counter+1)} >plusonebtn</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setcounter(0)}>resetbtn</button>
      </div>
      </div>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">{counter %2 ===0 ? "Even":"Odd"}</span>
        <span data-testid="is-prime">{checkprime(counter) ? "true" :"false"}</span>
      </div>
    </div>
  );

}



const checkprime=(num)=>{
  let count=0
  for(let i=1;i<=num;i++){
    if(num%i===0){
      count++
    }
  }

  if(count===2){
return true
  }
}

export default App;


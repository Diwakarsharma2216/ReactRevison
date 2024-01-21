const Counter=({count,setcount})=>{

    return (
        <>
        <h2 data-testid = "counter-header">Counter</h2>
        <h3 data-testid = "count">{count}</h3>
     <button data-testid = "add-btn" onClick={()=>setcount(count+1)}>+</button>
     <button data-testid = "subtract-btn" onClick={()=>setcount(count-1)}>-</button>
     <button data-testid = "double-btn" onClick={()=>setcount(count*2)} >Double</button>

        </>
    )
}

export default Counter
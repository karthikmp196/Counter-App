
import { useState } from 'react';
import './App.css';

function App() {
  var [counter, setCounter] = useState(0)
  const increment=()=>{
    setCounter(counter+1)
  }
  const decrement=()=>{
    setCounter(counter-1)
  }
  const reset=()=>
  {
    setCounter(0)
  }
  return (
    <div  id='counter'>
       <div id='button' style={{height:'740px'}} >
        
          <div >
            <button className='but' style={{width:40,height:40,borderRadius:10}} id='MINUS' onClick={decrement}>-</button>
          </div>
          <h1 style={{fontSize:40,color:'black'}}>{counter}</h1>
         <div >
           <button className='but' style={{width:40,height:40,borderRadius:10}} id='PLUS' onClick={increment}>+</button>
         </div>
         
       </div>
       <div id='reset'>
         <button className='but'  style={{width:60,height:40,borderRadius:10,marginBottom:20}} onClick={reset}> Reset</button>
      </div>   
    </div>

  );
}

export default App;
 
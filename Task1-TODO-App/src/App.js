import './App.css';
import React,{useState} from "react";
function App() {
   let [title,newtitle]=useState("")
   let [todolist,newtodolist]=useState([])
   function addnewtitle(){
    if(title===""){
      alert("Enter title")
    }
    else{
        newtodolist([...todolist,title]);
        newtitle("")
    }
   }
  function deletetodolist(id){
    newtodolist(todolist.filter((ele,index)=>{return index!==id}))
  }
  return (
    <div className='cont'>
      <div className="App">
       <div id='todo'>
         <input type="text" placeholder="Add a title" value={title} onChange={(e)=>{newtitle(e.target.value)}} />
         <button id='but' onClick={()=>{addnewtitle()}} >ADD</button>
       </div>
       <ul> 
         {
          todolist.map((item,index)=>{ return <li><p>{item}</p><button className='cross' onClick={()=>{deletetodolist(index)}}>❌</button></li>})
         }
         
       </ul>
     </div>
    </div>
  )
}

export default App;

import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";
import TodoCount from "./components/ToDoCount";




function App() {
  

  let [tasks,settasks]=useState([])

  let Addnewtask=(taskobj)=>{
    settasks([...tasks,taskobj.task])
  }

  
  return (
    

<>
<h1 className="display-3 text-info text-center bg-dark">welcome to react</h1>
<div className="row text-center container">
<div className="col-sm-4  "><AddToDo tasks={tasks} Addnewtask={Addnewtask}/></div>
<div className="col-sm-4  "><ToDoList tasks={tasks}/></div>
<div className="col-sm-4  "><ToDoCount tasks={tasks}/></div>
</div>

</>
      
     
      
    
    );
  }
  
  export default App;
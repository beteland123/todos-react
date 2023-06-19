import Header from './Header'
import TodosLogic from './TodosLogic'
import '../todoapp.css'

const TodoApp = () =>{
    return(
    <div className='container'>
       <Header/>
       <TodosLogic/>
    </div>  
    )
   
}
 export default TodoApp;
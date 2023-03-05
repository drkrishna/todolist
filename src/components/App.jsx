import react from "react"
import TodoItem from "./TodoItem";
import TodoItems from "./ToDoData";

import "../app.css"

function App() {
    console.log(TodoItems);
    const itemComponents = TodoItems.map(item => <TodoItem key={item.id} Description={item.description} Status={item.complete} />)
    console.log(itemComponents);

    return (
        <div className="todoitem">
            {itemComponents}
        </div>
    );

}

export default App;
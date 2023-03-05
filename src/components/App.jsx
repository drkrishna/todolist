import react from "react"
import TodoItem from "./TodoItem";
import TodoItems from "./ToDoData";

import "../app.css"


class App extends react.Component {
    render() {

        const itemComponents = TodoItems.map(item => <TodoItem key={item.id} Description={item.description} Status={item.complete} />)

        return (
            <div className="todoitem">
                {itemComponents}
                <p>this is class based component</p>
            </div>
        );
    }
}

export default App;
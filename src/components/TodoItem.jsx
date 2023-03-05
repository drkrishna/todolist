import react from "react"

function TodoItem(props) {
    return (
        <div >
            <input type="checkbox" checked={props.Status} />
            <label for="input1"> {props.Description} </label>
        </div>
    );
}
export default TodoItem;
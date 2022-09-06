const AddTodoForm = ({addTodo}) => {

    const handleSubmitForm = (event) => {

        let inputTitle = document.querySelector("#todoTitle").value
        let inputDesc = document.querySelector("#todoDescription").value

        addTodo(inputTitle, inputDesc);

        inputTitle = "";
        inputDesc = "";

        event.preventDefault();
    }

    return (
        <form className="todoForm" onSubmit={handleSubmitForm}>
            <label htmlFor="todoTitle">Titel:</label>
            <input id="todoTitle"/>
            <label htmlFor="todoDescription">Beskrivning:</label>
            <input id="todoDescription"/>
            <button type="submit" className="submitBtn">Lägg till</button>
        </form>
    )
}

export default AddTodoForm;
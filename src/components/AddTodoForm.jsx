const AddTodoForm = () => {

    return (
        <form className="todoForm">
            <label htmlFor="todoTitle">Titel:</label>
            <input id="todoTitle"/>
            <label htmlFor="todoDescription">Beskrivning:</label>
            <input id="todoDescription"/>
            <button>Lägg till</button>
        </form>
    )
}

export default AddTodoForm;
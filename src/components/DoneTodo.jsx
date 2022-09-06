import { useState } from "react";

//Under components 
import Todo from './Todo';

const DoneTodo = ({todos}) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section>
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "Dölj avklarade todos" : "Visa avklarade todos"}</button>
            {showMore && 
            <ul>
                {todos.map((todo, index) => {
                        if (todo.done === true) {
                            return (
                               <Todo key={index} title={todo.title} description={todo.description} done={todo.done}/> 
                            )
                        } 
                    })}
            </ul>}
        </section>
    )
}

export default DoneTodo;
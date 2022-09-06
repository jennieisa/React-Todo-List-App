import { useState } from "react";

//Under components
import Todo from "./Todo";

const UnDoneTodo = ({todos}) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <section>
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "Dölj todos" : "Visa todos"}</button>
            {showMore &&             
                <ul>
                    {todos.map((todo, index) => {
                        if (todo.done === false) {
                            return (
                                <Todo key={index} title={todo.title} description={todo.description} done={todo.done}/>
                            )
                        }
                    })} 
                </ul>
            }
        </section>
    )
}

export default UnDoneTodo;
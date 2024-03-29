import JavaScript from "./JavaScript";
import Classes from "./Classes";
import PathParameters from "./routing/PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import Highlight from "./Highlight";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";


function Assignment3() {
 return (
   <div className="container">
     <h1>Assignment 3</h1>
     <TodoItem />
     <TodoList />
     <ConditionalOutput />
     <Styles/>
     <Classes/>
     <PathParameters/>
     <JavaScript/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
   </div>
 );
}

export default Assignment3;
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

function Column({ id, todos, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* render Droppable todos in the column  */
          <Droppable droppableId={index.toString()} type="card">
            {(provided)=>(
                <div></div>
            )}
          </Droppable>
          }
        </div>
      )}
    </Draggable>
  );
}

export default Column;

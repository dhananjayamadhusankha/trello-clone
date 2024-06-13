import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: { [key in TypedColumn]: string } = {
  todo: "To Do",
  inprogress: "Doing",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  console.log("Column ID:", id);
  console.log("Draggable ID:", id);
  console.log("Droppable ID:", `${id}-droppable`);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between text-lg lg:text-xl p-2 font-bold">
                  {idToColumnText[id]}
                  <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full font-normal">
                    {todos.length}
                  </span>
                </h2>

                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.$id}
                      draggableId={todo.$id}
                      index={index}
                    >
                      {(provided) => (
                        <TodoCard
                          todo={todo}
                          id={id}
                          index={index}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}

                  <div className="flex justify-end items-end p-2">
                    <button className=" text-green-500 hover:text-green-600">
                      <PlusCircleIcon className="h-7 w-7" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;

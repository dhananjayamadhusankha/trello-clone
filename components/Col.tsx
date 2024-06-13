import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: { [key in TypedColumn]: string } = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

function Col({ id, todos, index }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-2 rounded-2xl shadow-sm bg-white/50">
      <h2 className="flex justify-between text-lg lg:text-xl p-2 font-bold">
        {idToColumnText[id]}
        <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full font-normal">
          {todos.length}
        </span>
      </h2>
      <div className="p-2 rounded-2xl shadow-sm bg-white/50">
        {todos.map((todo, todoIndex) => (
          <div key={todo.$id} className="p-2 mt-1 mb-1 bg-white rounded shadow">
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Col;

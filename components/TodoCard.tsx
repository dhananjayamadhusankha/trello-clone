import { XCircleIcon } from "@heroicons/react/16/solid";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todo: Todo;
  index: number;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  id,
  index,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
    >
      <div className="flex items-center justify-between p-5">
        <p>{todo.title} </p>
        <button type="button" className="text-red-500 hover:text-red-600">
          <XCircleIcon className="ml-5 h-7 w-7" />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;

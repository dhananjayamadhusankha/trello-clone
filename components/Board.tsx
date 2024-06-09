"use client";

import { useBearStore } from "@/store/BoardStore";
import { useEffect, useRef } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

function Board() {
  const [board, getBoard] = useBearStore((state) => [
    state.board,
    state.getBoard,
  ]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      getBoard();
      hasFetched.current = true;
    }
  }, [getBoard]);

  console.log(">>>>>", board);

  const handleOnDragEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;

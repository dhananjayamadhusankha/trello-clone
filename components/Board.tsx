"use client";

import { useBearStore } from "@/store/BoardStore";
import { useEffect, useRef } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const getBoard = useBearStore((state) => state.getBoard);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      getBoard();
      hasFetched.current = true;
    }
  }, [getBoard]);

  return (
    <div>hello</div>
    // <DragDropContext>
    //   <Droppable
    //     droppableId="board"
    //     direction="horizontal"
    //     type="column"
    //   >
    //   {(provided) => <div>{/* rendering all columns */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;

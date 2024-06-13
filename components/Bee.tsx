"use client"

import { useBoardStore } from "@/store/BoardStore";
import { useEffect, useRef } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import Col from "./Col";

function Bee() {
  const [board, getBoard] = useBoardStore((state) => [
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

  console.log("Board state:", board);

  const handleOnDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       const activeIndex = board.columns.findIndex((column) => column.id === active.id);
//       const overIndex = board.columns.findIndex((column) => column.id === over.id);
//       board.columns = arrayMove(board.columns, activeIndex, overIndex);
//     }
//   };

//   if (!board || !board.columns.length) {
//     return <div>Loading...</div>;
  }
  const columnsArray = Array.from(board.columns.entries());
  return (
    <DndContext onDragEnd={handleOnDragEnd}>
      <SortableContext items={columnsArray.map(([id]) => id)} strategy={horizontalListSortingStrategy}>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5">
          {columnsArray.map(([id, column], index) => (
            <Col key={id} id={id} todos={column.todos} index={index} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Bee;

import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import type { TaskItem } from "../components/types";


interface DragItemProps {
  item: TaskItem;
}

const DragItem: React.FC<DragItemProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag<
    TaskItem,
    void,
    { isDragging: boolean }
  >(() => ({
    type: "item",
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        margin: "5px",
        backgroundColor: "lightblue",
      }}
    >
      {item.name}
    </div>
  );
};

export default DragItem;

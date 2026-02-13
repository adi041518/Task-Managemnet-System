import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import type { TaskItem } from "../components/types";

interface DropZoneProps {
  onDrop: (item: TaskItem) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<TaskItem>(() => ({
    accept: "item",
    drop: (item) => onDrop(item),
  }));

  drop(ref);

  return (
    <div
      ref={ref}
      style={{
        border: "2px dashed black",
        padding: "20px",
        minHeight: "100px",
      }}
    >
      Drop here
    </div>
  );
};

export default DropZone;

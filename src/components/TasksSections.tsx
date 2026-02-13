import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./dragitem";
import DropZone from "./dropzone";
import type { TaskItem } from "../components/types";

const initialItems: TaskItem[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const App = () => {
  const [droppedItems, setDroppedItems] = useState<TaskItem[]>([]);

  const handleDrop = (item: TaskItem) => {
    setDroppedItems((prev) => [...prev, item]);
  };

  const handleRemoveItem = (id: number) => {
    setDroppedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h1>Drag and Drop Example</h1>

          <div style={{ display: "flex", gap: "40px" }}>
            <div>
              <h2>Drag Items</h2>
              {initialItems.map((item) => (
                <DragItem key={item.id} item={item} />
              ))}
            </div>

            <div>
              <h2>Drop Zone</h2>
              <DropZone onDrop={handleDrop} />

              {droppedItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>{item.name}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;

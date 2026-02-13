import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { removeFromTasks } from "../slices/taskSlice";

const ActiveTasks = () => {
  const tasks = useSelector(
    (state: RootState) => state.tasks.tasks
  );
  const dispatch = useDispatch();

  const handleComplete = (id: number) => {
    dispatch(removeFromTasks(id));
  };

  const activeTasks = tasks.filter(
    (task) => !task.iscompleted
  );

  return (
    <div
      style={{
        backgroundColor: "#111827",
        padding: "30px",
        borderRadius: "12px",

        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Active Tasks
      </h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {activeTasks.length === 0 ? (
          <p style={{ color: "#aaa", textAlign: "center" }}>
            No active tasks 🎉
          </p>
        ) : (
          activeTasks.map((task) => (
            <li
              key={task.id}
              style={{
                backgroundColor: "#1f2937",
                padding: "12px 15px",
                borderRadius: "8px",
                marginBottom: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <span style={{ color: "white" }}>
                {task.title}
              </span>

              <button
                onClick={() => handleComplete(task.id)}
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background 0.2s ease",
                }}
                onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#45a049")
                }
                onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#4CAF50")
                }
              >
                ✔ Complete
              </button>
            </li>
          ))
        )}
      </ul>
     
    </div>
  );
  ;
}
export default ActiveTasks;

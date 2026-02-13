import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { removeFromMainTasks } from "../slices/taskSlice";

const CompletedTasks = () => {
    const tasks = useSelector(
        (state: RootState) => state.tasks.tasks
    );
    const dispatch = useDispatch();

    const completedTasks = tasks.filter(
        (task) => task.iscompleted
    );
    const handleDelete = (id: number) => {
        const confirm = window.confirm("Are You sure You want to delete this Takitem ?");
        if (!confirm) return;

        dispatch(removeFromMainTasks(id));
    };

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
                Completed Tasks
            </h1>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {completedTasks.length === 0 ? (
                    <p style={{ color: "#aaa", textAlign: "center" }}>
                        No completed tasks yet 🚀
                    </p>
                ) : (
                    completedTasks.map((task) => (
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
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                transition: "transform 0.2s ease",
                            }}
                        >
                            <span
                                style={{
                                    color: "#bbb",
                                    textDecoration: "line-through",
                                }}
                            >
                                {task.title}
                            </span>

                            <button
                                onClick={() => handleDelete(task.id)}
                                style={{
                                    backgroundColor: "#f44336",
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
                                Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default CompletedTasks;

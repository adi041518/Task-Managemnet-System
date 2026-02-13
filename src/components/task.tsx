import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtotasks } from "../slices/taskSlice";
import type { RootState } from "../store/store";

const Task: React.FC = () => {
    const [newTask, setNewTask] = React.useState<string>("");
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        dispatch(
            addtotasks({
                id: Date.now(),
                title: newTask,
                iscompleted: false,
            })
        );
        setNewTask("");
    };
    useEffect(() => {
       localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div
            style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    //   backgroundColor: "#ffffff",
                    padding: "30px",
                    borderRadius: "12px",
                    //   boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task..."
                    style={{
                        padding: "12px 15px",
                        width: "280px",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        outline: "none",
                        fontSize: "14px",
                        transition: "0.2s ease",
                    }}
                    onFocus={(e) =>
                        (e.currentTarget.style.border = "1px solid #4f46e5")
                    }
                    onBlur={(e) =>
                        (e.currentTarget.style.border = "1px solid #ddd")
                    }
                />

                <button
                    type="submit"
                    style={{
                        padding: "12px 20px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#4f46e5",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#4338ca")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#4f46e5")
                    }
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default Task;

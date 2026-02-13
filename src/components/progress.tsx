import { useSelector } from 'react-redux'
import type { RootState } from "../store/store";

const Progress = () => {
    const tasks = useSelector((state: RootState) => (state.tasks.tasks))
    const completedTasks = tasks.filter(
        (task) => task.iscompleted
    ).length;
    const totalTasks = tasks.length;
    const progress = totalTasks == 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    return (
        <div>
            <div style={{ marginTop: "25px" ,padding:"200px"}}>
                <p
                    style={{
                        color: "#cbd5e1",
                        marginBottom: "8px",
                        fontSize: "14px",
                    }}
                >
                    Progress: {progress}% completed
                </p>

                <div
                    style={{
                        backgroundColor: "#1f2937",
                        borderRadius: "8px",
                        height: "12px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            backgroundColor: "#6366f1",
                            height: "100%",
                            transition: "width 0.4s ease",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Progress

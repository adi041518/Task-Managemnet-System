import ActiveTasks from "../components/ActiveTasks"
import Completedtasks from "../components/completedtasks"
import NavBar from "../components/navbar"
import Progress from "../components/progress"
import Task from "../components/task"
// import TasksSections from "../components/TasksSections"

const Dashboard = () => {

    return (
        <div style={{backgroundColor:"black"}}>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "40px",
                    paddingTop:"60px"
                }}
            >
                {/* Heading */}
                <h1
                    className="anton-regular"
                    style={{
                        fontSize: "32px",
                        marginBottom: "20px",
                        letterSpacing: "1px",
                        color:"white",

                    }}
                >
                    Task Managment Dashboard
                </h1>
            </div>
                <Task />
                {/* <TasksSections /> */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px",
                        gap: "20px",
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <ActiveTasks />
                    </div>

                    <div style={{ flex: 1 }}>
                        <Completedtasks />
                    </div>
                </div>
                <Progress/>

            </div>
            )
}

            export default Dashboard

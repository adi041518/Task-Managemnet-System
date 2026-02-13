import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface taskitem {
  id: number;
  title: string;
  iscompleted: boolean;
}

interface TaskState {
  tasks: taskitem[];
}
const savedTasks=localStorage.getItem("tasks");
const initialState: TaskState = {
    tasks:savedTasks ? JSON.parse(savedTasks) : [],
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addtotasks: (state, action: PayloadAction<taskitem>) => {
      state.tasks.push(action.payload);
    },

    removeFromTasks: (state, action: PayloadAction<number>) => {
        state.tasks.map((task)=>{
            if(task.id===action.payload){
                task.iscompleted=true;
            }
        })
    },
    removeFromMainTasks:(state, action:PayloadAction<number>)=>{
        state.tasks = state.tasks.filter((task:taskitem)=>task.id!=action.payload);
    },
    //   state.tasks = state.tasks.filter(
    //     (task) => task.id !== action.payload
    //   )

    cleartheTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addtotasks, removeFromTasks, cleartheTasks,removeFromMainTasks } =
  taskSlice.actions;

export default taskSlice.reducer;

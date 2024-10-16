import { useState } from "react";
import ScarchTask from "./ScarchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function Taskboard() {
    const defaultTask = [{
        "id": crypto.randomUUID(),
        "title":"Lorem React",
        "discription":
        "ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit unde incidunt aliquid placeat laborum earum sed eaque?",
        "tags": ["web", "Recat", "Js"],
        "priority": "High",
        "isFavorite": false,
    }];
    const [Task, setTask] = useState(defaultTask);
    const [showAddModal, setshowAddModal] = useState(false);

     function handleSave(addSingleTask,evt){

       console.log(addSingleTask);
       evt.preventDefault()

     }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal&&
      <AddTaskModal onSave={handleSave}  />}
      
      <div className="container">
        <div className="p-2 flex justify-end">
          <ScarchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 ">
          <TaskAction onAddclick={()=>setshowAddModal(true)} />
          <TaskList tasks={Task} />
        </div>
      </div>
    </section>
  );
}

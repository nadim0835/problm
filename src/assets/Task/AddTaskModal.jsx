import { useState } from "react";

export default function AddTaskModal({onSave}) {
  const [addSingleTask, setaddSingleTask] = useState({
   
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: true,
  });
  const handleChange = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    if(name==='tags'){
        value=value.split(',')
    }
    setaddSingleTask({
      ...addSingleTask,
      [name]: value,
    });
  };
//   function handlesubmit(e){
//     console.log(addSingleTask);
//     e.preventDefault()
    
//   }

  return (
    <>
      <div className=" bg-black bg-opacity-70  z-10 h-full  absolute top-80  left-0 right-0 bottom-0  ">
        <form className="mx-auto w-full max-h-[750px]  max-w-[640px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 ">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Add New Task
          </h2>

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                value={addSingleTask.title}
                onChange={handleChange}
                id="title"
                required=""
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                value={addSingleTask.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  value={addSingleTask.tags}
                  onChange={handleChange}
                  id="tags"
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  value={addSingleTask.priority}
                  onChange={handleChange}
                  id="priority"
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center lg:mt-20">
            <button onClick={()=>onSave(addSingleTask)} className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80">
              Create new Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

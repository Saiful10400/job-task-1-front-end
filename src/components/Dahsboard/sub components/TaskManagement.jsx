import React, { useContext, useEffect, useState } from "react";
import { axiosPublic } from "../../../custom Hoocks/useAxiosPublic";
import { contextProvider } from "../../../context api/Context";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskManagement = () => {
  // tailwind class names.
  const listyle = "border py-2 mb-2 text-lg font-bold";
  const ulstyle = "px-2";
  const parentStyle = "w-full bg-white border rounded-3xl min-h-32 py-4";
  // dta fetching form database.
  const [task, setTask] = useState([]);
  const { user } = useContext(contextProvider);
  useEffect(() => {
    if (user) {
      const email = user.email;
      axiosPublic
        .post("/getAllTaskByEmail", { email })
        .then((res) => setTask(res.data));
    }
  }, [user]);
  console.log(task);
  // update a document field after drug and drop.
  const updateField = (id, data) => {
    return axiosPublic.post("/updateATask", { id, data });
  };

  const HandleDrug = (result) => {
    console.log(result.destination.droppableId, result.draggableId);
    updateField(result.draggableId, result.destination.droppableId).then(
      (res) => console.log(res.data)
    );
  };

  return (
    <div className="w-full h-full bg-gray-200">
      <div className=" w-[75%] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 gap-3">
        <DragDropContext onDragEnd={HandleDrug}>
          <div className={parentStyle}>
            {" "}
            <h1 className="text-center font-bold text-2xl mb-5">To-do</h1>
            <Droppable droppableId="To-do">
              {(provided) => (
                <ul
                  className={ulstyle}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {task
                    .filter((item) => item.status === "To-do")
                    .map((item, idx) => {
                      return (
                        <Draggable
                          draggableId={item._id}
                          index={idx}
                          key={item._id}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={listyle}
                              key={idx}
                            >
                              {(idx += 1)}. {item.title}
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <div className={parentStyle}>
            {" "}
            <h1 className="text-center font-bold text-2xl mb-5">Ongoing </h1>
            <Droppable droppableId="Ongoing">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={ulstyle}
                >
                  {task
                    .filter((item) => item.status === "Ongoing")
                    .map((item, idx) => {
                      return (
                        <Draggable
                          key={item._id}
                          draggableId={item._id}
                          index={idx}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={listyle}
                              key={idx}
                            >
                              {(idx += 1)}. {item.title}
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <div className={parentStyle}>
            {" "}
            <h1 className="text-center font-bold text-2xl mb-5">Completed</h1>
            <Droppable droppableId="Completed">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={ulstyle}
                >
                  {task
                    .filter((item) => item.status === "Completed")
                    .map((item, idx) => {
                      return (
                        <Draggable
                          key={item._id}
                          draggableId={item._id}
                          index={idx}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={listyle}
                              key={idx}
                            >
                              {(idx += 1)}. {item.title}
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TaskManagement;

// .map((item,idx)=>{
//     return(
//         <li className={listyle} key={idx}>{idx+=1}. {item.title}</li>
//     )
// })

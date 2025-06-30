import { FaPlus, FaRegFileAlt } from "react-icons/fa";
import "../styles/TaskList.css";

const tasks = [
  {
    title: "Attend Nischal’s Birthday Party",
    description:
      "Buy gifts on the way and pick up cake from the bakery. [6 PM | Fresh Elements]",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    status: "Not Started",
    priority: "Moderate",
    createdAt: "20/06/2023",
  },
  {
    title: "Landing Page Design for TravelDays",
    description:
      "Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    status: "In Progress",
    priority: "Moderate",
    createdAt: "20/06/2023",
  },
  {
    title: "Presentation on Final Product",
    description:
      "Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for review.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    status: "In Progress",
    priority: "Moderate",
    createdAt: "19/06/2023",
  },
  {
    title: "Landing Page Design for TravelDays",
    description:
      "Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    status: "In Progress",
    priority: "Moderate",
    createdAt: "20/06/2023",
  },
];

const TaskList = () => {
  return (
    <section className="task-list">
      {/* Header */}
      <div className="task-header-bar">
        <div className="left">
          <FaRegFileAlt className="icon file-icon" />
          <span className="todo-text">To-Do</span>
        </div>
        <button className="add-task-btn">
          <FaPlus className="icon plus-icon" /> Add task
        </button>
      </div>

      {/* Date */}
      <div className="task-date">
        <strong>
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </strong>
        <span className="today-label"> • Today</span>
      </div>

      {/* Task cards */}
      {tasks.slice(0, 2).map((task, index) => (
        <div key={index} className="task-card">
          <div className="task-header">
            <div className="task-status">
              <span
                className={`status-indicator ${task.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              ></span>
              <h4>{task.title}</h4>
            </div>
          </div>

          <div className="task-content">
            <div className="task-desc-wrapper">
              <p className="task-desc">{task.description}</p>
            </div>
            <div className="task-image-wrapper">
              <img src={task.image} alt={task.title} className="task-image" />
            </div>
          </div>

          <div className="task-footer">
            <span>
              <strong>Priority:</strong>{" "}
              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </span>
            <span>
              <strong>Status:</strong>{" "}
              <span
                className={`status ${task.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {task.status}
              </span>
            </span>
            <span>
              <strong>Created on:</strong> {task.createdAt}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TaskList;

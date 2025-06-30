import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/CompletedTasks.css"; // Adjust the path as necessary

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  completedAt: string;
  imageUrl: string;
}

const completedTasks: Task[] = [
  {
    id: 1,
    title: "Walk the dog",
    description: "Take the dog to the park and bring treats as well.",
    status: "Completed",
    completedAt: "Completed 2 days ago",
    imageUrl:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 2,
    title: "Conduct meeting",
    description: "Meet with the client and finalize requirements.",
    status: "Completed",
    completedAt: "Completed 2 days ago",
    imageUrl:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=80&h=80&q=80",
  },
];

const CompletedTasks: React.FC = () => {
  return (
    <section className="completed-tasks">
      <h3 className="completed-title">
        <FaCheckCircle className="completed-icon" />
        Completed Tasks
      </h3>

      <ul className="completed-list">
        {completedTasks.map((task) => (
<li key={task.id} className="completed-item">
  <div className="completed-left">
    <div className="task-details">
      <div className="task-title-wrapper">
        <span
          className={`status-indicator ${task.status
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        ></span>
        <h4 className="task-title">{task.title}</h4>
      </div>
      <p className="task-desc">{task.description}</p>
      <p className="task-status">
        <strong>Status:</strong>{" "}
        <span className="status-completed">{task.status}</span>
      </p>
      <p className="task-date">{task.completedAt}</p>
    </div>
  </div>

  <img src={task.imageUrl} alt={task.title} className="task-image" />
</li>

        ))}
      </ul>
    </section>
  );
};

export default CompletedTasks;

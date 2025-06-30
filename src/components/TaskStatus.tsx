import "../styles/TaskStatus.css";
interface StatusItem {
  label: string;
  percent: number;
  color: string;
  statusClass: string;
}
import { FaClipboardList } from "react-icons/fa";

const statuses: StatusItem[] = [
  {
    label: "Completed",
    percent: 84,
    color: "#4CAF50",
    statusClass: "completed",
  },
  {
    label: "In Progress",
    percent: 46,
    color: "#3F51B5",
    statusClass: "in-progress",
  },
  {
    label: "Not Started",
    percent: 13,
    color: "#F44336",
    statusClass: "not-started",
  },
];

const TaskStatus = () => {
  return (
    <section className="task-status-container">
      <h3 className="task-status-title">
        <FaClipboardList className="task-status-icon" />
        Task Status
      </h3>{" "}
      <div className="status-charts">
        {statuses.map((status, index) => (
          <div className="chart-wrapper" key={index}>
            <div className="donut">
              <svg viewBox="0 0 36 36" className="donut-chart">
                <path
                  className="donut-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="4"
                />
                <path
                  className={`donut-segment ${status.statusClass}`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={status.color}
                  strokeWidth="4"
                  strokeDasharray={`${status.percent}, 100`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="chart-center">
                <span>{status.percent}%</span>
              </div>
            </div>
            <div className="chart-label">
              <span
                className="status-dot"
                style={{ backgroundColor: status.color }}
              ></span>
              <span>{status.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskStatus;

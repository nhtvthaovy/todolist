import { useState } from "react";
import Header from "../components/Header";
import "../styles/Home.css"; // Import your CSS styles
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import TaskList from "../components/TaskList";  // Import TaskList component
import TaskStatus from "../components/TaskStatus"; // Import TaskStatus component 
import CompletedTasks from "../components/CompletedTasks"; // Import CompletedTasks component

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="home-container">
      <Header onToggleSidebar={toggleSidebar} />

      <div className="main-content">
        {showSidebar && <Sidebar />}

        <div className="dashboard-content">
          <Welcome />
          <div className="dashboard-tasks">
            <div className="task-section">
              <TaskList />
            </div>
            <div className="status-section">
              <TaskStatus />
              <CompletedTasks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

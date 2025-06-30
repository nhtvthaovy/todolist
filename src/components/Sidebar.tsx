
import {
  FaTachometerAlt,
  FaTasks,
  FaList,
  FaCog,
  FaQuestion,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/Sidebar.css"; // Import your CSS styles

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div>
          <div className="sidebar-profile">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="User"
              className="profile-img"
            />
            <h3>Sundar Gurung</h3>
            <p>sundargurung360@gmail.com</p>
          </div>

          <nav className="sidebar-nav">
            <ul>
              <li>
                <FaTachometerAlt /> Dashboard
              </li>
              <li>
                <FaTasks /> Vital Task
              </li>
              <li>
                <FaList /> My Task
              </li>
              <li>
                <FaList /> Task Categories
              </li>
              <li>
                <FaCog /> Settings
              </li>
              <li>
                <FaQuestion /> Help
              </li>
            </ul>
          </nav>
        </div>

        <button className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
    </aside>
  );
}

export default Sidebar;
import { FaSearch, FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import { useRef } from "react";
import "../styles/Header.css"; // Import your CSS styles

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null); // tạo ref cho input

  const focusInput = () => {
    inputRef.current?.focus(); // focus vào input khi gọi
  };

  return (
    <header className="header">
      <button className="header-toggle-btn" onClick={onToggleSidebar}>
        <FaBars />
      </button>

      <div className="search-wrapper">
        <input
          ref={inputRef} // gắn ref ở đây
          type="text"
          className="search-input"
          placeholder="Search..."
        />
        <FaSearch className="search-icon" onClick={focusInput} />
      </div>

      <div className="header-icons">
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon" />
      </div>
      <div className="header-date">
        <p>Tuesday</p>
        <p>20/06/2023</p>
      </div>
    </header>
  );
};

export default Header;

export default function Header() {
  return (
    <div className="Header">
      <img alt="logo" className="logo" />
      <div className="search-bar">
        <input type="text" />
      </div>

      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#"> 갤러리</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

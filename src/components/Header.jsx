export default function Header() {
  return (
    <header className="header">
      <div className="topHeader">
        <div className="logoLeft">◎</div>

        <div className="logoCenter">LOGO</div>

        <div className="logoRight">
          <span>🔍</span>
          <span>♡</span>
          <span>👜</span>
          <span>👤</span>
          <span>ENG</span>
        </div>
      </div>

      <nav className="navBar">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
}

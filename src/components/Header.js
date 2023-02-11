import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">할 일 전체 목록</Link>
      </h1>
      <div className="menu">
        <Link to="/todo" className="link">
          <button>할 일</button>
        </Link>
        <Link to="/done" className="link">
          <button>완료</button>
        </Link>
        <Link to="/create_item" className="link">
          <button>추가</button>
        </Link>
      </div>
    </div>
  );
}

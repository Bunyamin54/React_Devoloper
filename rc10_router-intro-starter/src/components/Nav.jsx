import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="bg-warning">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link Link to ="/instructors">Instructors</Link>
      </li>
      <li>
        <Link Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;

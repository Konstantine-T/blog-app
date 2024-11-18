import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/themeToggle";

const Header: React.FC = () => {
  return (
    <header className="border-b ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          BitBlogs
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-muted-foreground hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/write"
            className="text-muted-foreground hover:text-blue-400 transition-colors"
          >
            Write
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground hover:text-blue-400 transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          {/* <div className="relative">button</div> */}
          <Link to="/login">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-400 text-slate-900 hover:bg-blue-500 transition-all px-4 py-2 shadow">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

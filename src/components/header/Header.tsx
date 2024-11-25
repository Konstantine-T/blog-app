import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "../theme/themeToggle";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    userContext?.setUser(null);
  };

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
          <div className="relative">button</div>
          <Link to="/login">
            {localStorage.getItem("userToken") ? (
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-400 text-slate-900 hover:bg-blue-500 transition-all px-4 py-2 shadow"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-400 text-slate-900 hover:bg-blue-500 transition-all px-4 py-2 shadow">
                Sign In
              </button>
            )}
          </Link>
          <Link to="/profile">
            {localStorage.getItem("userToken") && (
              <div className="relative">
                {/* Avatar button */}
                <button
                  onClick={() => navigate("/profile")}
                  className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-blue-400 hover:border-blue-500 transition-all"
                >
                  <img
                    src="https://api.dicebear.com/9.x/avataaars/svg" // Replace with a default avatar image path
                    alt="User Avatar"
                    className="object-cover h-full w-full"
                  />
                </button>
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

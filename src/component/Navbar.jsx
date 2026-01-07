import { Link } from "react-router-dom";

function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full bg-red-600 px-6 py-4 flex items-center justify-between">
      
      <h1 className="text-white text-xl font-bold">
        MyApp
      </h1>

      <div className="flex gap-4">
         <Link to ="/" className="text-white hover:text-gray-200">Home</Link>
         <Link  to="/about" className="text-white hover:text-gray-200">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

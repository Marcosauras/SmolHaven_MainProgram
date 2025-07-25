import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <>
      {" "}
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zomp-900">
      {/* logo */}
      <div className="w-24 h-24 rounded-full shadow-md bg-zomp-800 flex items-center justify-center mb-8">
        <img
          src="/assets/images/Colored_in_Tree.svg"
          alt="Smol Haven logo"
          className="h-20 w-20 rounded-full object-cover"
        />
      </div>

      {/* auth card (renders Sign-up / Sign-in routes) */}
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>

      {/* simple footer */}
      <footer className="w-full m-5 text-center text-md text-zomp-300">
         This is a smol gaming haven for gamers
 of all types to talk about their favorite games
      </footer>
    </div>
      )}
    </>
  );
};

export default AuthLayout;

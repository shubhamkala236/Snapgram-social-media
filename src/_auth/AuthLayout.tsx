import { Outlet, Navigate } from "react-router-dom";

//Layout for auth routes
const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        //----------------------------layout---------------------------
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            {/* dynamic outlet which renders either signup or signin page  */}
            <Outlet />
          </section>

          <img
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            src="/assets/images/side-img-3.jpg"
            alt="logo"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;

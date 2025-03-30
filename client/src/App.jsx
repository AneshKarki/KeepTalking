import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
function App() {
  const router = createBrowserRouter(
    // {
    //   path: "/",
    //   element: <LandingPage />,
    // },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    }
  );
  return <RouterProvider router={router} />;
}

export default App;

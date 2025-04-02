import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Friends from "./Pages/Friends/Friends.jsx";
import Messages from "./Pages/Messages/Messages.jsx";
import AddFriends from "./Pages/AddFriends/AddFriends.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/friends",
      element: <Friends />,
    },
    {
      path: "/messages",
      element: <Messages />,
    },
    {
      path: "/addfriends",
      element: <AddFriends />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

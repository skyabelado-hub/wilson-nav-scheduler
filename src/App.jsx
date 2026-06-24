import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <Home
          goToLogin={() => setPage("login")}
        />
      )}

      {page === "login" && (
        <Login
          goBack={() => setPage("home")}
          goToRegister={() => setPage("register")}
        />
      )}

      {page === "register" && (
        <Register
          goToLogin={() => setPage("login")}
        />
      )}
    </>
  );
}

export default App;
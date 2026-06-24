import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <Home goToLogin={() => setPage("login")} />
      )}

      {page === "login" && (
        <Login goBack={() => setPage("home")} />
      )}
    </>
  );
}

export default App;
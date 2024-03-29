import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen">
     <AuthContextProvider>
     
     <AppRouter/>

     </AuthContextProvider>

 
    </div>
  );
};

export default App;

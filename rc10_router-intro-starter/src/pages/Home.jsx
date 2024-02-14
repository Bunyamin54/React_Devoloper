import { Outlet } from "react-router-dom";
// import About from "../components/About";
// import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="p-3">
      {/* <About />
      <Courses /> */}
  {/* Nested Route yaåisinda kullandigimiz child componentleri Outlet componenti ile sergiliyoruz */}
      
      
      <Outlet/>
    </div>
  );
};

export default Home;

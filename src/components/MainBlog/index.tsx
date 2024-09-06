import React from "react";
import MainCard from "./MainCard";
import Sidebar from "../Sidebar";

const MainBlog: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <MainCard />
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
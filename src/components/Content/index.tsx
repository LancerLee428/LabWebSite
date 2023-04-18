import "./index.less";
// import { Suspense } from "react";

import Direction from "./Direction";
import Graduate from "./Graduate";
import HomeContent from "./Home";
import Project from "./Project";
import Requirement from "./Requirement";
import Result from "./Result";
import Student from "./Student";
import Teacher from "./Teacher";

// import modules from "@/router/utils";
// import routerLists from "@/router/routerList";

import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <section className="content">
      {/* <Suspense>
        {routerLists.map((item) => {
          return (
            <Routes>
              <Route key={item.key} path={item.path} Component={} />
            </Routes>
          );
        })}
      </Suspense> */}
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/research-directions" element={<Direction />} />
        <Route path="/lab-projects" element={<Project />} />
        <Route path="/lab-teachers" element={<Teacher />} />
        <Route path="/research-results" element={<Result />} />
        <Route path="/students" element={<Student />} />
        <Route path="/graduate" element={<Graduate />} />
        <Route path="/admission-requirements" element={<Requirement />} />
      </Routes>
    </section>
  );
};

export default Content;

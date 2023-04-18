import modules from "./utils";

const routerLists = [
  {
    key: "page1",
    path: "/",
    sourcePath: "./Home",
  },
  {
    key: "page2",
    path: "./research-directions",
    sourcePath: "./Direction",
  },
  {
    key: "page3",
    path: "/lab-projects",
    sourcePath: "./Project",
  },
  {
    key: "page4",
    path: "/lab-teachers",
    sourcePath: "./Teacher",
  },
  {
    key: "page5",
    path: "/research-results",
    sourcePath: "./Result",
  },
  {
    key: "page6",
    path: "/students",
    sourcePath: "./Student",
  },
  {
    key: "page7",
    path: "/graduate",
    sourcePath: "./Graduate",
  },
  {
    key: "page8",
    path: "/admission-requirements",
    sourcePath: "./Requirement",
  },
];

routerLists.map((item, index) => {
  
})

export default routerLists;

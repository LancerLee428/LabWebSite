type IInfo = {
  id: string;
  [key: string]: string;
};

const MENU_INFO: IInfo[] = [
  { id: "1", label: "首页", path: "/" },
  { id: "2", label: "研究方向", path: "/research-directions" },
  { id: "3", label: "承担项目", path: "/lab-projects" },
  { id: "4", label: "团队导师", path: "/lab-teachers" },
  { id: "5", label: "研究成果", path: "/research-results" },
  { id: "6", label: "在读生", path: "/students" },
  { id: "7", label: "毕业生", path: "/graduate" },
  { id: "8", label: "招生要求", path: "/admission-requirements" },
];

export default MENU_INFO;

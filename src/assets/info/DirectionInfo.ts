import chicken from "@/assets/svg/chicken.svg";
import dragon from "@/assets/svg/dragon.svg";
import snake from "@/assets/svg/snake.svg";

type IInfo = {
  id: string;
  [key: string]: string;
};

const DIRECTION_INFO: IInfo[] = [
  {
    id: "1",
    logo: chicken,
    name: "全球离散格网",
    content: "研究下一代地理空间信息表达方式",
  },
  {
    id: "2",
    logo: dragon,
    name: "地理空间系统集成",
    content: "实现集空天地于一体的数字孪生系统",
  },
  {
    id: "3",
    logo: snake,
    name: "遥感应用",
    content: "使用深度学习对生态保护进行研究",
  },
];

export default DIRECTION_INFO;

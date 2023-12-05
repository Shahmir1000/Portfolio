import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home/Home";
import  Projects from "./components/Projects/Projects";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;

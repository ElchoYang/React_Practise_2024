import logo from "./logo.svg";
import "./App.css";
import { baseRouters, functionalRouters } from "./routes/index";
import { useRoutes } from "react-router-dom";
import { memo } from "react";
import useSecurity from "./hooks/useSecurity";
import { useEffect, useState } from "react";

const App = memo(() => {
  const [routers, setRouters] = useState([]);
  const { menus } = useSecurity();

  useEffect(() => {
    console.log("App. menus = ", menus);
    const children = [];
    menus.map((m) => {
      const rObj = functionalRouters.find((item) => item.meta.name === m.rkey);
      if (rObj) {
        children.push(rObj);
      }
    });
    baseRouters[1].children = baseRouters[1].children.concat(children);
    setRouters(baseRouters);
  }, [menus]);

  return <>{useRoutes(routers)}</>;
});

export default App;

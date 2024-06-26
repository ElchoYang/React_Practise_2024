import logo from "./logo.svg";
import "./App.css";
import defaultRouter from "./routes/index";
import { useRoutes } from "react-router-dom";
import { memo } from "react";

const App = memo(() => {
  const routers = defaultRouter;

  return <>{useRoutes(routers)}</>;
});

export default App;

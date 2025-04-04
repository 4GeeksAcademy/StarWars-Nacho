import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./pages/App";
import Details from "./pages/details";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App  />} errorElement={<h1>Not found!</h1>} />
      <Route path="/details" element={<Details  />} />
    </>
  )
);

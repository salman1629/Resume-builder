import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import PersonalInfoForm from "./components/forms/PersonalInfoForm";
import SkillsForm from "./components/forms/SkillsForm";
import WorkHistoryForm from "./components/forms/WorkHistoryForm";
import Education from "./components/forms/EducationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PersonalInfoForm />,
      },
      
      {
        path: "skills",
        element: < SkillsForm/>,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "work_history",
        element: <WorkHistoryForm />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;


/** icons
 *  and data filling
 * need to add current working checkbox
 * need to add percentage and location of collage 
 *  and work on save as pdf */
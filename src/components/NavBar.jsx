import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="px-16 py-10 flex justify-between no-print">
      <p className="text-slate-800 text-2xl italic font-bold cursor-pointer">
        Resume builder
      </p>
      <div className="flex gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 text-xl italic font-bold cursor-pointer border-b-2"
              : "text-slate-800 text-xl italic font-bold cursor-pointer"
          }
        >
          Personal Info
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 text-xl italic font-bold cursor-pointer border-b-2"
              : "text-slate-800 text-xl italic font-bold cursor-pointer"
          }
        >
          Education
        </NavLink>
        <NavLink
          to="/work_history"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 text-xl italic font-bold cursor-pointer border-b-2"
              : "text-slate-800 text-xl italic font-bold cursor-pointer"
          }
        >
          Work History
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 text-xl italic font-bold cursor-pointer border-b-2"
              : "text-slate-800 text-xl italic font-bold cursor-pointer"
          }
        >
          Skills
        </NavLink>
      </div>
    </nav>
  );
}

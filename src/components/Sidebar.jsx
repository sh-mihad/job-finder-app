import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFilter } from "../redux/features/filters/filterSLice";

export default function Sidebar() {
  const {filters} = useSelector(state=>state.filters)
  const dispatch = useDispatch()

  const handleClick = (filterBy)=>{
    dispatch(addFilter(filterBy))
  }
  
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button
               onClick={()=>handleClick("")}
              className={`main-menu ${filters === "all" && "menu-active"}`}
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </button>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <button
                  className={`${filters === "Internship" && "menu-active"} sub-menu`}
                  onClick={()=>handleClick("Internship")}
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </button>
              </li>
              <li>
                <button
                  className={`${filters === "Full Time" && "menu-active"} sub-menu`}
                  onClick={()=>handleClick("Full Time")}
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </button>
              </li>
              <li>
                <button
                  className={`${filters === "Remote" && "menu-active"} sub-menu`}
                  onClick={()=>handleClick("Remote")}
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addJob"  className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

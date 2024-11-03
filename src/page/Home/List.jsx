import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeJob } from "../../redux/features/jobs/jobSLice";

export default function List({ job }) {
  const { id, deadline, salary, type, title } = job || {};
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleEditClick = (id) => {
    navigate(`/edit/${id}`,{ state: job });
  };
  const handleDelete = (id)=>{
    dispatch(removeJob(id))
  }
  let typeColor ;
  if(type === "Internship"){
    typeColor = "!text-[#FF5757]"
  }
  if(type === "Full Time"){
    typeColor = "!text-[#FF8A00]"
  }
  if(type === "Remote"){
    typeColor = "!text-[#56E5C4]"
  }
  
  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i className={`fa-solid fa-stop text-lg mr-1.5 ${typeColor}`}></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            onClick={() => handleEditClick(id)}
            type="button"
            className="lws-edit btn btn-primary"
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button onClick={()=>handleDelete(id)} type="button" className="lws-delete btn btn-danger ">
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}

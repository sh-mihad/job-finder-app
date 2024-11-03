import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addJob, changeJob } from "../../redux/features/jobs/jobSLice";
const initialFormData ={
  title:"",
  type:"",
  salary:"",
  deadline:"",
}

export default function CreateEdit() {
  const [formData,setFormData] = useState(initialFormData)
  const dispatch = useDispatch()
  const {loading,error} = useSelector(state=>state.jobs)
  const [isEdit,setEdit] = useState(false)
  const {id} = useParams()
  const location = useLocation()
  const state = location?.state
  
   useEffect(()=>{
    if(id){
      
      setEdit(true)
      setFormData({
        title:state?.title,
        type:state?.type,
        salary:state?.salary,
        deadline:state?.deadline,
      })
    }
   },[id,state])

  const handleOnchange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate()

 const handleCancel =()=>{
  setEdit(false)
  setFormData(initialFormData)
  navigate("/addJob")
 }

  const handleSubmit =(e)=>{
   e.preventDefault()
   if(isEdit){
    dispatch(changeJob({id,data:formData}))
    setEdit(false)
   }else{
    dispatch(addJob(formData))
   }
   
   setFormData(initialFormData)
  }
  return (
    <div className="lg:pl-[14px] mt-[5.8125rem]">
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">{isEdit ? "Edit Form" :"Add New Job"}</h1>
      <div className="max-w-3xl mx-auto">
      <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="fieldContainer">
            <label htmlFor="lws-JobTitle"  className="text-sm font-medium text-slate-300">Job Title</label>
            <select value={formData.title}  onChange={handleOnchange} id="lws-JobTitle" name="title" required>
              <option value="" hidden selected>Select Job</option>
              <option value={"Software Engineer"}>Software Engineer</option>
              <option value={"Software Developer"}>Software Developer</option>
              <option value={"Full Stack Developer"}>Full Stack Developer</option>
              <option value={"MERN Stack Developer"}>MERN Stack Developer</option>
              <option value={"DevOps Engineer"}>DevOps Engineer</option>
              <option value={"QA Engineer"}>QA Engineer</option>
              <option value={"Product Manager"}>Product Manager</option>
              <option value={"Social Media Manager"}>Social Media Manager</option>
              <option value={"Senior Executive"}>Senior Executive</option>
              <option value={"Junior Executive"}>Junior Executive</option>
              <option value={"Android App Developer"}>Android App Developer</option>
              <option value={"IOS App Developer"}>IOS App Developer</option>
              <option value={"Frontend Developer"}>Frontend Developer</option>
              <option value={"Frontend Engineer"}>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select id="lws-JobType" value={formData.type}   onChange={handleOnchange} name="type" required>
              <option value="" hidden selected>Select Job Type</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input value={formData.salary}   onChange={handleOnchange} type="number" name="salary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                placeholder="20,00,000" />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input value={formData.deadline}   onChange={handleOnchange} type="date" name="deadline" id="lws-JobDeadline" required />
          </div>

          <div style={{display:"flex",gap:"20px",justifyContent:"end"}} className="text-right">
          {
            isEdit &&  <button disabled={loading} onClick={handleCancel} type="button" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
            Cancel
           </button>
           }
            <button disabled={loading} type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
             { loading ? "Save..":`${isEdit ? "Update" : "Submit"}`}
            </button>
          

            
          </div>
          {
              error && <p className="error">{error}</p>
            }
        </form>

      </div>
    </main>
  </div>
  )
}

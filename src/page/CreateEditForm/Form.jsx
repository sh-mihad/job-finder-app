import { useState } from "react"
import { useDispatch } from "react-redux"
import { addJob } from "../../redux/features/jobs/jobSLice"

const initialFormData ={
  title:"",
  type:"",
  salary:"",
  deadline:"",
}
export default function Form() {
  const [formData,setFormData] = useState(initialFormData)
  const dispatch = useDispatch()

  const handleOnchange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.name})
  }


  const handleSubmit =(e)=>{
   e.preventDefault()
   dispatch(addJob(formData))
  }
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="fieldContainer">
            <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
            <select onChange={handleOnchange} id="lws-JobTitle" name="title" required>
              <option value="" hidden selected>Select Job</option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select id="lws-JobType" onChange={handleOnchange} name="type" required>
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
              <input onChange={handleOnchange} type="number" name="salary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                placeholder="20,00,000" />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input onChange={handleOnchange} type="date" name="deadline" id="lws-JobDeadline" required />
          </div>

          <div className="text-right">
            <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
              Submit
            </button>
          </div>
        </form>
  )
}

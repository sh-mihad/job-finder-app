import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchAllJobs } from "../../redux/features/jobs/jobSLice";
import List from "./List";

export default function JobListContainer() {
  const {jobs,loading,error} = useSelector(state=>state.jobs)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchAllJobs())
  },[dispatch])
  
  let displayContent = null;

  if(loading){
    displayContent = <Loading/>
  }
  if(!loading && error){
    displayContent = <Error>{error}</Error>
  }
  if(!loading && !error && jobs?.length === 0){
    displayContent = <p>No Job Found</p>
  }
  if(!loading && !error && jobs?.length > 0){
    displayContent = jobs.map(job=>  <List  key={job.id} job={job}/>)
  }


  return (
    <div className="jobs-list">
    {
      displayContent
    }
    </div>
  );
}

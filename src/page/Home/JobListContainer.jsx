import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchAllJobs } from "../../redux/features/jobs/jobSLice";
import List from "./List";

export default function JobListContainer() {
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const { filters, sort, search } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  let displayContent = null;

  if (loading) {
    displayContent = <Loading />;
  }
  if (!loading && error) {
    displayContent = <Error>{error}</Error>;
  }
  if (!loading && !error && jobs?.length === 0) {
    displayContent = <p>No Job Found</p>;
  }
  if (!loading && !error && jobs?.length > 0) {
    displayContent = [...jobs]
      .sort((a, b) => {
        if (sort === "high") {
          return Number(a.salary - b.salary);
        } else if (sort === "low") {
          return Number(b.salary - a.salary);
        } else {
          return true;
        }
      })
      ?.filter((job) =>
        filters ? filters.toLowerCase().includes(job.type.toLowerCase()) : true
      )
      ?.filter((job) =>
         search ?job.title.toLowerCase().includes(search.toLowerCase())  : true
      )
      ?.map((job) => <List key={job?.id} job={job} />) 
  }

  return <div className="jobs-list">{displayContent}</div>;
}

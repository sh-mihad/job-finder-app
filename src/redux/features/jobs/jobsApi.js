import axios from "../../../utils/axiosInstance";

export const getAllJobs = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};

export const addNewJob = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.json;
};
export const editJob = async (id, data) => {
  const response = await axios.put(`/jobs/${id}`, data);
  return response.json;
};
export const deleteJob = async (id) => {
  await axios.delete(`/jobs/${id}`);
  return id;
};

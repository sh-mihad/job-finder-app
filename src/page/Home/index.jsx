import Header from "./Header";
import JobListContainer from "./JobListContainer";

export default function Home() {
  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <Header />
      <JobListContainer />
    </main>
  );
}

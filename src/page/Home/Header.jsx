import { useDispatch, useSelector } from "react-redux"
import { searchBy, sortBy } from "../../redux/features/filters/filterSLice"


export default function Header() {
  const {search,sort} = useSelector(state=>state.filters)
  const dispatch = useDispatch()
  
  const handleChange = (e)=>{
    dispatch(searchBy(e.target.value))
  }
  const handleSelect = (e)=>{
    console.log(e.target.value);
    dispatch(sortBy(e.target.value))
  }
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              name="search"
              onChange={handleChange}
              value={search}
              id="lws-searchJob"
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            autoComplete="sort"
            className="flex-1"
            value={sort}
            onChange={handleSelect}
          >
            <option value={"default"}>Default</option>
            <option value={"high"}>Salary (Low to High)</option>
            <option value={"low"}>Salary (High to Low)</option>
          </select>
        </div>
      </div>
  )
}

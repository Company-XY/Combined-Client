import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { clearJob } from "../../store/Slices/jobSlice";
import AsyncSelect from "react-select/async";
import { formatDistanceToNow } from "date-fns";
import { allVirtualAssistantSkills } from "../../constants/skills";

const filterSkills = (inputValue) => {
  return allVirtualAssistantSkills.filter((skill) =>
    skill.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const SkillSearchInput = ({ selectedSkills, onChange }) => {
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      const filteredSkills = filterSkills(inputValue);
      callback(filteredSkills.map((skill) => ({ value: skill, label: skill })));
    }, 1000);
  };

  return (
    <div>
      <label htmlFor="skillSearch">Search for Skills:</label>
      <AsyncSelect
        id="skillSearch"
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        value={selectedSkills}
        onChange={onChange}
      />
    </div>
  );
};

const calculateTimeAgo = (createdAt) => {
  try {
    const currentTime = new Date();
    const postedTime = new Date(createdAt);

    if (isNaN(postedTime)) {
      throw new Error(`Invalid createdAt value: ${createdAt}`);
    }

    return `${formatDistanceToNow(postedTime)} ago`;
  } catch (error) {
    console.error("Error calculating time ago:", error);
    return "Time calculation error";
  }
};

const ClientDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [skills, setSkills] = useState([]);
  const [duration, setDuration] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [myjobs, setMyjobs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);
    try {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);

      if (!user || !user.email) {
        console.error("User email not found in localStorage.");
        return;
      }

      const response = await axios.post(
        "https://auth-server-0bsp.onrender.com/api/v1/jobs",
        {
          title,
          description,
          user_email: user.email,
          skills,
          budget,
          duration,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setIsLoading(false);
      setSuccess(true);
      setTitle("");
      setDescription("");
      setBudget("");
      setDuration("");
      setSkills([]);
      dispatch(clearJob());
    } catch (error) {
      console.error(error);
      setError("Duplicate Title");
      setIsLoading(false);
    }
  };

  const fetchUserJobs = async () => {
    try {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);

      if (user && user.token && user.email) {
        const response = await axios.get(
          "https://auth-server-0bsp.onrender.com/api/v1/jobs"
        );
        const allJobs = response.data;

        const filteredJobs = allJobs.filter(
          (job) => job.user_email === user.email
        );
        setMyjobs(filteredJobs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserJobs();
  }, []);

  return (
    <div className="flex items-center justify-center max-h-screen">
      <div className="w-1/2 p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Post a New Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 px-2 py-1 border rounded-md focus:ring-blue-300 focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium">
              Job Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 px-2 py-1 border rounded-md focus:ring-blue-300 focus:border-blue-300"
              rows="4"
              required
            />
          </div>
          <SkillSearchInput selectedSkills={skills} onChange={setSkills} />
          <div className="mb-4">
            <label htmlFor="budget" className="block font-medium">
              Budget ($)
            </label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full mt-1 px-2 py-1 border rounded-md focus:ring-blue-300 focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="timeframe" className="block font-medium">
              How long should the project take (Days)
            </label>
            <input
              type="number"
              id="timeframe"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full mt-1 px-2 py-1 border rounded-md focus:ring-blue-300 focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {isLoading ? <span>Please Wait...</span> : <span>Submit</span>}
          </button>
          {success && <p className="text-green-400">Job Posted Successfully</p>}
          {error && <p className="text-red-400">{error}</p>}
        </form>
      </div>
      <div className="w-1/2 p-6 bg-white rounded shadow-md ml-8">
        <div className="my-2">
          <h2 className="font-semibold text-xl">My Projects</h2>
        </div>
        <section className="flex flex-col gap-2">
          {myjobs.map(({ _id, title, description, createdAt }) => (
            <div
              className="py-3 px-3 rounded-lg border hover:bg-blue-500 hover:text-gray-100"
              key={_id}
            >
              <span className="flex justify-between">
                <h5>{title}</h5>
                <h6>Status</h6>
              </span>
              <p>{description}</p>
              <p>Bids: 12</p>
              <span>{calculateTimeAgo(createdAt)}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ClientDashboard;

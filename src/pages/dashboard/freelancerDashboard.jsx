import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow, differenceInHours } from "date-fns";

const FreelancerDashboard = () => {
  const [job, setJob] = useState([]); // State to hold job data
  const [loading, setLoading] = useState(false); // Loading state
  const [shouldFetch, setShouldFetch] = useState(true); // Control when to fetch data
  const [searchTitle, setSearchTitle] = useState(""); // Title search filter
  const [searchSkills, setSearchSkills] = useState(""); // Skills search filter
  const [searchBudgetMin, setSearchBudgetMin] = useState(""); // Min budget filter
  const [searchBudgetMax, setSearchBudgetMax] = useState(""); // Max budget filter

  // Filter jobs based on search criteria
  const filteredJobs = job.filter((job) => {
    const titleMatch = job.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const skillsMatch = job.skills.some((skill) =>
      skill.label.toLowerCase().includes(searchSkills.toLowerCase())
    );
    const budgetMatch =
      (!searchBudgetMin || job.budget >= searchBudgetMin) &&
      (!searchBudgetMax || job.budget <= searchBudgetMax);

    const postedTime = new Date(job.createdAt);
    const hoursSincePosted = differenceInHours(new Date(), postedTime);
    const timePostedMatch = hoursSincePosted <= 24;

    return titleMatch && skillsMatch && budgetMatch && timePostedMatch;
  });

  // Fetch job data from API
  const getJob = async () => {
    try {
      setLoading(true);
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);

      if (!user || !user.token) {
        console.error("User token not found in localStorage.");
        return;
      }

      const response = await axios.get(
        "https://auth-server-0bsp.onrender.com/api/v1/jobs",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const jobsData = response.data;
      setJob(jobsData);
      setLoading(false);
      setShouldFetch(false);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
      setLoading(false);
      setShouldFetch(false);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      getJob();
    }
  }, [shouldFetch]);

  // Calculate time ago from given createdAt
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

  return (
    <div>
      {/* Search inputs */}
      <div className="bg-bgColor flex justify-between px-4 py-2 rounded-lg my-4">
        <input
          className="px-4 py-2 rounded-lg"
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <input
          className="px-4 py-2 rounded-lg"
          type="text"
          placeholder="Search by skills"
          value={searchSkills}
          onChange={(e) => setSearchSkills(e.target.value)}
        />
        <input
          type="number"
          className="px-4 py-2 rounded-lg"
          placeholder="Min budget"
          value={isNaN(searchBudgetMin) ? "" : searchBudgetMin}
          onChange={(e) => setSearchBudgetMin(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="px-4 py-2 rounded-lg"
          placeholder="Max budget"
          value={isNaN(searchBudgetMax) ? "" : searchBudgetMax}
          onChange={(e) => setSearchBudgetMax(parseInt(e.target.value))}
        />
      </div>

      {/* Display filtered jobs */}
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl mx-auto">
        {filteredJobs.map(
          ({ _id, title, description, budget, skills, createdAt }) => (
            <div
              key={_id}
              className="bg-white cursor-pointer p-4 rounded-md shadow-md w-2/3 my-2 hover:bg-blue-300"
            >
              <span className="flex justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="bg-blue-400 px-2 py-1 rounded-lg">
                  <span>{calculateTimeAgo(createdAt)}</span>
                </p>
              </span>
              <p className="mt-2 text-gray-600">{description}</p>
              <div className="flex items-center mt-4">
                <span className="bg-blue-500 text-white py-1 px-2 rounded-md text-sm">
                  Budget: ${budget}
                </span>
                <div className="ml-auto">
                  {skills.map((skill, _id) => (
                    <span
                      key={_id}
                      className="bg-gray-200 text-gray-600 py-1 px-2 rounded-md text-xs ml-2"
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FreelancerDashboard;

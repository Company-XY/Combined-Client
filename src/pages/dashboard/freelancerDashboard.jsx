import React, { useState } from "react";
import { Jobs } from "../../constants/Jobs";

const ITEMS_PER_PAGE = 10;

const FreelancerDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBudget, setSearchBudget] = useState("");
  const [searchSkills, setSearchSkills] = useState("");
  const [searchTimeframe, setSearchTimeframe] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchBudgetChange = (event) => {
    setSearchBudget(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchSkillsChange = (event) => {
    setSearchSkills(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchTimeframeChange = (event) => {
    setSearchTimeframe(event.target.value);
    setCurrentPage(1);
  };

  const PostedAt = ({ dateCreated }) => {
    const currentTime = new Date();
    const createdTime = new Date(dateCreated);
    const timeDifference = currentTime - createdTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
      return <span>{`${weeks} ${weeks === 1 ? "week" : "weeks"} ago`}</span>;
    } else if (days > 0) {
      return <span>{`${days} ${days === 1 ? "day" : "days"} ago`}</span>;
    } else if (hours > 0) {
      return <span>{`${hours} ${hours === 1 ? "hour" : "hours"} ago`}</span>;
    } else if (minutes > 0) {
      return (
        <span>{`${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`}</span>
      );
    } else {
      return (
        <span>{`${seconds} ${seconds === 1 ? "second" : "seconds"} ago`}</span>
      );
    }
  };

  const filteredJobs = Jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchBudget === "" || job.budget >= parseInt(searchBudget)) &&
      (searchSkills === "" ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchSkills.toLowerCase())
        )) &&
      (searchTimeframe === "" || job.timeframe === searchTimeframe)
  );

  const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mb-4 text-center pb-5 bg-bgColor w-full h-fit flex justify-center items-center py-2 rounded-lg">
        <input
          type="text"
          placeholder="Search by title"
          className="border border-gray-300 p-2 rounded-md w-64"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          placeholder="Search by budget"
          className="border border-gray-300 p-2 rounded-md w-64 ml-4"
          value={searchBudget}
          onChange={handleSearchBudgetChange}
        />
        <input
          type="text"
          placeholder="Search by skills"
          className="border border-gray-300 p-2 rounded-md w-64 ml-4"
          value={searchSkills}
          onChange={handleSearchSkillsChange}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {currentJobs.map(
          ({ index, title, description, budget, skills, dateCreated }) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-4 rounded-md shadow-md w-2/3 my-2 hover:bg-blue-300"
            >
              <span className="flex justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="bg-blue-400 px-2 py-1 rounded-lg">
                  <PostedAt dateCreated={dateCreated} />
                </p>
              </span>
              <p className="mt-2 text-gray-600">{description}</p>
              <div className="flex items-center mt-4">
                <span className="bg-blue-500 text-white py-1 px-2 rounded-md text-sm">
                  Budget: ${budget}
                </span>
                <div className="ml-auto">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-600 py-1 px-2 rounded-md text-xs ml-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center mt-4">
        {filteredJobs.length > ITEMS_PER_PAGE && (
          <ul className="pagination flex gap-2">
            {Array.from(
              { length: Math.ceil(filteredJobs.length / ITEMS_PER_PAGE) },
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`pagination-link ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FreelancerDashboard;

import React, { useState } from "react";

const ClientDashboard = ({ onJobPosted, userJobs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [skills, setSkills] = useState("");
  const [timeframe, setTimeframe] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new job object
    const newJob = {
      title,
      description,
      budget,
      skills: skills.split(",").map((skill) => skill.trim()),
      timeframe,
    };

    // Call the callback function to handle job posting
    if (onJobPosted) {
      onJobPosted(newJob);
    }

    // Clear form fields
    setTitle("");
    setDescription("");
    setBudget("");
    setSkills("");
    setTimeframe("");
  };

  return (
    <div className="flex items-center justify-center h-screen">
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
            <label htmlFor="skills" className="block font-medium">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full mt-1 px-2 py-1 border rounded-md focus:ring-blue-300 focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="timeframe" className="block font-medium">
              Timeframe
            </label>
            <input
              type="text"
              id="timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full mt-1 px-2 py-1 border rounded-md focus:ring-blue-300 focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Post Job
          </button>
        </form>
      </div>
      <div className="w-1/2 p-6 bg-white rounded shadow-md ml-8">
        {/* ... (User's job list) */}
      </div>
    </div>
  );
};

export default ClientDashboard;

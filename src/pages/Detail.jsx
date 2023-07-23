import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [Job, SetJob] = useState([]);
  const fetchJob = async () => {
    try {
      const job = await axios.get(`http://localhost:8080/api/v1/jobs/${id}`);

      job.data.skills = job.data.skills
        .split(";")
        .map((e) => `- ${e}`)
        .join("\n");

      job.data.benefits = job.data.benefits
        .split(";")
        .map((e) => `- ${e}`)
        .join("\n");

      SetJob(job.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchJob, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-6 lg:flex-row justify-between lg:items-center bg-blue-200 p-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-semibold">{Job.title}</h1>
          <h3 className="capitalize">
            {Job.level} | {Job.type}
          </h3>
        </div>
        <button className="bg-[#4192F9] py-2 px-4 text-white text-xs font-semibold rounded-lg">
          Apply
        </button>
      </div>
      <div className="flex flex-col gap-y-4 pt-4 p-4">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Job Description</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {Job.jobdesc}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Minimum Qualification</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {Job.minimum_qualification}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Minimum Experience</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {Job.minimum_experience}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Skills</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {Job.skills}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Benefits</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {Job.benefits}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Details;

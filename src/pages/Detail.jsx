import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const jobs = {
    title: "Database Administrator",
    level: "Pegawai non-manajemen & non supervisor",
    status: "Contract",
    jobdesc: `- Menguasai ms sql, sql cluster, sql replication/ha, tuning query, function/store procedure\n- Pengalaman : Minimum 2 tahun sebagai DBA`,
    minimum_qualification: "Pendidikan terakhir D3/S1 jurusan terkait",
    minimum_experience: "2 year(s)",
    skills: "SQL Server\nMySQL",
    benefits: "-",
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-6 lg:flex-row justify-between lg:items-center bg-blue-200 p-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-semibold">{jobs.title}</h1>
          <h3>
            {jobs.level} | {jobs.status}
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
            {jobs.jobdesc}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Minimum Qualification</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {jobs.minimum_qualification}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Minimum Experience</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {jobs.minimum_experience}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Skills</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {jobs.skills}
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-lg">Benefits</h2>
          <h3 className="text-sm whitespace-pre-wrap font-light">
            {jobs.benefits}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Details;

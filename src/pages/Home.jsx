import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import FilterCheckbox from "../components/FilterCheckbox";
import JobCard from "../components/jobCard";

function Home() {
  const [Jobs, SetJobs] = useState([]);
  const [TypeFilter, SetTypeFilter] = useState([]);
  const [LevelFilter, SetLevelFilter] = useState([]);
  const baseUrl = "http://localhost:8080/api/v1/jobs";

  const FetchJobs = async () => {
    try {
      let filter = "";
      if (TypeFilter.length > 0) {
        filter += `${filter ? "&" : "?"}type=${TypeFilter.join()}`;
      }

      if (LevelFilter.length > 0) {
        filter += `${filter ? "&" : "?"}level=${LevelFilter.join()}`;
      }

      const jobs = await axios.get(baseUrl + filter);
      SetJobs(jobs.data);
    } catch (error) {
      console.log(error);
    }
  };

  const OnTypeFilterAdd = (typeFilterName) => {
    const filter = [...TypeFilter, typeFilterName];
    SetTypeFilter(filter);
  };

  const OnTypeFilterRemove = (typeFilterName) => {
    const filter = TypeFilter.filter(
      (filtername) => filtername !== typeFilterName
    );
    SetTypeFilter(filter);
  };

  const OnLevelFilterAdd = (levelFilterName) => {
    const filter = [...LevelFilter, levelFilterName];
    SetLevelFilter(filter);
  };

  const OnLevelFilterRemove = (levelFilterName) => {
    const filter = LevelFilter.filter(
      (filtername) => filtername !== levelFilterName
    );
    SetLevelFilter(filter);
  };

  useEffect(() => FetchJobs, []);
  useEffect(
    () => FetchJobs,
    [OnTypeFilterAdd, OnTypeFilterRemove, OnLevelFilterAdd, OnLevelFilterRemove]
  );

  return (
    <>
      <div className="bg-[#F6F7F9] min-h-screen min-w-full p-3 lg:flex">
        {/* Filter component */}
        <div className="mb-4 border-b-[1px] border-slate-300 lg:border-none lg:w-96">
          {/* Header component */}
          <div className="capitalize text-[#244471] text-xl lg:text-3xl font-bold">
            <span className="text-[#FC7B64]">join</span> our team
          </div>
          {/* Header component end */}

          {/* Filter */}
          <div>
            <div className="flex flex-col gap-y-1 p-1">
              <h3 className="font-semibold">Employement Type</h3>
              <div className="grid grid-cols-3 lg:grid-cols-1 lg:gap-y-3">
                <FilterCheckbox
                  onAddFilter={OnTypeFilterAdd}
                  onRemoveFilter={OnTypeFilterRemove}
                  filterName="Contract"
                />
                <FilterCheckbox
                  onAddFilter={OnTypeFilterAdd}
                  onRemoveFilter={OnTypeFilterRemove}
                  filterName="Internship"
                />
                <FilterCheckbox
                  onAddFilter={OnTypeFilterAdd}
                  onRemoveFilter={OnTypeFilterRemove}
                  filterName="Full-time"
                />
                <FilterCheckbox
                  onAddFilter={OnTypeFilterAdd}
                  onRemoveFilter={OnTypeFilterRemove}
                  filterName="Temporary"
                />
                <FilterCheckbox
                  onAddFilter={OnTypeFilterAdd}
                  onRemoveFilter={OnTypeFilterRemove}
                  filterName="Part-time"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 p-1 lg:mt-10">
              <h3 className="font-semibold">Position Level</h3>
              <div className="grid lg:gap-y-3">
                <FilterCheckbox
                  onAddFilter={OnLevelFilterAdd}
                  onRemoveFilter={OnLevelFilterRemove}
                  filterName="CEO/GM/Direktur/Manajer Senior"
                />
                <FilterCheckbox
                  onAddFilter={OnLevelFilterAdd}
                  onRemoveFilter={OnLevelFilterRemove}
                  filterName="Manajer/Asisten Manajer"
                />
                <FilterCheckbox
                  onAddFilter={OnLevelFilterAdd}
                  onRemoveFilter={OnLevelFilterRemove}
                  filterName="Supervisor/Koordinator"
                />
                <FilterCheckbox
                  onAddFilter={OnLevelFilterAdd}
                  onRemoveFilter={OnLevelFilterRemove}
                  filterName="Pegawai non-manajemen & non-supervisor"
                />
                <FilterCheckbox
                  onAddFilter={OnLevelFilterAdd}
                  onRemoveFilter={OnLevelFilterRemove}
                  filterName="Lulusan baru/Pengalaman kerja kurang dari 1 tahun"
                />
              </div>
            </div>
          </div>
          {/* Filter end */}
        </div>
        {/* Filter component end */}

        {/* Card component */}
        <div className="grid gap-3 h-fit lg:grid-cols-3 lg:w-full lg:pl-6">
          {Jobs.map((e) => (
            <JobCard
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.jobdesc}
            />
          ))}
        </div>
        {/* Card component end */}
      </div>
    </>
  );
}

export default Home;

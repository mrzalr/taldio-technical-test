import React from "react";
import FilterCheckbox from "../components/FilterCheckbox";
import JobCard from "../components/jobCard";

function Home() {
  const jobs = [
    {
      id: 1,
      title: "Fullstack Next",
      description: "- Lorem\n- Lorem ipsum\n- Lore",
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "- Lorem\n- Lorem ipsum\n- Lore",
    },

    {
      id: 3,
      title: "AI Engineer",
      description: "- Lorem\n- Lorem ipsum\n- Lore",
    },
  ];

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
                <FilterCheckbox filterName="Contract" />
                <FilterCheckbox filterName="Internship" />
                <FilterCheckbox filterName="Full-time" />
                <FilterCheckbox filterName="Temporary" />
                <FilterCheckbox filterName="Part-time" />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 p-1 lg:mt-10">
              <h3 className="font-semibold">Position Level</h3>
              <div className="grid lg:gap-y-3">
                <FilterCheckbox filterName="CEO/GM/Direktur/Manajer Senior" />
                <FilterCheckbox filterName="Manajer/Asisten Manajer" />
                <FilterCheckbox filterName="Supervisor/Koordinator" />
                <FilterCheckbox filterName="Pegawai non-manajemen & non-supervisor" />
                <FilterCheckbox filterName="Lulusan baru/Pengalaman kerja kurang dari 1 tahun" />
              </div>
            </div>
          </div>
          {/* Filter end */}
        </div>
        {/* Filter component end */}

        {/* Card component */}
        <div className="grid gap-3 lg:grid-cols-3 lg:w-full lg:pl-6">
          {jobs.map((e) => (
            <JobCard
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
            />
          ))}
        </div>
        {/* Card component end */}
      </div>
    </>
  );
}

export default Home;

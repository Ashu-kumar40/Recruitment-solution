import React, { useState } from "react";
import "../CSS/candidateSearch.css";
import Input from "../Input";
import { BtnFill } from "../Btn";
import { candidates } from "../../Constants/data";

const cands = candidates;

export default function CandidateSearch({onQueryRole, onQueryLoc}) {
  const [inpLocation, setInpLocation] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleLocation = (e) => { 
    setInpLocation(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);

    console.log("search", searchTerm);
    // console.log(onQueryRole);
  };

  const selectRole = (searchTerm) => {
    onQueryRole(searchTerm);
  };

  const onSearchLoc = (searchTerm) => {
    setInpLocation(searchTerm);

    console.log("search", searchTerm);
    // console.log(onQueryLoc);
  };

  const selectLoc = (searchTerm) => {
    onQueryLoc(searchTerm);
  };

  return (
    <div className="cand-search-container common-container flex justify-center items-center">
      <div className="cand-search-content flex flex-col gap-4">
        <div className="heading">
          <h1>Recruit with Ease</h1>
        </div>
        <div className="cand-search-sec flex justify-center items-center gap-3">
          <div className="role-search search-common w-full">
            <div className="w-full relative">
              <Input
                placeholder="Search Role"
                value={value}
                onChange={handleChange}
              />
              <div className=" searchResults w-full bg-white rounded-br absolute overflow-hidden z-10">
                {cands
                  .filter((data) => {
                    const searchItem = value.toLocaleLowerCase();
                    const presentDate = data.jobRole.toLocaleLowerCase();

                    return (
                      searchItem &&
                      presentDate.startsWith(searchItem) &&
                      presentDate !== searchItem
                    );
                  })
                  .map((cand) => (
                    <div
                      className="px-2 py-[4px] hover:bg-neutral-100"
                      onClick={() => onSearch(cand.jobRole)}
                      key={cands.indexOf(cand)}
                    >
                      {cand.jobRole}
                    </div>
                  ))}
              </div>
            </div>
            <BtnFill text="Search" 
            onClick={() => {
              onSearch(value);
              selectRole(value);
            }} 
            // onInput={handleChange}
            /> 
          </div>

          {/* Location Search */}
          <div className="location-search search-common w-full">
            <div className="w-full relative">
              <Input
                placeholder="Search Location"
                value={inpLocation}
                onChange={handleLocation}
              />
              <div className=" searchResults w-full bg-white rounded-br absolute overflow-hidden z-10 ">
                {cands
                  .filter((data) => {
                    const searchItem = inpLocation.toLocaleLowerCase();
                    const presentDate = data.location.toLocaleLowerCase();

                    return (
                      searchItem &&
                      presentDate.startsWith(searchItem) &&
                      presentDate !== searchItem
                    );
                  })
                  .map((cand) => (
                    <div
                      className="px-2 py-[4px] hover:bg-neutral-100"
                      onClick={() => onSearchLoc(cand.location)}
                      key={cands.indexOf(cand)}
                    >
                      {cand.location}
                    </div>
                  ))}
              </div>
            </div>

            <BtnFill text="Search" onClick={() => {onSearchLoc(inpLocation);
            selectLoc(inpLocation);
            }}
            //  onInput={handleLocation}
             />
          </div>
        </div>
      </div>
    </div>
  );
}

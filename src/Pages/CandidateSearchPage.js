import React, { useState } from "react";
import CandidateSearch from "../Components/CandidateList/CandidateSearchSec";
import CandidateList from "../Components/CandidateList/CandidateList";
import Navbar from "../Components/Navbar";

export default function CandidateSearchPage() {
  const [queryRole, setQueryRole] = useState('');
  const [queryLoc, setQueryLoc] = useState('');
  
  return (
    <>
      <Navbar />
      <div className="cand-search-page-container">
        <div className="cand-search-page-content"> 
          <CandidateSearch onQueryRole={setQueryRole} onQueryLoc={setQueryLoc}/>
          <CandidateList role={queryRole} location={queryLoc}/> 
        </div>
      </div>
    </>
  );
}

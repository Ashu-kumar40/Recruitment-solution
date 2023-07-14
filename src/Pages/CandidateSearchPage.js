import React from 'react'
import CandidateSearch from '../Components/CandidateList/CandidateSearchSec'
import CandidateList from '../Components/CandidateList/CandidateList'

export default function CandidateSearchPage() {
  return (
    <div className='cand-search-page-container'>
      <div className="cand-search-page-content">
        <CandidateSearch />
        <CandidateList />
      </div>
    </div>
  )
}

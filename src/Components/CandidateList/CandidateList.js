import React from 'react'
import { candidates } from '../../Constants/data'
import ProfileCard from './ProfileCard';
import '../CSS/candidateList.css'

const cands = candidates;

export default function CandidateList() {
  return (
    <div className='cand-list-container'>
      <div className="cand-list-content">
        {
            cands.map(cand => 
            <ProfileCard 
            name={cand.name}
            profileUrl={cand.photoUrl}
            description={cand.description}
            location={cand.location}
            />
            )
        }
      </div>
    </div>
  )
}

import React from 'react'
import LIST_OF_CHALLENGES from './LIST_OF_CHALLENGES'
import { Link } from 'react-router-dom'


export default function ChallengesContainer() {
  return (
    <div className='challenges-container'>
      {LIST_OF_CHALLENGES.map((item, i) => (
        <Link key={item+i} to={item}>
          <div className='challenge-link'>
            {item}
          </div>
        </Link>
      ))}
    </div>
  )
}

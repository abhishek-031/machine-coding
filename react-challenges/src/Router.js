import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import InfiniteScrollChallenge from './components/infinite-scroll'
import ChallengesContainer from './ChallengesContainer'
import FormatPhoneNoInput from './components/format-phone-no-input'
import StarRating from './components/star-rating'
import ProgressBarChallenge from './components/progress-bar'
import NestedCommentsChallenge from './components/nested-comments'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='infinite-scroll' Component={InfiniteScrollChallenge}/>
        <Route path='format-phone-no-input' Component={FormatPhoneNoInput} />
        <Route path='star-rating' Component={StarRating} />
        <Route path='progress-bar' Component={ProgressBarChallenge} />
        <Route path='nested-comments' Component={NestedCommentsChallenge} />
        <Route path='*' Component={ChallengesContainer}/>
      </Routes>
    </BrowserRouter>
  )
}

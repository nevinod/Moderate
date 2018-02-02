import React from 'react'
import SignupContainer from './session/signup_container'
import { Route } from 'react-router-dom'
import HomeContainer from './home/home_container'
import ArticleIndexContainer from './articles/article_index_container'
import SigninContainer from './session/signin_container'


export default () => (
  <div>
    <HomeContainer />
    <Route path='/articles' component={ArticleIndexContainer} />
    <Route path='/signup' component={SignupContainer} />
    <Route path='/login' component={SigninContainer} />
  </div>
)

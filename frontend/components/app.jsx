import React from 'react'
import SignupContainer from './session/signup_container'
import { Route } from 'react-router-dom'
import HomeContainer from './home/home_container'
import ArticleIndexContainer from './articles/article_index_container'
import SigninContainer from './session/signin_container'
import { AuthRoute } from  '../util/route_util'
import ArticleFormContainer from './articles/article_form_container'
import ArticleShowContainer from './articles/article_show_container'


export default () => (
  <div>
    <HomeContainer />
    <Route exact path='/articles' component={ArticleIndexContainer} />
    <Route exact path='/articles/new' component={ArticleFormContainer} />
    // <Route exact path='/articles/:articleId' component={ArticleShowContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute path='/login' component={SigninContainer} />
  </div>
)

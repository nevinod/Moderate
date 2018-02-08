import React from 'react'
import SignupContainer from './session/signup_container'
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './home/home_container'
import ArticleIndexContainer from './articles/article_index_container'
import SigninContainer from './session/signin_container'
import { AuthRoute } from  '../util/route_util'
import ArticleFormContainer from './articles/article_form_container'
import ArticleShowContainer from './articles/article_show_container'
import CommentFormContainer from './comments/comment_form_container'
import CommentIndexContainer from './comments/comment_index_container'


export default () => (
  <div>
    <Route exact path='/' component={HomeContainer} />
    <Route exact path='/articles' component={HomeContainer} />
    <Route exact path='/articles' component={ArticleIndexContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <Route exact path='/signup' component={HomeContainer} />
    <AuthRoute path='/login' component={SigninContainer} />
    <Route exact path='/login' component={HomeContainer} />
    <Route exact path='/articles/:articleId' component={CommentIndexContainer} />
    <Route exact path='/articles/:articleId' component={CommentFormContainer} />

    <Switch>
      <Route exact path='/articles/new' component={ArticleFormContainer} />
      <Route exact path='/articles/:articleId' component={ArticleShowContainer} />
    </Switch>
  </div>
)

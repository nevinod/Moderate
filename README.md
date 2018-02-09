
# MODERATE

[Moderate Live](http://moderate-clone.herokuapp.com/#/)

Moderate is a full-stack web application modeled after Medium. It uses a Rails backend, PostgreSQL database, and a React/Redux frontend.

## Features and Implementation

### Home Page, Creating Accounts, and Logging In

Any user can navigate to the home page and read any of the articles listed. These articles are retreived by the `ArticlesController` which performs a database query of the `articles` table. However, a user will need to sign in or create an account to publish their own articles or leave a comments on other article. The login and sign up buttons are located in the top right of the home page and each button renders a modal form which takes in the user information and generates either a `POST` or `GET` to the `users` table in the backend.

![](https://image.ibb.co/m8YMfc/final_login_demo.gif "Logo Title Text 1")

### Articles

Once signed in, a user has the ability to publish their own articles, or to view other articles and leave comments. All articles are stored in the `articles` table. The `ArticleIndex` contains every article published and is rendered when a user is on the home page. Clicking any of these articles takes a user to its `ArticleShow` component, which displays the title, body, and comments. From here the user can either return back to the `ArticleIndex` page or can leave a comment in the `CommentForm` at the bottom. 

Back on the homepage, a button in the top left allows users to write and article, and renders the `ArticleForm` when clicked. The form accepts a title, body, and image url, and when submitted will immediately display the new article, as well as add it to the `articles` table.

![](https://media.giphy.com/media/l4pTqSb3kS2mb1Vfi/giphy.gif "Logo Title Text 1")



## Planned Features

### Infinite Scroll

The home page in its current form renders every article that is on the database. If the number of articles were to increase this would make load times unbearable. Inifinite scroll allows the app to handle more articles in the database without sacrificing usability.

### Customized Feed (Tags)

Similar to the actual site, I would like to add a 'Preferences' page, in which users can identify the topics that interest them the most. With these topics the home page could render the articles that would appeal most to that specific user.

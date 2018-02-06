import React from 'react';
import { Link } from 'react-router-dom';


const ArticleIndexItem = ({article, deleteArticle}) => (
  <li>
    <Link to={`/articles/${article.id}`}>{article.title}</Link>
    <button onClick={() => deleteArticle(article.id)}>Delete</button>

  </li>
);

export default ArticleIndexItem;

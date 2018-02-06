import React from 'react';
import { Link } from 'react-router-dom';


const ArticleIndexItem = ({article, deleteArticle}) => (
  <li className = "article-preview">
    <div className="title-body-wrapper">
      <Link className = "article-preview-title" to={`/articles/${article.id}`}>{article.title}</Link>
      <p className="article-preview-body">{article.body}</p>
    </div>
    <img className="index-item-image" src={`${article.cover_img_url}`} />

    {/*<button onClick={() => deleteArticle(article.id)}>Delete</button>*/}

  </li>
);

export default ArticleIndexItem;

import React from 'react';
import { Link } from 'react-router-dom';


const ArticleIndexItem = ({article, deleteArticle, blurb}) => (
  <li className = "article-preview">
    <div className="title-body-wrapper">
      <Link className = "article-preview-title" to={`/articles/${article.id}`}>{article.title}</Link>
      <p className="article-preview-body">{`${blurb}...`}</p>
    </div>
    <div className="image-box">
      <img className="index-item-image" src={`${article.cover_img_url}`} />
    </div>
    {/*<button onClick={() => deleteArticle(article.id)}>Delete</button>*/}

  </li>
);

export default ArticleIndexItem;

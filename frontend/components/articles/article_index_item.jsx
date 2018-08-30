import React from 'react';
import { Link } from 'react-router-dom';


const ArticleIndexItem = ({article, deleteArticle, blurb}) => (
  <li >


    <Link className = "article-preview" to={`/articles/${article.id}`} >
      <div className="title-body-wrapper">
        <div className = "article-preview-title">
          <p className="article-title-text">{article.title}</p>
        </div>
        <p className="article-preview-body">{`${blurb}...`}</p>
      </div>

      <div className="image-box">
        <img className="index-item-image" src={`${article.cover_img_url}`} />
      </div>

    </Link>
  </li>

);

export default ArticleIndexItem;

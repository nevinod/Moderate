import React from 'react';
import { Link } from 'react-router-dom';


const ArticleIndexItem = ({article, deleteArticle, blurb}) => (
  <li>
    // <Link className = "article-preview" to={`/articles/${article.id}`}>{article.title}>*/

    <div className = "article-preview" >
      <div className="title-body-wrapper">
        <div className = "article-preview-title">
          <p className="article-preview-body">{`${blurb}...`}</p>
        </div>
      </div>
      <div className="image-box">
        <img className="index-item-image" src={`${article.cover_img_url}`} />
      </div>
      {/*<button onClick={() => deleteArticle(article.id)}>Delete</button>*/}
    </div>
  </li>

);

export default ArticleIndexItem;

// hello

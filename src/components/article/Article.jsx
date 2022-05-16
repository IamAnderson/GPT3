import React from 'react';
import { Bounce } from 'react-reveal';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <Bounce bottom><div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div></Bounce>
    <div className="gpt3__blog-container_article-content">
      <div>
      <Bounce bottom><p>{date}</p></Bounce>
      <Bounce bottom><h3>{text}</h3></Bounce>
      </div>
      <Bounce bottom><p>Read Full Article</p></Bounce>
    </div>
  </div>
);

export default Article;
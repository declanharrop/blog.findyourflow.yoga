import React from 'react';
import { NavLink } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px auto 0px auto;
  color: var(--black);
  max-width: 1400px;
  padding: 20px;
  .inner {
    display: grid;
    grid-template-columns: 70% 30%;
    margin: 0 auto;
    text-align: left;
    @media (max-width: 920px) {
      grid-template-columns: 1fr;
    }
  }
  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
    @media (max-width: 920px) {
      height: 0px;
    }
  }
  .content {
    border-top: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);
    margin: 0 40px 0 0px;
    @media (max-width: 920px) {
      grid-template-columns: 1fr;
      margin: 0;
      padding: 20px 0;
      border-top: none;
    }
  }
  h2 {
    margin: 10px 0 0 0;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 1.2;
    @media (max-width: 920px) {
      font-size: 2.4rem;
    }
  }
  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`;

const BlogCard = ({ blog }) => (
  <Wrapper>
    <NavLink to={`/post/${blog.id}`} style={{ textDecoration: 'none' }}>
      <div className="inner">
        <div className="content">
          <h2>{blog.title}</h2>
          <p>{blog.leading}</p>
        </div>
        <img src={blog.img.url} alt="" />
      </div>
    </NavLink>
  </Wrapper>
);

export default BlogCard;

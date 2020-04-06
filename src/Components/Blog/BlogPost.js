import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Markdown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Wrap = styled.div`
  text-align: left;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  button {
    padding: 16px 22px;
    background: none;
    border: solid 1px var(--black);
    font-size: 1.4rem;
    font-weight: 500;
    &:hover {
      background: var(--black);
      color: white;
    }
  }
  .btnplacer {
    margin: 0 0 40px 20px;
  }

  .btnplacertop {
    margin: 20px 0 0 20px;
  }

  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
    padding: 20px;
    margin: 40px 0 0 0;
  }
  h1 {
    margin: 0 0 40px 0;
  }
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  .author {
    margin: 30px 0;
  }
`;

const BLOG_QUERY = gql`
  query blog($id: ID!) {
    blog(where: { id: $id }) {
      id
      createdAt
      title
      img {
        url
      }
      content
      author
      leading
    }
  }
`;

export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Wrap>
        <Query
          query={BLOG_QUERY}
          variables={{
            id: match.params.id,
          }}
        >
          {({ data, loading }) => {
            if (loading) return 'loading';
            const { blog } = data;
            return (
              <div className="mw7 center tc pt2">
                <Helmet>
                  <title>Find Your Flow - Blog | {blog.title}</title>
                  <meta name="description" content={blog.leading} />
                  <meta property="og:locale" content="en_GB" />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:title"
                    content={`Find Your Flow - Blog | ${blog.title}`}
                  />
                  <meta
                    property="og:url"
                    content={`https://blog.findyourflow.yoga/post/${blog.id}`}
                  />
                  <meta
                    property="og:site_name"
                    content="Find Your Flow - Blog"
                  />
                  <meta property="og:description" content={blog.leading} />
                  <meta property="og:image" content={blog.img.url} />
                  <meta
                    property="article:published_time"
                    content={blog.createdAt}
                  />
                </Helmet>
                <NavLink to="/">
                  <div className="btnplacertop">
                    <button type="button">BACK HOME</button>
                  </div>
                </NavLink>
                <img src={blog.img.url} alt={blog.title} />
                <div className="content">
                  <h1>{blog.title}</h1>

                  <div className="ma4 separator " />
                  <div className="mt4 ph3">
                    <Markdown>{blog.content}</Markdown>
                  </div>
                  <div className="author">
                    <p>By: {blog.author}</p>
                  </div>
                </div>
                <NavLink to="/">
                  <div className="btnplacer">
                    <button type="button">BACK HOME</button>
                  </div>
                </NavLink>
              </div>
            );
          }}
        </Query>
      </Wrap>
    );
  }
}

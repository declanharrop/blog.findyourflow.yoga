import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import BlogCard from './BlogCard';
import FeaturedBlogCard from './FeaturedBlogCard';

const BLOGS_QUERY = gql`
  query allPosts {
    blogs(orderBy: createdAt_DESC) {
      id
      title
      img {
        url
      }
      leading
      author
    }
  }
`;

const HeadingSection = styled.div`
  margin: 40px 0 20px 0;
  h1 {
    font-weight: 200;
    font-size: 3.4rem;
  }
`;

const Posts = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

function BlogList() {
  return (
    <div>
      <Helmet>
        <title>Find Your Flow - Blog</title>
        <meta
          name="description"
          content="Find Your Flow is all about offering yoga for anyone and everyone, no matter what your shape, size, gender, background or flexibility"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Find Your Flow - Blog" />
        <meta property="og:url" content="https://blog.findyourflow.yoga" />
        <meta property="og:site_name" content="Find Your Flow - Blog" />
        <meta
          property="og:description"
          content="Find Your Flow is all about offering yoga for anyone and everyone, no matter what your shape, size, gender, background or flexibility"
        />
      </Helmet>
      <HeadingSection></HeadingSection>
      <Query query={BLOGS_QUERY}>
        {({ loading, data }) => {
          if (loading) return <LoadingSection>Loading....</LoadingSection>;
          const { blogs } = data;

          return (
            <>
              {blogs.map((blog, i) => (
                <div key={blog.id}>
                  {i === 0 ? (
                    <FeaturedBlogCard data={blog} />
                  ) : (
                    <Posts>
                      <BlogCard blog={blog} />
                    </Posts>
                  )}
                </div>
              ))}
            </>
          );
          // const { blogs } = data;
          // return blogs.map(blog => (
          //   <div key={blog.id}>
          //     <BlogCard blog={blog} />
          //   </div>
          // ));
        }}
      </Query>
    </div>
  );
}

const LoadingSection = styled.div`
  height: 90vh;
`;

export default BlogList;

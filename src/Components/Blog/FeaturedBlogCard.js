import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0px auto 0px auto;
  color: var(--black);
  padding: 20px;
  margin: 0 auto;
  max-width: 1400px;

  .inner {
    display: grid;
    grid-template-columns: 60% 40%;
    text-align: left;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      border-top: 1px solid var(--grey);
      padding-top: 20px;
    }
  }
  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }
  .content {
    border-top: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);
    margin: 0 0 0 40px;
    @media (max-width: 1000px) {
      border-top: none;
      grid-template-columns: 1fr;
      margin: 40px 0 0 0;
    }
    .infoSection {
      background: blue;
      p {
        float: left;
        margin: 0 0 20px 0;
        font-size: 1.2rem;
      }
      h3 {
        float: right;
        margin: 0 0 20px 0;
      }
    }
  }
  h2 {
    margin: 30px 0 0 0;
    font-weight: 400;
    font-size: 3.8rem;
    line-height: 1.2;
    @media (max-width: 1000px) {
      font-size: 3.2rem;
      margin: 0;
    }
  }
  h3 {
    margin: 10px 0;
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      margin: 10px 0 30px 0;
      text-align: right;
    }
  }
  p {
    margin: 20px 0;
  }
`;

const FeaturedBlogCard = ({ data }) => {
  const NewDate = new Date(data.createdAt);
  const Day = NewDate.toDateString();

  return (
    <>
      <Wrapper>
        <NavLink to={`/post/${data.id}`} style={{ textDecoration: 'none' }}>
          <div className="inner">
            <img src={data.img.url} alt="" />
            <div className="content">
              <h2>{data.title}</h2>
              <p>{data.leading}</p>
              <div className="infoSection">
                <p>{Day}</p>
                <h3>{data.author}</h3>
              </div>
            </div>
          </div>
        </NavLink>
      </Wrapper>
    </>
  );
};

export default FeaturedBlogCard;

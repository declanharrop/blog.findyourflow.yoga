import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//
// Styles
//

const Wrapper = styled.footer`
  margin: 50px auto;
  max-width: 600px;
  padding: 20px 0;
  p {
    color: var(--darkGrey);
    font-size: 1.4rem;
    line-height: 1.8;
  }
`;

//
// Content
//

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <Wrapper>
      <div>
        <p>
          Copyright © {year} Find Your Flow with Natalie. Use of this site
          constitutes acceptance of our{' '}
          <a
            href="https://findyourflow.yoga/PrivacyPolicy"
            title="Privacy Policy - Find Your Flow Yoga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="https://findyourflow.yoga/TermsAndConditions"
            title="Terms & Conditions - Find Your Flow Yoga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions
          </a>{' '}
          The material on this site may not be reproduced, distributed,
          transmitted, cached or otherwise used, except with prior written
          permission of Find Your Flow with Natalie.
        </p>
      </div>
    </Wrapper>
  );
};
export default Footer;

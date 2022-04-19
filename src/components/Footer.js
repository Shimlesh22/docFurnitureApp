import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (

    <Wrapper>
      <div className="section-center footer-center">
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.footer`
  background: #1d1e18;
  margin-top: 2rem;
  .code {
    color: var(--clr-red-dark);
  }

  .footer-center {
    padding: 1.5rem 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5 {
     color: var(--clr-white);
      margin-bottom: 1rem;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .footer-icon {
    color: var(--clr-primary-4);
    font-size: 1.5rem;
    margin-right: 2rem;
  }

  .footer-icon:hover {
    color: var(--clr-primary-5);
  }
`;

export default Footer;

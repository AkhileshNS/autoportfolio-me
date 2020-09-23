import styled from '@emotion/styled';
import { css } from 'global/constants';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    max-width: 1080px;
  }

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${css.gray};
  }

  .bar {
    background: ${css.primary};
    width: 50px;
    height: 3px;
  }

  button {
    padding: 10px 30px;
    background: ${css.primary};
    border-radius: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${css.white};
    outline: none;
    border: none;
    cursor: pointer;

    :hover {
      background: ${css.black};
    }

    :active {
      background: ${css.primary};
    }
  }

  section:nth-of-type(odd) {
    background-color: ${css.accent};
  }

  section {
    width: 100%;
  }
`;

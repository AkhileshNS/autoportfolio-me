import styled from '@emotion/styled';
import { css } from 'global/constants';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${css.primary};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin: 0 4px;
    outline: none;

    :hover {
      background-color: ${css.black};
    }

    :active {
      background-color: ${css.black};
    }
  }

  .set {
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
    opacity: 0.9;

    :hover {
      opacity: 1;
    }

    :active {
      opacity: 0.9;
    }

    p {
      padding-left: 4px;
    }
  }
`;

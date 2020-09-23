import styled from '@emotion/styled';
import { css } from 'global/constants';

export default styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  width: calc(100% - 32px);
  margin: 16px;
  background-color: ${css.white};
  height: 100%;

  .project-title {
    color: ${css.primary};
    cursor: pointer;
    padding: 16px 16px 8px;
    text-align: start;

    :hover {
      text-decoration: underline;
    }
  }

  .info {
    display: flex;
    padding: 0 16px 8px;

    p {
      font-size: 14px;
      padding-right: 8px;
    }
  }

  .desc {
    padding: 0 16px;
    margin-bottom: 16px;
    width: 100%;
    height: 60px;

    p {
      font-size: 14px;
    }
  }
`;

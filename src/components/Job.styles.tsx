import styled from '@emotion/styled';
import { css } from 'global/constants';

export default styled.div`
  padding-top: 36px;
  width: 100%;

  h3,
  p {
    padding-bottom: 4px;
  }

  .header-1 {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h3 {
      text-align: start;
    }

    p {
      text-align: end;
      color: ${css.primary};
    }
  }

  .header-2 {
    display: flex;
    justify-content: space-between;
    color: ${css.gray};
    padding: 8px 0 4px;

    p {
      font-size: 14px;
    }
  }

  ul {
    padding-left: 16px;
    color: ${css.gray};
  }

  @media only screen and (max-width: 768px) {
    .header-1,
    .header-2 {
      flex-direction: column;
      align-items: center;
    }

    .header-1 {
      h3,
      p {
        text-align: center;
      }
    }
  }
`;

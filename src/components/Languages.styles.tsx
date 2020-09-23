import styled from '@emotion/styled';
import { css } from 'global/constants';

interface IProps {
  card?: boolean;
}

export default styled.div<IProps>`
  display: flex;
  flex-direction: ${({ card }) => (card ? 'column-reverse' : 'column')};
  width: 100%;

  .language-bar {
    width: 100%;
    height: ${({ card }) => (card ? 14 : 16)}px;
    display: flex;
    margin-bottom: ${({ card }) => (card ? 0 : 12)}px;
    overflow: hidden;

    div {
      border-right: ${({ card }) => (card ? 0 : 2)}px solid white;

      :hover {
        margin-top: ${({ card }) => (card ? 2 : 0)}px;
      }

      :active {
        margin-top: 0px;
      }

      :last-of-type {
        border-right: none;
      }
    }
  }

  .details {
    display: flex;
    flex-wrap: wrap;
    padding: 0 ${({ card }) => (card ? 16 : 8)}px;
    padding-top: ${({ card }) => (card ? 8 : 0)}px;

    .detail {
      display: flex;
      align-items: center;
      padding-right: 12px;
      margin-bottom: 12px;

      .box {
        height: 8px;
        width: 8px;
      }

      p {
        padding-left: 8px;
        margin-bottom: 0px;
        color: ${css.black};

        span {
          color: ${css.gray};
        }
      }
    }
  }
`;

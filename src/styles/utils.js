import { css } from 'styled-components';

export const ellipsisStyle = (line = 1) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
`;

import styled from "styled-components";
import { colors } from "../styles/constants";
import { hexToRGB } from "../utils";

const Table = styled.table`
  position: relative;
  width: 100%;
  overflow: auto;

  & > table {
    width: 100%;
    caption-side: bottom;
    text-align: left;
    font-size: 12px;
    ${(props) => props.className}
  }
`;
Table.displayName = "Table";

const TableHeader = styled.thead`
  & tr {
    border-bottom: 1px solid var(--color-border);
    ${(props) => props.className}
  }
`;
TableHeader.displayName = "TableHeader";

const TableBody = styled.tbody`
  & tr:last-child {
    border-bottom: none;
    ${(props) => props.className}
  }
`;
TableBody.displayName = "TableBody";

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${hexToRGB(colors.muted, 0.5)};
  }

  ${(props) => props.className}
`;
TableRow.displayName = "TableRow";

const TableHead = styled.th`
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  color: var(--color-muted-foreground);

  ${(props) => props.className}
`;
TableHead.displayName = "TableHead";

const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  line-height: 1;

  ${(props) => props.className}
`;
TableCell.displayName = "TableCell";

const TableCaption = styled.caption`
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-muted-foreground);
  caption-side: bottom;

  ${(props) => props.className}
`;
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
};

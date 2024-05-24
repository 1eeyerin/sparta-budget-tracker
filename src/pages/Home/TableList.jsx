import { Badge } from "@/src/components/Badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/Table";
import { CATEGORIES } from "@/src/constants";
import { numberWithCommas } from "@/src/utils";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TableList = ({ posts }) => {
  return (
    <StSection>
      <StTable>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>번호</TableHead>
            <TableHead>지출 항목</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead>지출 내용</TableHead>
            <StTableHeadRight>금액</StTableHeadRight>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post, index) => {
            const categoryNames = CATEGORIES.find(
              (category) => category.id === post.category
            );

            return (
              <TableRow key={post.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Badge>{categoryNames.name}</Badge>
                </TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell>
                  <Link to={`/detail/${post.id}`}>{post.description}</Link>
                </TableCell>
                <StTableCellRight>
                  {numberWithCommas(post.price, "원")}
                </StTableCellRight>
              </TableRow>
            );
          })}
        </TableBody>
      </StTable>
    </StSection>
  );
};

const StTable = styled(Table)`
  & th,
  & td {
    &:nth-child(1) {
      width: 70px;
    }
    &:nth-child(2) {
      width: 130px;
    }
    &:nth-child(3) {
      width: 120px;
    }
    &:nth-child(4) {
      width: calc(100% - 460px);
    }
    &:nth-child(5) {
      width: 140px;
    }
  }
`;

const StTableHeadRight = styled(TableHead)`
  text-align: right;
`;

const StTableCellRight = styled(TableCell)`
  text-align: right;
`;

const StSection = styled.section`
  gap: 32px;
  padding: 24px;
  background-color: var(--color-card);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: var(--color-shadow-sm);
  margin-top: 24px;
`;

export default TableList;

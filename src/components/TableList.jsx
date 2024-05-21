import { Badge } from "@/components/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants";
import { numberWithCommas } from "../utils";

const TableList = ({ posts }) => {
  return (
    <div className={styles.list}>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">번호</TableHead>
            <TableHead>지출 항목</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead>지출 내용</TableHead>
            <TableHead className="text-right">금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post, index) => {
            const categoryNames = CATEGORIES.find(
              (category) => category.id === post.category
            );

            return (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Badge>{categoryNames.name}</Badge>
                </TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell>
                  <Link to={`/detail/${post.id}`}>{post.description}</Link>
                </TableCell>
                <TableCell className="text-right">
                  {numberWithCommas(post.price, "원")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

const styles = {
  list: [
    "mt-6",
    "p-6",
    "grid",
    "rounded-lg",
    "border",
    "bg-card",
    "shadow-sm",
  ].join(" "),
};

export default TableList;

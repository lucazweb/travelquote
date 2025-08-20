import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell as Cell } from "./styled";
import type { Quote } from "../../../domain/models";
import { differenceInDays, format } from "date-fns";

interface QuotesTableProps {
  data: Quote[];
  onClickRow: (row: Quote) => void;
}

export const QuotesTable = ({ data, onClickRow }: QuotesTableProps) => {
  const handleTotal = (row: Quote, duration: number) => {
    const {
      foodExpenses,
      leisureExpenses,
      mobilityExpenses,
      ticketBack,
      ticketGoing,
    } = row;

    const daily =
      duration * (foodExpenses + leisureExpenses + mobilityExpenses);

    const tickets = ticketBack + ticketGoing;

    return daily + tickets;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Directions</TableCell>
            <TableCell align="right">Travel date</TableCell>
            <TableCell align="right">Duration (days)</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => {
            const tint = i % 2 == 0;
            const style = { color: tint ? "white" : "#333" };
            const onClick = () => onClickRow(row);
            const duration = differenceInDays(row.backDate, row.goingDate);
            const sum = handleTotal(row, duration);

            return (
              <TableRow
                style={{
                  backgroundColor: tint ? "#6750A4" : "white",
                  color: tint ? "white" : "#333",
                }}
                key={row.goingDate}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Cell component="th" scope="row" onClick={onClick}>
                  <span style={style}>
                    {row.origin} - {row.destiny}
                  </span>
                </Cell>
                <Cell align="right" onClick={onClick}>
                  <span style={style}>{format(row.goingDate, "PPP")}</span>
                </Cell>
                <Cell align="right" onClick={onClick}>
                  <span style={style}>{duration} days</span>
                </Cell>
                <Cell align="right" onClick={onClick}>
                  <span style={{ color: tint ? "white" : "#333" }}>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "BRL",
                    }).format(sum)}
                  </span>
                </Cell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

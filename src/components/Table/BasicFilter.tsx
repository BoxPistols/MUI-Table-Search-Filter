// テーブルの抽象化
import { TableBody, TableCell, TableRow } from '@mui/material';

export const BasicFilter = ({ rows }: { rows: any }) => {
  return (
    <TableBody>
      {rows.map((row: any, ...props: any) => {
        return (
          <TableRow key={row.key}>
            <TableCell component='th' scope='row'>
              {row.cellValue}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

// [Material-UI テーブル内の行を検索でフィルターする](https://qiita.com/quryu/items/f828d37855e87ccbc49b)

import TableBody from '@mui/material/TableBody';
import { CustomTableCell, CustomTableRow } from '.';

export const FilterTable = ({ rows, ...props }: { rows: any }) => {
  return (
    <TableBody>
      {rows.map((row: any, ...props: any) => {
        return (
          <CustomTableRow key={row.name}>
            <CustomTableCell component='th' scope='row'>
              {row.name}
            </CustomTableCell>
            <CustomTableCell>{row.calories}</CustomTableCell>
            <CustomTableCell>{row.fat}</CustomTableCell>
            <CustomTableCell>{row.carbs}</CustomTableCell>
            <CustomTableCell>{row.protein}</CustomTableCell>
          </CustomTableRow>
        );
      })}
    </TableBody>
  );
};

// データを持ち、表示させるプレゼンテーショナルコンポーネント
import { useState } from 'react';
import { FilterTable } from './FilterTable';
import { Search } from './Search';
import {
  CustomTableContainer,
  CustomTable,
  CustomTableHeader,
  CustomTableCell,
} from '.';
import { Box } from '@mui/material';

/**
 * searched?: any;
 * initialRows?: any;
 * setRows?: any;
 * setSearched?: any;
 */

// データの型
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  // 配列で返す
  return { name, calories, fat, carbs, protein };
}

// TODO: json化 / データの投入
const initialRowsData = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Frozen Juice', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// Add New
// Table Title Example Data /
type Column = {
  key: string; // 表示データ（データ項目）
  label: string; //タイトル表示
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit'; // テキストの左右、中央の寄せオプション
  // 各Cellの幅カスタム指定
  minWidth?: number; // 最小幅
  maxWidth?: number; // 最大幅 ※最大幅を指定する時は最小幅も明示する
};
// ここで各見出しの表示情報に加え、列幅などのUIを調整していく。なければデフォルト値が設置される。
const columns: Column[] = [
  {
    key: 'id', //jsonなどのデータの取得キー
    label: 'ID', //表示文字列
    minWidth: 50, //最小幅
    align: 'center', //テキスト位置
  },
  {
    key: 'full_name',
    label: '氏名',
  },
  {
    key: 'kana',
    label: 'カナ',
    minWidth: 140,
    maxWidth: 180,
  },
  {
    key: 'gender',
    label: '性別',
    minWidth: 40,
    maxWidth: 60,
    align: 'center',
  },
  {
    key: 'mail',
    label: 'メール',
    minWidth: 160,
  },
];

const ResultNone = () => {
  return (
    <Box display='flex' justifyContent='center' sx={{ p: 3, width: '100%' }}>
      <Box sx={{ textAlign: 'center' }}>検索結果はありませんでした</Box>
    </Box>
  );
};

export const OnTableFilter = () => {
  // テーブルの行
  const [rowsData, setRowsData] = useState([...initialRowsData]);
  // 検索バーに入力された文字
  const [searchedData, setSearchedData] = useState('');

  return (
    <>
      {/*　検索とテーブルのデータ共有 */}
      <CustomTableContainer sx={{ pt: 1, margin: 'auto', maxWidth: 800 }}>
        <Search
          initialRows={initialRowsData} // テーブルデータ
          setRows={setRowsData} // 検索対象
          searched={searchedData} // 検索結果
          setSearched={setSearchedData} // トリガー
          id='1'
          label='検索'
        />
        <CustomTable>
          <CustomTableHeader>
            {columns.map((column) => (
              <CustomTableCell
                key={column.key}
                align={column.align}
                // style={{
                //   minWidth: column.minWidth ? column.minWidth : minWidthValue,
                //   maxWidth: column.maxWidth ? column.maxWidth : maxWidthValue,
                // }}
              >
                {column.label}
              </CustomTableCell>
            ))}
          </CustomTableHeader>
          {rowsData.length < 1 ? ResultNone() : <FilterTable rows={rowsData} />}
        </CustomTable>
      </CustomTableContainer>
    </>
  );
};

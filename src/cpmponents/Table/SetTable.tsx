// データを持ち、表示させるプレゼンテーショナルコンポーネント
import { useState } from 'react';
import { BasicTable } from './Basic';
import { Search } from './Search';
import { CustomTableContainer } from './';

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

export const SetTable = () => {
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
        {/* テーブル行の設定 */}
        {/* <BasicTable rows={rowsData} /> */}
        {rowsData.length < 1 ? 'なし' : <BasicTable rows={rowsData} />}
        {/* 結果件数 */}
        {}rowsData.length :{rowsData.length}
      </CustomTableContainer>
    </>
  );
};

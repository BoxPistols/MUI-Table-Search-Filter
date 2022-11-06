// データを持ち、表示させるプレゼンテーショナルコンポーネント
import { ChangeEvent, useState } from 'react';
import {
  CustomTableContainer,
  CustomTable,
  CustomTableHeader,
  CustomTableCell,
  CustomTableRow,
} from '.';
// import { Box, TableBody, TablePagination } from '@mui/material';
import { Box, TableBody, TextField } from '@mui/material';

// TODO: Add データモックアップ
import Data from '../../content/mock/MockData/person.json'; // 検証用ダミーjson ユーザーデータ例
const mockDatas = Data.datas;

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
  {
    key: 'phone',
    label: '電話',
  },
  {
    key: 'address',
    label: '都道府県',
  },
  {
    key: 'birth',
    label: '生年月日',
  },
  {
    key: 'random',
    label: 'ランダム',
    minWidth: 200,
    maxWidth: 320,
  },
];

const ResultNone = () => {
  return (
    <Box display='flex' justifyContent='center' sx={{ p: 3, width: '100%' }}>
      <Box sx={{ textAlign: 'center' }}>検索結果はありませんでした</Box>
    </Box>
  );
};

// PropType = {
//   searched?: any;
//   initialRows?: any;
//   setRows?: any;
//   setSearched?: any;
//   id?: string;
//   label?: string;
// }

export const OnTableFilterMock = () => {
  // テーブルの行
  const [rowsData, setRowsData] = useState([...mockDatas]);
  // 検索バーに入力された文字
  const [searchedData, setSearchedData] = useState('');

  // // PageNation
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const handleChangePage = (_event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };
  // const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // 検索文字によってテーブルの行をフィルター
  const requestSearch = (searchedVal: string) => {
    const filteredRows = mockDatas.filter((row: { mail: string }) => {
      return row.mail.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRowsData(filteredRows);
  };

  // 検索バーの文字が変化したときにフィルターを実行する関数
  const changeSearchedHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchedData(event.target.value);
    requestSearch(event.target.value);
  };

  return (
    <>
      {/* <CustomTableContainer maxHeightValue={maxheight ? '100%' : 480}> */}
      <CustomTableContainer>
        {/* <Search
          initialRows={columns} // テーブルデータ
          setRows={setRowsData} // 検索対象
          searched={searchedData} // 検索結果
          setSearched={setSearchedData} // トリガー
          id='2'
          label='検索'
        /> */}
        <TextField
          id=''
          label=''
          value={searchedData}
          onChange={(event) => {
            return changeSearchedHandler(event);
          }}
          variant='outlined'
          sx={{ width: '100%' }}
        />
        <CustomTable aria-label='table-aria-name'>
          {/* Table Heading */}
          <CustomTableHeader>
            {columns.map((column) => (
              <CustomTableCell key={column.key} align={column.align}>
                {column.label}
              </CustomTableCell>
            ))}
          </CustomTableHeader>

          {/* Table Body */}
          {rowsData.length < 1 ? (
            ResultNone()
          ) : (
            <TableBody>
              {mockDatas
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data: any) => (
                  <CustomTableRow key={data.id}>
                    {columns.map((column) => {
                      const value = data[column.key];
                      return (
                        <CustomTableCell key={column.key} align={column.align}>
                          {value}
                        </CustomTableCell>
                      );
                    })}
                  </CustomTableRow>
                ))}
            </TableBody>
          )}
        </CustomTable>
      </CustomTableContainer>
      {/* <Box mb={4} pr={2}>
        <TablePagination
          rowsPerPageOptions={[10, 30, 50, 100]}
          component='div'
          count={mockDatas.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={'表示行数'}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box> */}
    </>
  );
};

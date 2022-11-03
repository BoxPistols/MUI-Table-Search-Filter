import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/material'
import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

// 検索バーのコンポーネント
export const Search = (props: {
  searched?: any;
  initialRows?: any;
  setRows?: any;
  setSearched?: any;
}) => {

  const { searched, initialRows, setRows, setSearched } = props;
  // 検索文字によってテーブルの行をフィルター関数

  const requestSearch = (searchedVal: string) => {
    const filteredRows = initialRows.filter((row: { name: string }) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  // 検索バーの文字が変化したときにフィルターを実行する関数
  const changeSearchedHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearched(event.target.value);
    requestSearch(event.target.value);
  };

  return (
    <Stack flexDirection={'row'} alignItems='center' mb={2}>
      <SearchIcon />
      <TextField
        id='standard-basic'
        label='Search'
        variant='standard'
        value={searched}
        onChange={(event) => changeSearchedHandler(event)}
      />
    </Stack>
  );
};

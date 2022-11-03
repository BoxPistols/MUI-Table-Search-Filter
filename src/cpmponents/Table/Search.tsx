// 検索機能用コンポーネント
import { ChangeEvent } from 'react';
import { Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// 検索バーのコンポーネント
export const Search = (props: {
  searched?: any;
  initialRows?: any;
  setRows?: any;
  setSearched?: any;
  id?: string;
  label?: string;
}) => {
  const { searched, initialRows, setRows, setSearched, id, label } = props;

  // 検索文字によってテーブルの行をフィルター
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
        id={id}
        label={label}
        value={searched}
        onChange={(event) => changeSearchedHandler(event)}
        variant='outlined'
      />
    </Stack>
  );
};

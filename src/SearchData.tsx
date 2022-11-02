import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

// 検索バーのコンポーネント
export const SearchData = (props) => {
  const { searched, initialRows, setRows, setSearched } = props;

  // 検索文字によってテーブルの行をフィルター関数
  const requestSearch = (searchedVal) => {
    const filteredRows = initialRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  // 検索バーの文字が変化したときにフィルターを実行する関数
  const changeSearchedHandler = (event) => {
    setSearched(event.target.value);
    requestSearch(event.target.value);
  };

  return (
    <div>
      <SearchIcon />
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        value={searched}
        onChange={(event) => changeSearchedHandler(event)}
      />
    </div>
  );
};

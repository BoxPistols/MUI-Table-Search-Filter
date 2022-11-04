// 表示イメージチェック用UIモック
// FIXME: to const
import BoxContent from '@./components/Box/BoxContent';
import {
  Button,
  FormGroup,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC, VFC } from 'react';

type Props = Partial<{
  mockTextTitle: string;
  mockTextBody: string;
}>;

export const MockForms = (props: { formId: string }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={10} lg={8}>
          <FormGroup>
            <InputLabel htmlFor={props.formId}>ダミーラベル</InputLabel>
            <TextField id={props.formId} placeholder='Dummy' size='small' />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};

// 表示イメージチェック用フォームグループ
export const MockFormGroup = () => {
  return (
    <>
      <Stack direction='column' spacing={2}>
        <Typography variant='h4'>入力グループイメージ</Typography>
        <Stack direction='column' spacing={2}>
          <MockForms formId='form-1' />
          <MockForms formId='form-2' />
          <MockForms formId='form-3' />
        </Stack>
      </Stack>
    </>
  );
};

// テキスト表示用UIモック
export const MockText: VFC<Props> = ({ mockTextTitle, mockTextBody }) => {
  return (
    <>
      <Typography variant='h5'>{mockTextTitle}</Typography>
      <Typography>
        {mockTextBody
          ? mockTextBody
          : 'ダミーテキスト Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ducimus quasi rerum saepe vero suscipit iure obcaecati, tenetur perspiciatis maxime et repellat quia culpa officiis placeat ut nesciunt nobis, consequuntur quaerat laboriosam! Ad quae cupiditate voluptatem amet cumque recusandae enim laborum, hic alias! Animi laudantium quo veniam pariatur itaque deleniti.'}
      </Typography>
    </>
  );
};

// 表示イメージチェック用セット
export const MockButtonSet = () => {
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Stack direction='row' spacing={3}>
          <Button variant='outlined' color='secondary'>
            キャンセルする
          </Button>
          <Button variant='contained'>設定を保存する</Button>
        </Stack>
      </Grid>
    </>
  );
};

export const DesignMockFormGroup: FC = () => {
  return (
    <>
      <BoxContent>
        <MockFormGroup />
      </BoxContent>

      <BoxContent>
        <MockButtonSet />
      </BoxContent>
    </>
  );
};

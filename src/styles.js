import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  typography: {
     textAlign: 'center',
     fontFamily: 'Helvetica',
     fontSize: '14',
     fontWeightLight: '300',
     fontWeightRegular: '400',
     fontWeightMedium: '500'
   },
  form: {
    margin:'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSubmit: {
    height: '56px'
  },
}));
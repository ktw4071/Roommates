import { useState } from 'react'; 
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from './components/drawer/Drawer';
import Home from './components/home/Home';
import Footer from './components/misc/Footer';
import Login from './components/login/Login';
import NotFound from './components/misc/NotFound';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [darkState, setDarkState] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const handleUserLogin = () => {
    setIsLogin(!isLogin);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));

  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
            <Drawer open={isLogin} handleThemeChange={handleThemeChange} darkState={darkState}/>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login handleUserLogin={handleUserLogin} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/" exact>
                        <h1>Добро пожаловать!</h1>
                        <a href="/login">Войти</a> | <a href="/register">Зарегистрироваться</a>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
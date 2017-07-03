import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import ToDoList from './components/todo_list';
import ToDoUpdate from './components/todo_update';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/todo/new" component={ToDoUpdate} />
                  <Route path="/todo/:id" component={ToDoUpdate} />
                  <Route path="/"         component={ToDoList} />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

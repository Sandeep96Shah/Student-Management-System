import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import FrontPage from '../pages/FrontPage';
import Teacher from '../pages/Teacher';
import Student from '../pages/Student';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {
  return (
    <div>
      <Router>
        {/* <Route exact path="/" component={ () => <FrontPage /> } /> */}
        <Switch>
          <Route exact path="/" component={ () => <FrontPage /> } />
          {/* <Route exact path="/sign_up" component={() =>  <SignUp title={"SignUp Form"} /> }/>
          <Route exact path="/teacher_sign_in" component={() =>  <SignIn title={"Teacher SignIn"} /> }/>
          <Route exact path="/student_sign_in" component={() =>  <SignIn title={"Student SignIn"} /> }/>
          <Route exact path="/student" component={() =>  <Student /> }/>                        */}
          <Route exact path="/sign_up" component={() =>  <SignUp title={"SignUp Form"} /> }/>
          <Route exact path="/teacher_sign_in" component={() =>  <SignIn title={"Teacher SignIn"} role={"teacher"} /> }/>
          <Route exact path="/student_sign_in" component={() =>  <SignIn title={"Student SignIn"} role={"student"} /> }/>
          <Route exact path="/student" component={() =>  <Student /> }/>
          <Route exact path="/teacher" component={() =>  <Teacher /> }/>            
        </Switch>
      </Router>
    </div>
  );
}

export default App;

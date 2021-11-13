import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Landing from "./pages/Landing";
import ChooseUser from "./pages/ChooseUser";
import LogInUser from "./pages/LogInUser";
import LogInGuest from "./pages/LogInGuest";
import SignUpModal from "./pages/SignUpModal";
import Analytics from "./pages/Analytics.jsx";
import Notification from "./pages/Notification";
import Discussion from "./pages/Discussion.jsx";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import Grades from "./pages/Grades";
import Archives from "./pages/Archives";
import ViewDiscussion from "./pages/ViewDiscussion";
import ViewDiscussionSet from "./pages/ViewDiscussionSet";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Landing />
          {/* <Discussion /> */}
        </Route>
        <Route  path="/sign-up">
          <ChooseUser />
        </Route>

        <Route  path="/sign-as-user">
          <SignUpModal />
        </Route>

        <Route  path="/sign-as-guest">
          <LogInGuest />
        </Route>

        <Route  path="/log-in">
          <LogInUser />
        </Route>
        <Route  path="/discussions">
          <Discussion />
        </Route>
        <Route  path="/discussion/:id">
          <ViewDiscussion />
        </Route>
        <Route  path="/discussion-set">
          <ViewDiscussionSet />
        </Route>
        <Route  path="/notifications">
          <Notification />
        </Route>
        <Route  path="/analytics">
          <Analytics />
        </Route>
        <Route  path="/charts">
          <Analytics />
        </Route>
        <Route  path="/calendar">
          <Analytics />
        </Route>
        <Route  path="/grades">
          <Grades />
        </Route>
        <Route  path="/contact">
          <Contact />
        </Route>
        <Route  path="/settings">
          <Settings />
        </Route>
        <Route  path="/archives">
          <Archives />
        </Route>
        <Route  path="/">
          <Archives />
        </Route>
      </Switch> 
    </Router>
  );
};

export default App;

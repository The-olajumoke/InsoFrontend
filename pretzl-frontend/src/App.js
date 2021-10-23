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
        <Route exact path="/sign-up">
          <ChooseUser />
        </Route>

        <Route exact path="/sign-as-user">
          <SignUpModal />
        </Route>

        <Route exact path="/sign-as-guest">
          <LogInGuest />
        </Route>

        <Route exact path="/log-in">
          <LogInUser />
        </Route>
        <Route exact path="/discussions">
          <Discussion />
        </Route>
        <Route exact path="/discussion/:id">
          <ViewDiscussion />
        </Route>
        <Route exact path="/discussion-set">
          <ViewDiscussionSet />
        </Route>
        <Route exact path="/notifications">
          <Notification />
        </Route>
        <Route exact path="/analytics">
          <Analytics />
        </Route>
        <Route exact path="/charts">
          <Analytics />
        </Route>
        <Route exact path="/calendar">
          <Analytics />
        </Route>
        <Route exact path="/grades">
          <Grades />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/archives">
          <Archives />
        </Route>
        <Route exact path="/">
          <Archives />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

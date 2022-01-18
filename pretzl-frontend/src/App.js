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
// import Charts from "./components/Analytics/Charts";
import EditDisModal from "./components/Discussion/EditDisModal";


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Landing />
          {/* <EditDisModal/> */}
        </Route>
        <Route path="/sign-up">
          <ChooseUser />
        </Route>

        <Route path="/sign-as-user">
          <SignUpModal />
        </Route>

        <Route path="/sign-as-guest">
          <LogInGuest />
        </Route>

        <Route path="/log-in">
          <LogInUser />
        </Route>
        <Route path="/discussions">
          <Discussion />
        </Route>
        <Route path="/discussion/:code">
          <ViewDiscussion />
        </Route>
        <Route path="/discussion-set/:setId">
          <ViewDiscussionSet />
        </Route>
        <Route path="/notifications">
          <Notification />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
        <Route path="/charts">
          <Analytics />
        </Route>
        <Route path="/calendar">
          <Analytics />
        </Route>
        <Route path="/grades">
          <Grades />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/archives">
          <Archives />
        </Route>
        <Route path="/">
          <Archives />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

// Hi everyone, i am** The_olajumoke** and i am a front-end developer(React.js). Vs code  is a free, powerful, lightweight code editor for Windows, macOS and Linux and  I'm going to be sharing Vs code extensions that help me effectively carry out projects.

// ### **Mithril Emmet**
// Emmet is a very useful extension for web developers,  you can easily create your markup by writing in abbreviations that would expand into code snippets. It is known for greatly improving HTML and CSS workflow as it enables high speed coding and editing.
// ![Screenshot 2022-01-12 123129.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642024924116/JXVQpXei7.jpeg)

// ### **Live Server**
// Live server helps in solving the issue of having to go back and forth in seeing changes on your site. With the  live-server extension, this process is automated for you. 
// A local development server is created for you where you can automatically see your changes in VSCode.

// ![live server.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642026919216/dyYCxrz-T.jpeg)

// ### **Bracket Pair Colorizer**
// Bracket Pair Colorizer saves you the stress of searching for the opening and closing brackets. It makes it easy to identify each set of brackets by giving the same colors to your opening and closing bracket.
// ![bracket colorizer.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642025006691/NGiuiI1ib.jpeg)

// ### **Live Share**
// Live Share quickly helps developers collaborate on projects without having to sync or clone code or  even configure the same settings. You are able to share your code , edit and debug with your team or colleagues.


// ![live share.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642027090852/Ev8NhUyPh.jpeg)

// ### **ESLint**
// ESLint is an extension that helps developers write clean code. it has the goal of making code more consistent and avoiding bugs. It has a list of lining rules that runs through the project to find errors or problematic patterns, which then alerts the developer of these errors.

// ![Es lint.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642027221323/DajQMo71L.jpeg)

// ### **Prettier - Code formatter**
// Prettier is widely used by developers because it helps in reformating your code to ensure consistent rules are being followed for spacing, semicolons, single quotes/double quotes, etc. It enforces a consistent style for your code and makes coding more defined.

// ![prettier.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642025168435/6Bgk3cpYw.jpeg)

// ### **Tailwind CSS IntelliSense**
// Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and lining.

// ![Tailwind.css.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642025226735/pHrboXbeo.jpeg)

// ### **Auto Rename Tag**
// As the name implies, it helps you automatically rename the opening or closing tag without having to go all the way down or up searching for the same tag to rename.

// ![auto rename.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1642028556130/ySzeVXq0f.jpeg)


// With these extensions, web development becomes easy, structured and more consistent. Installing these tools support your development workflow and helps you become a better developer. Feel free to comment on your best Vs code extension so far.
import CurrentUserLoader from "./components/CurrentUserLoader";
import UserInfo from "./components/people/UserInfo";

const App = () => {
    return (
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
    );
};

export default App;
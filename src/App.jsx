import CurrentUserLoader from "./components/CurrentUserLoader";
import UserInfo from "./components/people/UserInfo";
import {UserLoader} from "./components/UserLoader";

const App = () => {
    return (
        <>
            <UserLoader userId="123">
                <UserInfo/>
            </UserLoader>
            <UserLoader userId="234">
                <UserInfo/>
            </UserLoader>
            <UserLoader userId="345">
                <UserInfo/>
            </UserLoader>
        </>
    );
};

export default App;
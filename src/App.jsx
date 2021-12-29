import CurrentUserLoader from "./components/CurrentUserLoader";
import UserInfo from "./components/people/UserInfo";
import {UserLoader} from "./components/UserLoader";
import {ResourceLoader} from "./components/ResourceLoader";
import ProductInfo from "./components/products/ProductInfo";
import {DataSource} from "./components/DataSource";
import axios from "axios";

const getSingleUserUrl = "http://localhost:3333/users/123";
const getSingleProductUrl = "http://localhost:3333/products/1";

const getServerData = async () => {
    const response = await axios.get(getSingleUserUrl);
    return response.data;
}

const getLocalStorage = key => () => {
    return localStorage.getItem(key);
}

const Text = ({ message })  => <h1>{message}</h1>;

const App = () => {
    return (
        <>
            {/*<DataSource resourceName="user" getDataFunc={getServerData} >*/}
            {/*    <UserInfo />*/}
            {/*</DataSource>*/}
            <DataSource getDataFunc={getLocalStorage('message')} resourceName="message">
                <Text />
            </DataSource>
           {/*<ResourceLoader resourceUrl={getSingleUserUrl} resourceName="user">*/}
           {/*     <UserInfo />*/}
           {/*</ResourceLoader>*/}
           {/* <ResourceLoader resourceUrl={getSingleProductUrl} resourceName="product">*/}
           {/*     <ProductInfo />*/}
           {/* </ResourceLoader>*/}
        </>
    );
};

export default App;
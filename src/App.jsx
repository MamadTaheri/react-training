import CurrentUserLoader from "./components/CurrentUserLoader";
import UserInfo from "./components/people/UserInfo";
import {UserLoader} from "./components/UserLoader";
import {ResourceLoader} from "./components/ResourceLoader";
import ProductInfo from "./components/products/ProductInfo";

const App = () => {
    return (
        <>
           {/*<ResourceLoader resourceUrl="http://localhost:3333/users/123" resourceName="user">*/}
           {/*     <UserInfo />*/}
           {/*</ResourceLoader>*/}
            <ResourceLoader resourceUrl="http://localhost:3333/products/1" resourceName="product">
                <ProductInfo />
            </ResourceLoader>
        </>
    );
};

export default App;
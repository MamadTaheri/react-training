import {people} from "./data/people";
import {products} from "./data/products";
import RegularList from "./components/RegularList";
import SmallpersonListItem from "./components/people/SmallpersonListItem";
import LargePersonListItem from "./components/people/LargePersonListItem";

const App = () => {
    return (
        <>
            <RegularList
                items={people}
                resourceName="person"
                itemComponent={SmallpersonListItem}
            />
            <p>********************************************************</p>
            <RegularList
                items={people}
                resourceName="person"
                itemComponent={LargePersonListItem}
            />

        </>
    );
};

export default App;
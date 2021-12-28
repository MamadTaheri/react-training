import {people} from "./data/people";
import {products} from "./data/products";
import RegularList from "./components/RegularList";
import SmallpersonListItem from "./components/people/SmallpersonListItem";
import LargePersonListItem from "./components/people/LargePersonListItem";
import SmallProductListItem from "./components/products/SmallProductListItem";
import NumberedList from "./components/NumberedList";
import LargeProductListItem from "./components/products/LargeProductListItem";
import Modal from "./components/Modal";

const App = () => {
    return (
        <>
            <Modal>
                <LargeProductListItem product={products[0]} />
            </Modal>


            <RegularList
                items={people}
                resourceName="person"
                itemComponent={SmallpersonListItem}
            />
            <p>********************************************************</p>
            <NumberedList
                items={people}
                resourceName="person"
                itemComponent={LargePersonListItem}
            />
            <p>********************************************************</p>
            <RegularList
                items={products}
                resourceName="product"
                itemComponent={SmallProductListItem}
                />
            <p>********************************************************</p>
            <NumberedList
                items={products}
                resourceName="product"
                itemComponent={LargeProductListItem}
            />
        </>
    );
};

export default App;
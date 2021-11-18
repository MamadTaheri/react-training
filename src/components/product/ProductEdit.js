import React, {useState} from 'react';

const ProductEdit = ({info, save, cancel}) => {
    const [title, setTitle] = useState(info.title);
    const [price, setPrice] = useState(info.price);

    const saveItem = () => {
        let item = {}
        if (info.editMode) {
            item = {id: info.id, title, price, editMode: false};
        } else {
            item = {id: 120, title, price, editMode: false};
            setTitle('');
            setPrice('');
        }
        save(item);
    }

    return (
        <div className="col-md-4 my-3">
            <div className="card bg-info text-white">
                <div className="card-header">
                    {info.editMode ? "Edit Item" : "Add new Item"}
                </div>
                <div className="card-body">
                    <div className="mb-2">
                        Title:
                        <input name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        Price:
                        <input name="price" value={price}
                               onChange={e => setPrice(parseInt(e.target.value))}/>
                    </div>
                    <button className="btn btn-success btn-sm mx-3" onClick={saveItem}>Save</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => cancel(info.id, false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ProductEdit;
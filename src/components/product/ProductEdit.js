import React, {useState} from 'react';

const ProductEdit = ({info,save, cancel}) => {
    const [title, setTitle] = useState(info.title);
    const [price, setPrice] = useState(info.price);

    const saveItem = () => {
        const newItem = {id:info.id, title, price, editMode:false};
        save(newItem);
    }

    return (
        <div className="col-md-4">
            <div className="card bg-info text-white">
                <div className="card-body">
                    <div className="mb-2">
                        Title:
                        <input name="title" defaultValue={info.title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        Price:
                        <input name="price" defaultValue={info.price} onChange={e => setPrice(parseInt(e.target.value))}/>
                    </div>
                    <button className="btn btn-success btn-sm mx-3" onClick={saveItem}>Save</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => cancel(info.id, false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ProductEdit;
import React, {useEffect, useState} from 'react';

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.clear();
            console.log(checked ? "Yes, checked" : "No, not checked");
        }
        ,);

    return (
        <div className="border border-primary">
            <input
                type="checkbox"
                value={checked}
                onChange={() => setChecked(checked => !checked)}
            />
            <h5 className={checked ? "text-success" : "text-danger"}>
                {checked ? "checked" : "not checked"}
            </h5>
        </div>
    );


};

export default Checkbox;
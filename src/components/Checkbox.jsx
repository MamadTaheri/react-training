import React, {useEffect, useRef, useState} from 'react';

const Checkbox = () => {
    const [checked, setChecked] = useState(false);
    const txtInputRef = useRef();

    useEffect(() => {
            console.log(checked ? "Yes, checked" : "No, not checked");
            localStorage.setItem("check-box", checked);
            txtInputRef.current.focus();
    },[]);

    return (
        <div className="border border-primary">
            <input
                type="checkbox"
                value={checked}
                ref={txtInputRef}
                onChange={() => setChecked(checked => !checked)}
            />
            <h5 className={checked ? "text-success" : "text-danger"}>
                {checked ? "checked" : "not checked"}
            </h5>
        </div>
    );


};

export default Checkbox;
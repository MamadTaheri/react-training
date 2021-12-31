import React from 'react';
import withEditableUser from "./withEditableUser";

export const UserInfoform = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {} ;

    return user ? (
        <>
            <label>
                Name:
                <input value={name} type="text" onChange={e => onChangeUser({ name: e.target.value })} />
            </label>
            <label>
                Age:
                <input value={age} type="number" onChange={e => onChangeUser({ age: Number(e.target.value) })} />
            </label>
            <label>
                Hair Color:
                <input value={hairColor} type="text" onChange={e => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <button onClick={onResetUser}>reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    ) : <p>Loading...</p>;
}, `123`);

import React, {useEffect, useState} from 'react';
import axios from "axios";

const withEditableUser = (Component, userid) => {
     return props => {
         const [originaluser, setOriginalUser] = useState(null);
         const [user, setUser] = useState(null);

         useEffect(() => {
             (async () => {
                 const response = await axios.get(`http://localhost:3333/users/${userid}`);
                 setOriginalUser(response.data);
                 setUser(response.data);
             })();
         }, []);

         const onChangeUser = changes => {
             setUser({ ...user, ...changes });
         }

         const onSaveUser = async () => {
             const response = await axios.post(`http://localhost:3333/users/${userid}`, { user });
             setOriginalUser(response.data);
             setUser(response.data);
         }

         const onResetUser = () => {
             setUser(originaluser);
         }

         return <Component {...props}
                   user={user}
                   onChangeUser={onChangeUser}
                   onSaveUser={onSaveUser}
                   onResetUser={onResetUser}
                />
     }
};

export default withEditableUser;
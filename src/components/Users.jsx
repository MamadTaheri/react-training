import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersAction';

const Users = () => {

    const dispatch = useDispatch();
    const { loading, users, error } = useSelector(state => state.usersState);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (
        <div>
            {
                loading 
                ? 
                    (<h2>Loading...</h2>)
                :
                error 
                ?
                    (<p>{error}</p>)
                :
                users.map(user => <p key={user.id} >{user.name}</p>)
            }
        </div>
    );
};

export default Users;
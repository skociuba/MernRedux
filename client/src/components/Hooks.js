import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../actions/Actions';
import Display from './Display';

const Hooks = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch (getUsers());
  }, [dispatch])

  return (
    <>
    <h2>HOOK METHOD</h2>
      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user) => (
        <Display key={user._id} user={user} />
      ))}
    </>
  )
}

export default Hooks;
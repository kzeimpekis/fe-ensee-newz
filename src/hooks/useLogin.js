import { getUsers } from '../api';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useLogin = (usernameInput) => {
  const { setUsername, isLoggedIn, setIsLoggedIn, setLoginFailure } =
    useContext(UserContext);

  const handleLogin = () => {
    getUsers().then((usersList) => {
        usersList.forEach((user) => {
          if (user.username === usernameInput) {
            setIsLoggedIn(true);
            setUsername(usernameInput);
          } else {
            setLoginFailure(true);
          }
        });
      })
  };

  const handleLogout = () => {
      setLoginFailure(false);
      setIsLoggedIn(false);
      setUsername('');
  };

  return { isLoggedIn, handleLogin, handleLogout };
};
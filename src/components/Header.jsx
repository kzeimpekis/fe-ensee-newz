import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useLogin';
import { UserContext } from '../contexts/UserContext';
import { useContext, useState } from "react";

const Header = () => {

  const [usernameSearch, setUsernameSearch] = useState('');
  const { isLoggedIn, handleLogin, handleLogout } = useLogin(usernameSearch);
  const { username, loginFailure } = useContext(UserContext);

  const handleLoginForm = (event) => {
    event.preventDefault();
    handleLogin();
    setUsernameSearch('');
  };

  const handleUsernameChange = (event) => {
    setUsernameSearch(event.target.value);
  };

  return (
    <div className="header-background">
    <header className="header">
      <Link to='/articles' className='link header__link' >
        <h1 className='header__title'>EnSee-NewZ</h1>
      </Link>
      {isLoggedIn ? (
          <div className='header__user'>
            <p className='user__username'>{username}</p>
            <button className='user__signout' onClick={handleLogout}>Sign out</button>
          </div>
        ) : (
          <form className='header__login' onSubmit={handleLoginForm}>
            <input
              type='text'
              placeholder={loginFailure ? 'Invalid username' : 'Username'}
              id='username'
              value={usernameSearch}
              onChange={handleUsernameChange}>
            </input>
            <label
              htmlFor='username'
              className='login__text'
              type='submit'
              onClick={handleLoginForm}>
              Login
            </label>
          </form>
        )}
    </header>
    </div>
  );
};
  
  export default Header;
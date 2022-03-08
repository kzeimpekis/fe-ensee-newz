import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header-background">
      <header className="header">
        <Link to='/articles' className='link header__link' >
          <h1 className='header__title' onClick={() => window.location.href="/articles"}>EnSee-NewZ</h1>
        </Link>
        <form className='header__login'>
            <input type='text' id='username' placeholder="username"></input>
            <label htmlFor='username' className='login__text' type='submit'>Login</label>
        </form>
      </header>
      </div>
    );
  };
  
  export default Header;
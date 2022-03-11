import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='error404'>
      <h1>404: Page not found.</h1>
      <p>Sorry, wrong URL!</p>
      <Link to={"/"}>
        <button>We need to get BACK!</button>
      </Link>
    </div>
  );
};

export default Error404;
import { Link } from 'react-router-dom';

const Error500 = () => {
  return (
    <div className='error500'>
      <h1>500: Internal Server Error</h1>
      <p>Sorry, something went wrong!</p>
      <Link to={"/"}>
        <button>We need to get BACK!</button>
      </Link>
    </div>
  );
};

export default Error500;
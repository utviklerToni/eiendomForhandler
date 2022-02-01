import Card from '../../shared/Components/UIElements/Card';
import './Sign.css';
// import { Link } from 'react-dom';

const Register = () => {
  return (
    <div className='container'>
      <div className='welcome'>
        <h1>Welcome_</h1>
      </div>
      <Card>
        <form action=''>
          <h3>Username</h3>
          <input type='text' placeholder='username' />

          <h3>email</h3>
          <input type='email' name='' id='' placeholder='email' />

          <h3>password</h3>
          <input type='password' placeholder='password' />

          <input type='submit' value='Register' className='myBtn' />
          <br />
          <br />
          <p>
            Already registered? <br />
            sign in here
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Register;

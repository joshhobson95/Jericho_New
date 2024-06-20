import { useState, useContext } from 'react';
import axios from 'axios';
import './LoginPage.css';
import Swal from 'sweetalert2';
import AuthContext from '../../../store/authContext';

const SignUp = () => {
  const authCtx = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    const url = 'https://jericho-new-test-rich-text.onrender.com';
    axios
      .post(`${url}/register`, body) // Change to register endpoint
      .then((res) => {
        console.log('AFTER AUTH', res.data);
        // You might want to handle successful registration differently,
        // for example, by redirecting to a different page or displaying a success message.
        // For now, I'm displaying a success message using Swal.
        Swal.fire({
          title: 'Registration Successful',
          confirmButtonColor: 'rgb(210, 161, 12)',
          customClass: 'buttonalert',
          confirmButtonText: 'Thanks',
        });
      })
      .catch((error) => {
        setUsername('');
        setPassword('');
        console.log('ERROR', error);
        Swal.fire({
          title: 'Registration Failed',
          text: 'Please try again later.',
          icon: 'error',
          confirmButtonColor: 'red',
          customClass: 'buttonalert',
          confirmButtonText: 'Ok',
        });
      });
  };

  return (
    <div className="loginpage">
      <main className="loginform">
        <form className="form-auth-form" onSubmit={submitHandler}>
          <h1 className="login_header">Register</h1>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <button className="form-btn">Register</button>
        </form>
      </main>
    </div>
  );
};

export default SignUp;

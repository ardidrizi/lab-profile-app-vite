import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();
  console.log(history);

  const handleSignUp = () => {
    history.push('/signup');
  };

  const handleLogIn = () => {
    history.push('/login');
  };

  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button>
    </div>
  );
};

export default HomePage;

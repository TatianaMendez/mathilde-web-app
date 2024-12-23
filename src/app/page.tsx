import './styles/styleAtoms.css';
// import LoginForm from './components/pages/auth/LoginForm';
import RegisterForm from './components/pages/auth/RegisterForm';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  );
}

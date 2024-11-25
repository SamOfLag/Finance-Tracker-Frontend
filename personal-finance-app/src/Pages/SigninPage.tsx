import React, { useState } from 'react';
import styles from '../Styles/SignupPage.module.css';
import TextInput from '../Components/TextInput';
import PasswordInput from '../Components/PasswordInput';
import { FaChartLine, FaPiggyBank, FaWallet, FaClipboardCheck, FaChartPie, FaGoogle, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signin } from '../APIs/authAPI';

const SigninPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string | null>>({
    // username: null,
    // email: null,
    // password: null,
    // confirmPassword: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      setIsLoading(true);
      await signin({
        email: formData.email,
        password: formData.password,
      });
      // navigate('/dashboard')

    } catch (error) {
        const e = error as Error; // Type assertion
        setErrors({ email: e.message }); // Safely access message after type assertion
      } finally {
        setIsLoading(false);
      }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
              error={errors.email}
            />
            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Must be 8+ characters"
              error={errors.password}
            />
            <button className={styles.signupButton} type="submit">
              Sign In
            </button>
          </form>

          {/* <div className={styles.socialLoginContainer}>
            <button className={styles.socialButton}>
              <FaGoogle className={styles.socialIcon} />
              Sign Up with Google
            </button>
            <button className={styles.socialButton}>
              <FaApple className={styles.socialIcon} />
              Sign Up with Apple
            </button>
          </div> */}

          <p className={styles.prompt}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
       
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.iconIllustrations}>
            <FaChartLine className={styles.icon} title="Track Your Finances" />
            <FaPiggyBank className={styles.icon} title="Save Money" />
            <FaWallet className={styles.icon} title="Budgeting Made Easy" />
            <FaClipboardCheck className={styles.icon} title="Track Transactions" />
            <FaChartPie className={styles.icon} title="View Analytics" />
          </div>
          <ul>
            <li>Manage your finances</li>
            <li>Track transactions</li>
            <li>Create budgets</li>
            <li>Achieve saving goals</li>
            <li>View analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;

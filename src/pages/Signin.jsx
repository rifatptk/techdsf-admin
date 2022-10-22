import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/auth/authSlice';
import bg from '../images/bg.png';

const Signin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <div className="signin">
      <div className="w-full h-screen flex">
        {/* left */}
        <div className="flex-1">
          <img src={bg} alt="" className="w-full h-full" />
        </div>

        {/* right */}
        <div className="flex-1 border grid place-items-center p-10">
          <div className="text-theme-black">
            <div className="text-center mb-[50px]">
              <h1 className="text-[28px] font-semibold mb-[15px]">TechDSF</h1>
              <p className="text-[14px] font-bold text-theme-black/60">
                Welcome back! Please login to your account.
              </p>
            </div>
            <form onSubmit={submitHandler} className="space-y-10">
              <input
                type="text"
                required
                placeholder="Username"
                autoComplete="new-password"
                className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
                name="username"
                onChange={handleChange}
                value={state.username}
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
                name="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={state.password}
              />
              <div className="flex justify-between space-x-2 text-[14px]">
                <div className="flex items-center space-x-[15px]">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-[18px] h-[18px]"
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div>Forgot Password</div>
              </div>
              {/* buttons */}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="w-[185px] h-[50px] grid place-items-center bg-theme-blue text-white rounded-[6px] hover:bg-theme-blue/90 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="w-[185px] h-[50px] grid place-items-center border border-theme-gray rounded-[6px] hover:bg-theme-lightgray transition-colors"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <p className="text-[12px] text-theme-black/80 mt-auto cursor-pointer">
            Term of use. Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;

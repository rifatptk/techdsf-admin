import { useNavigate } from 'react-router-dom';
import bg from '../images/bg.png';

const Signup = () => {
  const navigate = useNavigate();
  const dummyHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signin">
      <div className="w-full h-full flex">
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
            <form className="space-y-10">
              <div className="flex justify-between space-x-[20px]">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
                />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
              />
              <input
                type="text"
                placeholder="email"
                className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-[10px] border-b-[2px] text-[14px] focus:outline-theme-blue/75"
              />

              <div className="flex items-center space-x-[15px] text-[14px]">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-[18px] h-[18px]"
                />
                <label htmlFor="remember">
                  I agree with terms and conditions
                </label>
              </div>
              {/* buttons */}

              <button
                onClick={dummyHandler}
                className="w-[185px] mx-auto h-[50px] grid place-items-center bg-theme-blue text-white rounded-[6px] hover:bg-theme-blue/90 transition-colors"
              >
                Sign up
              </button>

              <p className="text-[18px] text-center text-theme-black/80">
                Already have an account?{' '}
                <span
                  onClick={() => navigate('/signin')}
                  className="font-medium text-theme-black cursor-pointer hover:border-b-2 border-b-theme-blue "
                >
                  Sign in.
                </span>
              </p>
            </form>
          </div>
          <p className="text-[12px] text-theme-black/80 mt-10 cursor-pointer">
            Term of use. Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

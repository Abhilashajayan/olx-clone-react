import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/authContext';


const Login = () => {

        const [email, setEmail] = useState(" ");
        const [password, setPassword] = useState(" ");
        const [error, setError] = useState('');
        const {user, login} = UserAuth();
        const navigate = useNavigate();

        
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 
        try {
          await login(email, password); 
          navigate('/');
        } catch (error) {
          setError("Invalid Credentials");
        }
    }
  return (
    <>
    <div className="min-h-screen  bg-gray-200 flex items-center justify-center">
      <div className="container bg-gray-100 p-12 rounded-md w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
        <div className="flex justify-center mb-5">
        <svg width="60px" height="60px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-lquEm" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-200 p-3 mb-4 rounded-md"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-200 p-3 mb-4 rounded-md"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
           <p className="text-red-500 text-xs italic text-center">{error}</p>

           <button
              className="bg-black text-white px-4 py-2 mt-5 rounded-md"onClick={handleSubmit}>Sign In </button>
        </div>
      </div>
    </div>
  </>
  )
}


export default Login;
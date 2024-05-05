import React from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import useSignup from '../../hooks/useSignup';


const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confrimPassword:"",
    gender:"",
  });

  const { loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
          <span className='text-blue-500'> Connect-it</span>
        </h1>  

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='label-text text-green-400 text-lg'>Full Name</span>
            </label>
            <input type='text' placeholder='Chayan Mandal' className='w-full input input-bordered h-10'
             value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='label-text text-green-400 text-lg'>User Name</span>
            </label>
            <input type='text' placeholder='Chayan Mandal' className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text text-green-400 text-lg'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs ({...inputs, password: e.target.value})} 
            /> 
          </div>

          <div>
            <label className='label'>
              <span className='label-text text-green-400 text-lg'>Confrim Password</span>
            </label>
            <input type='password' placeholder='Re-enter Password' className='w-full input input-bordered h-10'
              value={inputs.confrimPassword}
              onChange={(e) => setInputs ({...inputs, confrimPassword: e.target.value})}
            /> 
          </div>
          
          <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />
          
          <Link to={'/login'} className='text-sm text-white hover:underline hover:text-blue-500 mt-2 inline-block'>
            Already have an account? Login 
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 bg-blue-400'disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;






// starter code for any error to solve

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     <h1 className='text-3xl font-semibold text-center text-gray-300'> SignUp
//         <span className='text-blue-500'> Connect-it</span>
//          </h1>  
//             <form>
//                 <div>
//                   <label className='label p-2'>
//                      <span className=' label-text text-green-400 text-lg'>Full Name</span>
//                     </label>
//                     <input type='text' placeholder='Chayan Mandal' className='w-full input input-bordered h-10'/>
//                  </div>

//                  <div>
//                  <label className='label p-2'>
//                      <span className=' label-text text-green-400 text-lg'>User Name</span>
//                     </label>
//                     <input type='text' placeholder='Chayan Mandal' className='w-full input input-bordered h-10'/>
//                  </div>

//                  <div>
//                  <label className='label'>
//                     <span className=' label-text text-green-400 text-lg'>Password</span>
//                 </label>
//                 <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/> 
//                  </div>

                
//                  <div>
//                  <label className='label'>
//                     <span className=' label-text text-green-400 text-lg'>Confrim Password</span>
//                 </label>
//                 <input type='password' placeholder='Re-enter Password' className='w-full input input-bordered h-10'/> 
//                  </div>
                 
                 
//                  <GenderCheckBox/>
                 

//                  <a className='text-sm text-white hover:underline hover:text-blue-500 mt-2 inline-block' href='#'>
//                  Already have an account?
//             </a>

//                 <div>
//                 <button className='btn btn-block btn-sm mt-2 bg-blue-400'>SignUp</button>
//                 </div>
//             </form>
//     </div>
//   </div>;
// };

// export default SignUp;
import React from 'react'

const Login = () => {
  return (
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'> Login
        <span className='text-blue-500'> Connect-it</span>
         </h1>   

         <form>
            <div>
                <label className='label p-2'>
                    <span className=' label-text text-green-400 text-lg'>UserName</span>
                </label>
                <input type='text' placeholder='Enter UserName' className='w-full input input-bordered h-10'/>
            </div>

            <div>
                <label className='label'>
                    <span className=' label-text text-green-400 text-lg'>Password</span>
                </label>
                <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
            </div>

            <a href="#" className='text-sm text-white hover:underline hover:text-blue-500 mt-2 inline-block'>
                {"Don't"} have an account?"
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2 bg-green-300'>Login</button>
            </div>



         </form>
    </div>
  </div>
  );
};
export default Login;



// stater code for any changes to make

// import React from 'react'

// const Login = () => {
//   return (
//   <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'> Login
//         <span className='text-blue-500'> Connect-it</span>
//          </h1>   

//          <form>
//             <div>
//                 <label className='label p-2'>
//                     <span className=' label-text text-green-400 text-lg'>UserName</span>
//                 </label>
//                 <input type='text' placeholder='Enter UserName' className='w-full input input-bordered h-10'/>
//             </div>

//             <div>
//                 <label className='label'>
//                     <span className=' label-text text-green-400 text-lg'>Password</span>
//                 </label>
//                 <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//             </div>

//             <a href="#" className='text-sm text-white hover:underline hover:text-blue-500 mt-2 inline-block'>
//                 {"Don't"} have an account?"
//             </a>

//             <div>
//                 <button className='btn btn-block btn-sm mt-2 bg-green-300'>Login</button>
//             </div>

            

//          </form>
//     </div>
//   </div>
//   );
// };
// export default Login;
const GenderCheckBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
               <label style={{ color: 'white' }} className={'label gap-2 cursor-pointer white-text'}>
                <span style={{ color: 'white' }} className="label-text">Male</span>
                <input type='checkbox'  style={{ color: 'white' }} className="checkbox border-s-slate-900" />
               </label>
            </div>
            <div className="form-control">
            <label style={{ color: 'white' }} className={'label gap-2 cursor-pointer'}>
                <span style={{ color: 'white' }} className="label-text">Female</span>
                <input type='checkbox' style={{ color: 'white' }} className="checkbox border-s-slate-900" />
               </label>
            </div>
        </div>
    );
};
export default GenderCheckBox;






// starter code
// const GenderCheckBox = () => {
//     return (
//         <div className="flex">
//             <div className="form-control">
//                <label style={{ color: 'white' }} className={'label gap-2 cursor-pointer white-text'}>
//                 <span style={{ color: 'white' }} className="label-text">Male</span>
//                 <input type='checkbox'  style={{ color: 'white' }} className="checkbox border-s-slate-900" />
//                </label>
//             </div>
//             <div className="form-control">
//             <label style={{ color: 'white' }} className={'label gap-2 cursor-pointer'}>
//                 <span style={{ color: 'white' }} className="label-text">Female</span>
//                 <input type='checkbox' style={{ color: 'white' }} className="checkbox border-s-slate-900" />
//                </label>
//             </div>
//         </div>
//     );
// };
// export default GenderCheckBox;

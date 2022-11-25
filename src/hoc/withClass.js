import React from "react";

// const withClass = (Component, className) => {
//     return (props) => {
//         return (
//             <div className={className}>
//                 <Component/>
//             </div>
//         )
//     }
// }

// =>

const withClass = (Component, className) => props => <div className={className}><Component props{...props} /></div>

export default withClass
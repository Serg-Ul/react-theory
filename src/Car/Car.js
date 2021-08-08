import React from 'react';

// function Car(props) {
//     return (
//         <div>
//             <h2>{props.caption}</h2>
//         </div>
//     );
// }

// or =>

// const Car = (props) => {
//     return (
//         <div>
//             <h2>{props.caption}</h2>
//         </div>
//     )
// };

// <= or =>

const Car = (props) => (
    <div style={{
        textAlign: 'left',
        margin: '0 auto',
        maxWidth: '780px',
    }}>
        <div style={{
            border: '1px solid black',
            marginTop: '5px',
            padding: '5px'
        }}>
            <h2>Brand: {props.brand}</h2>
            <p>Year: {props.year}</p>
            {props.children}
            <small>
                Distance: <strong>{Math.round(Math.random() * 100000)}</strong>
            </small>
        </div>
    </div>
);

// <= or =>

// export default (props) => (
//     <div>
//         <h2>{props.caption}</h2>
//     </div>
// );

// or =>

export default Car;
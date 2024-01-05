import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello JOZZ</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'div', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello JOZZ!')
    );
};

export default Hello;
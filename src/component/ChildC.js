import React from 'react';

function ChildC(props) {
    console.log(props);
    return (
        <>
            <div>Child C</div>
            {props.todos.map((to, index) =>
                <div key={index}>{to.id} : {to.title} : {to.complete ? 'true': 'false'}</div>
            )}
        </>
    );
}

export default ChildC;
import React from 'react';

const UsingState = () => {
    const [person, setPerson] = React.useState({name: 'Omid', lastName: 'Parsa'});


    return (
        <div className="">
            <h3>{person.name + ' ' + person.lastName}</h3>
            <button onClick={() =>setPerson( (prevState) => ({...prevState, name: 'Alex'}) )}>click to change name</button>
        </div>
    )
};
export default  UsingState;
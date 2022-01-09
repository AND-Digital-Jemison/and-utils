import React, {useState} from 'lib-app/react';

//require('dotenv').config({path: '../.env'});

const App = () => {
    const [msg, setMsg] = useState('');

    const onClick = () => {
        fetch(`${process.env.HOST}:3004/api/test`, {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMsg(response.msg);
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div>
            <div>I'm running from node</div>
            <button onClick={onClick}>Click me to call api</button>
            <pre>{msg}</pre>
        </div>
    )
}

export default App;

import axios from 'axios';
import React, { useState } from 'react';

export const Trial = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        var config = {
            method: 'post',
            url: "http://localhost:8675/existbyid",
            data: { email: email },
        };

        axios(config)
            .then((res) => {
                alert("user already exist")
            })
            .catch(error => {
                console.log('error',error)
                alert(error.response.data.existence || 'Oops Something Went Wrong')
            }
            );




    };

    return (
        <>
            <h1>I'm from trial page.......</h1>
            <input type="text" name="email" value={email} onChange={handleEmailChange} />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};
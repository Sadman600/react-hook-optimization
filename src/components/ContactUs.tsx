import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, email });


    }

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' id='name' onChange={handleChangeName} />
                <br />
                <input type="email" name="email" id="email" onChange={handleChangeEmail} />
                <br />
                <button type="submit" >submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
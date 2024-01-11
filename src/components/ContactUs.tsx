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

    // const handleChange = (name) => {
    //     return (e) => {
    //         console.log(e.target.value)
    //     }
    // }
    const handleChange = (name) => (e) => {
        if (name === "name") {
            setName(e.target.value)
        }
        if (name === "email") {
            setEmail(e.target.value)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, email });


    }

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' id='name' onChange={handleChange("name")} />
                <br />
                <input type="email" name="email" id="email" onChange={handleChange("email")} />
                <br />
                <button type="submit" >submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
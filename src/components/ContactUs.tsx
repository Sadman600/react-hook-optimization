import React, { useState } from 'react';

const ContactUs = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    // const handleChangeName = (e) => {
    //     setName(e.target.value)
    // }
    // const handleChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    const [user, setUser] = useState({ name: '', email: '' })
    // const handleChange = (name:string) => (e:React.ChangeEvent<HTMLInputElement>) => {
    //     if (name === "name") {
    //         // setName(e.target.value)
    //         setUser({ ...user, name: e.target.value })
    //     }
    //     if (name === "email") {
    //         // setEmail(e.target.value)
    //         setUser({ ...user, email: e.target.value })
    //     }
    // }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const inputName = e.target.name;
        // const value = e.target.value;
        // setUser({ ...user, [inputName]: value })
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user);
    }

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' id='name' onChange={handleChange} />
                <br />
                <input type="email" name="email" id="email" onChange={handleChange} />
                <br />
                <button type="submit" >submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
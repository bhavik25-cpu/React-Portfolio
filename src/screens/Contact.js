import {useState} from 'react';
import '../stylesheet/contact.css';


const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [describe, setDescribe] = useState();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const contact = {name, email, phone, describe};
        console.log(contact);
        console.log(e);
    }

    return (
        <div>
            <section>
                <h1>CONTACT</h1>
                <span>
                    <h5>Looking forward to answering your email</h5>
                    <form className="forms" onSubmit={handleSubmit}>
                        <input type="text"  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                        <input type="email"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        <input type="tel" placeholder="Phone" value={phone}  onChange={(e) => setPhone(e.target.value)} required/>
                        <textarea cols="30" rows="10" placeholder="Type your message here..." value={describe} onChange={(e)=>setDescribe(e.target.value)} required></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </span>
            </section>
        </div>
    );
}

export default Contact;
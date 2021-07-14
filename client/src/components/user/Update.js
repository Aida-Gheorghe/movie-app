import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'

const Update = () => {
    const { id } = useParams();
    const history = useHistory()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [about, setAbout] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            fname: fname,
            lname: lname,
            email: email,
            birthday: birthday,
            country: country,
            city: city,
            about: about,
        }

        fetch('/users/update/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            history.push('/users');
        }).catch(error => console.log(error))
    }
    return (
        <div className="update">
            <h2>Update User</h2>
            <form>
                <label>First Name</label>
                <input
                    type="text"
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <label>Last name</label>
                <input
                    type="text"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Birthday</label>
                <input
                    type="date"
                    required
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <label>Country</label>
                <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <label>City</label>
                <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>About</label>
                <textarea
                    required
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <button onClick={handleSubmit} disabled={!(about && email)}>Update User</button>
            </form>
        </div>

    );
}

export default Update;
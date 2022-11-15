import { useState } from "react";

const Create = () => {

    const [name, setName] = useState('');
    const [purpose, setPurpose] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { name, purpose, contact };

        fetch('http://localhost:8080/data', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(todo) })
            .then(() => { console.log("todo added"); });

    };

    return (
        <div className="create">
            <h2>New ToDo</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} required />
                <label>Purpose:</label>
                <input type="text" value={purpose} onChange={(e) => { setPurpose(e.target.value) }} required />
                <label>Contact:</label>
                <input type="text" value={contact} onChange={(e) => { setContact(e.target.value) }} required />
                <button type="submit">Add ToDo</button>
            </form>
        </div>
    );
}

export default Create;
import {useState, useEffect} from 'react';
const Home = () => {

    const [schedule, setSchedule] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/data')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setSchedule(data);
        });
    }, []);

    return (
    <div className="home">
        {schedule && schedule.map((todo) => (
            <div className="blog-preview" key={todo.id}>
                <h2>{todo.name}</h2>
                <p>{todo.purpose}</p>
                <p>contact name: {todo.contact_name}</p>
            </div>
        ))}
    </div>
    );
}

export default Home;
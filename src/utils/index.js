export const fetchRequest = async() => {
try {
    const response = await fetch("http://localhost:5001/user", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            username: "person1",
            email: "person1@gmail.com",
            password: "test123"
        })
    }
    )
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log(error);
}
}
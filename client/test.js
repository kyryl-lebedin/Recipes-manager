function addNewData(data) {
    fetch('http://localhost:3000/api/addData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    // server response message
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


let userData = {
    name: "Jane Doe",
    age: 30,
    email: "janedoe@example.com",
    isActive: true
};






document.getElementById('food-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    let obj = {};
    var zincInputValue = document.getElementById('zinc').value;
    var zincLabel = document.querySelector('label[for="zinc"]').textContent;

    obj[zincLabel] = zincInputValue;

    
    addNewData(obj);
});
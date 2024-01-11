function checkrole() {
    // Check if the user is logged in (has a token)
    const role = localStorage.getItem('role');

    if (role !='admin') {
        // User is not logged in, show an alert and redirect to login page
        alert('you need admin priviligies to access this page.');
        window.location.href = './login.html';
    } else {
        // User is logged in, continue with the rest of the functionality
        // You can add more logic here if needed
    }}


    async function starting() {
        try {
            const response = await fetch("http://localhost:3000/api/users");
            const data = await response.json();
            displayUsers(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    
    function displayUsers(users) {
        const busLoc = document.getElementById("busLoc");
        if (!busLoc) {
            console.error("Element with id 'busLoc' not found.");
            return;
        }
        busLoc.innerHTML = users.map(function (user) {
            return `
            <div id="about" data-user-id="${user._id}">
                <!-- Display user details -->
                <div id="aboutme">
                    <div style="border-bottom: 2px solid black;"><h1>${user.firstname} ${user.lastname}</h1></div>  
                        <div id="who">
                            <div id="ques">
                                <h3>National ID:</h3>
                                <h3>Phone Number:</h3>
                                <h3>Email:</h3>
                                <h3>Role:</h3>
                            </div>
                            <div id="ans">
                                <h3>${user.nationalId}</h3>
                                <h3>${user.phonenumber}</h3>
                                <h3>${user.email}</h3>
                                <h3>${user.role}</h3>
                            </div>
                        </div>
                    </div>
                <!-- Delete button with an event listener -->
                <button onclick="deleteUser('${user._id}')" class="delete-button">Delete</button>
            </div>`;
        }).join('');
    }
    
    // Add a function to delete a user
    async function deleteUser(userId) {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3000/api/del-users/${userId}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            if (response.ok) {
                // User deleted successfully, update the UI as needed
                starting(); // Refresh the user data
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    
    // Call the starting function to initiate the fetching and displaying of user data
    starting();
        

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Get form data
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const nationalId = document.getElementById('nationalId').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate form data (you can add more validation if needed)

        // Submit the registration form
        registerUser(firstname, lastname, nationalId, phonenumber, email, password);
    });

    async function registerUser(firstname, lastname, nationalId, phonenumber, email, pwd) {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:3000/api/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    nationalId,
                    phonenumber,
                    email,
                    pwd,
                }),
            });

            if (response.ok) {
                // Registration successful, you may redirect or handle it as needed
                console.log('Registration successful!');

            } else {
                // Registration failed, handle the error
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    }
});

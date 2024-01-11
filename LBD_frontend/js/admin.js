function checkauth() {
    // Check if the user is logged in (has a token)
    const token = localStorage.getItem('token');

    if (!token) {
        // User is not logged in, show an alert and redirect to login page
        alert('Please log in to access the admin page.');
        window.location.href = './login.html';
    } else {
        // User is logged in, continue with the rest of the functionality
        // You can add more logic here if needed
    }}


document.addEventListener('DOMContentLoaded', function () {
    start(); // Fetch and display existing businesses

    // Add event listener for the add-business-form
    const addBusinessForm = document.getElementById('add-business-form');
    addBusinessForm.addEventListener('submit',addBusiness);
});

async function start() {
    const response = await fetch("http://localhost:3000/api/businesses");
    const data = await response.json();
    displayBusinesses(data);
}

function displayBusinesses(businesses) {
    const busLoc = document.getElementById("busLoc");
    if (!busLoc) {
        console.error("Element with id 'busLoc' not found.");
        return;
    }
    busLoc.innerHTML = businesses.map(function (business) {
        return `
        <div id="about" data-business-id="${business._id}">
            <!-- Display business details, similar to what you did in the displayart function -->
            <!-- ... -->
            <div id="aboutme">
                <div style="border-bottom: 2px solid black;"><h1>${business.name}</h1></div>  
                    <div id="who">
                        <div id="ques">
                            <h3>WHO:</h3>
                            <h3>WHAT:</h3>
                            <h3>WHEN:</h3>
                            <h3>WHY:</h3>
                            <h3>WHERE:</h3>
                        </div>
                        <div id="ans">
                            <h3>${business.ownerId}</h3>
                            <h3>${business.category}</h3>
                            <h3>DATE</h3>
                            <h3>PASSION</h3>
                            <h3>${business.district}, ${business.sector}</h3>
                        </div>
                    </div>
                </div>
                <div id="aboutpic">
                    <img src="http://localhost:3000/${business.images}" alt="${business.name}">
                </div>
            <!-- Delete button with an event listener -->
            <button onclick="deleteBusiness('${business._id}')" class="delete-button">Delete</button>
        </div>`;
    }).join('');
}

async function addBusiness(event) {
    console.log('you got in ')
    const token = localStorage.getItem('token');
    event.preventDefault();

    // Fetch the form element
    const form = document.getElementById('add-business-form');

    // Create a FormData object to handle file uploads
    const formData = new FormData(form);

    // Send a POST request to add the new business
    await fetch("http://localhost:3000/api/add-business", {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    // Refresh the displayed businesses after adding a new one
    start();
    form.reset();
}



async function deleteBusiness(businessId) {
    console.log('u del'+businessId)
    const token = localStorage.getItem('token');
    // Send a DELETE request to remove the business
    await fetch(`http://localhost:3000/api/delete-business/${businessId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    // Refresh the displayed businesses after deletion
    start();
    form.reset();
}

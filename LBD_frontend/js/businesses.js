async function start(){
    // console.log("we got in the js file")
    const Response = await fetch("http://localhost:3000/api/businesses")
    const data = await Response.json()
    displayart(data)
}
start();

displayart=(business)=>{
const busLoc = document.getElementById("busLoc");
if (!busLoc) {
    console.error("Element with id 'busLoc' not found.");
    return;
  }
busLoc.innerHTML =`
${business.map(function(business){
    return `
    <div id="about">
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
    <button onclick="viewReviews('${business._id}')" class="reviews-button">View Reviews</button>
  </div>
    `
}).join('')}
`
}

// JavaScript functions for modal behavior
// Open the modal
function openModal() {
  document.getElementById('reviewModal').style.display = 'block';
}
// Close the modal
function closeModal() {
  document.getElementById('reviewModal').style.display = 'none';
  const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = '';
}
// Event listener for the "View Reviews" button
function viewReviews(businesid) {

  // Open the modal when the button is clicked
  openModal();

  async function viewReviews(businessid) {
    localStorage.setItem('businessID', businesid)
    // Fetch reviews for the specific business
    const response = await fetch(`http://localhost:3000/api/reviews/${businessid}`);
    const reviewsData = await response.json();
    console.log(reviewsData)
    displayreviews(reviewsData)
  }
  viewReviews(businesid)

 function displayreviews(reviews){
  
  const revcon = document.getElementById("reviewsContainer");
if (!revcon) {
    console.error("Element with id 'reviewsContainer' not found.");
    return;
  }
  revcon.innerHTML =`
${reviews.map(function(review){
    return `
      <div class="review">
      <h3>${review.user}</h3>
      <p>Rating: ${review.rating}</p>
      <p>${review.comment}</p>
      </div>
    `
  }).join('')}
  `
  }
}

const addreview = ()=>{
  
  const user = document.getElementById('userName').value;
  const rating = document.getElementById('userRating').value;
  const comment = document.getElementById('userComment').value;
  let businessId = localStorage.getItem('businessID')
  const token = localStorage.getItem('token');

  adreview(user,rating,comment,businessId,token)

}



 async function adreview(user,rating,comment,businessId,token){
  

  console.log("got hereeee")
 // Get the review data from the form

  const reviewData = {
    user: user,
    rating: rating,
    comment: comment,
};
console.log(reviewData)
  await fetch(`http://localhost:3000/api/add-review/${businessId}`, {
    method: "POST",
    body: JSON.stringify(reviewData),
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    },
});
viewReviews(businessId)
}
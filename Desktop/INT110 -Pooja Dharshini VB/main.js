// Global variable to track the row being edited
var selectedRow = null;

// Function to handle form submission
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
        saveToLocalStorage();  // Save the updated data to localStorage
    }
}

// Function to read the data from the form fields
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("fullname").value;
    formData["author"] = document.getElementById("author").value;
    formData["website"] = document.getElementById("website").value;
    formData["likes"] = 0; // Initialize likes to 0
    return formData;
}

// Function to insert a new record into the table
function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.website;
    cell4 = newRow.insertCell(3); 
    cell4.innerHTML = `<button class="like-btn">Like</button> <span class="like-count">${data.likes}</span>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

// Event listener for Like button clicks (using event delegation)
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("like-btn")) {
        onLike(event.target);
    }
});

// Function to handle Like button click and increment the like count
function onLike(button) {
    var likeCountSpan = button.nextElementSibling; // The span after the "Like" button
    var currentLikes = parseInt(likeCountSpan.innerHTML); // Get the current like count
    likeCountSpan.innerHTML = currentLikes + 1; // Increment the like count by 1
    saveToLocalStorage(); // Save updated likes to localStorage
}

// Function to reset the form after submission
function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("author").value = "";
    document.getElementById("website").value = "";
    selectedRow = null;
}

// Function to populate the form fields when the "Edit" link is clicked
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("author").value = selectedRow.cells[1].innerHTML;
    document.getElementById("website").value = selectedRow.cells[2].innerHTML;
}

// Function to update the record in the table after editing
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.author;
    selectedRow.cells[2].innerHTML = formData.website;
}

// Function to delete a record from the table
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
        saveToLocalStorage(); // Save the updated data to localStorage after deletion
    }
}

// Function to validate the form before submission
function validate() {
    var isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        alert("Please fill out the 'Name of the Blog' field.");
    }
    return isValid;
}

// Function to save the table data to localStorage
function saveToLocalStorage() {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var blogs = [];

    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var blog = {
            name: row.cells[0].innerHTML,
            author: row.cells[1].innerHTML,
            website: row.cells[2].innerHTML,
            likes: parseInt(row.cells[3].querySelector('.like-count').innerHTML) // Get like count
        };
        blogs.push(blog);
    }

    localStorage.setItem('blogs', JSON.stringify(blogs)); // Store the data in localStorage
}

// Function to load the table data from localStorage
function loadFromLocalStorage() {
    let storedData = JSON.parse(localStorage.getItem('blogs'));
    if (storedData) {
        storedData.forEach(data => {
            insertNewRecord(data); // Populate the table with data from localStorage
        });
    }
}

// Load data from localStorage when the page loads
window.onload = function() {
    loadFromLocalStorage();
};

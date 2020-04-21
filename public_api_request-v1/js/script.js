//users is made equal to empty array
let users = [];
//selectedUser variable used in populateGallery and createModal methods
let selectedUser;
//new array copied from users array to use in searchNames method
let newArray;
//made search bar on page
document.getElementsByClassName('search-container')[0].innerHTML = '<form action="#" method="get"><input type="search" id="search-input" class="search-input" placeholder="Search..."><input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit"></form>';
//console.log(document.querySelectorAll('.search-container'));
//create corresponding pop up modal when a gallery card is clicked
function createModal() {
	let div1 = document.createElement("div");
	div1.setAttribute("class", "modal-container");
	div1.setAttribute("id", "modal-container");
  //append modal container(div1) to html body
	document.getElementsByTagName("BODY")[0].appendChild(div1);
	let div2 = document.createElement("div");
	div2.setAttribute("class", "modal");
	div1.appendChild(div2);
	button1 = document.createElement("button");
	div1.appendChild(button1);
	button1.setAttribute("type", "button");
	button1.setAttribute("id", "modal-close-btn");
	button1.setAttribute("class", "modal-close-btn");
  //add bold X to button1
	button1.innerHTML = "<strong>X</strong>";
  //add click event listener to remove modal
	button1.addEventListener("click", function(e) {
		document.getElementById("modal-container")
			.remove();
	});
	let div3 = document.createElement("div");
	div3.setAttribute("class", "modal-info-container");
	div2.appendChild(div3);
	let img = document.createElement("img");
	img.setAttribute("class", "modal-img");
  //set image properties from user array
	img.setAttribute("src", selectedUser.picture.large);
	img.setAttribute("alt", "profile picture");
	div3.appendChild(img);
	let h3 = document.createElement("h3");
	h3.setAttribute("id", "name");
	h3.setAttribute("class", "modal-name cap");
  //set first and last name using properties
	h3.innerHTML = selectedUser.name.first + ' ' + selectedUser.name.last;
	div3.appendChild(h3);
	let p1 = document.createElement("p");
	p1.setAttribute("class", "modal-text");
  //set email property
	p1.innerHTML = selectedUser.email;
	div3.appendChild(p1);
	let p2 = document.createElement("p");
	p2.setAttribute("class", "modal-text cap");
  //set location city and state properties
	p2.innerHTML = selectedUser.location.city + ', ' + selectedUser.location.state;
	div3.appendChild(p2);
  //break in the html
	document.createElement("hr");
	let p3 = document.createElement("p");
	p3.setAttribute("class", "modal-text");
  //set phone property
	p3.innerHTML = selectedUser.phone;
	div3.appendChild(p3);
	let p4 = document.createElement("p");
	p4.setAttribute("class", "modal-text");
  //set street address properties
	p4.innerHTML = selectedUser.location.street.number
  + ' ' + selectedUser.location.street.name
  + '., ' + selectedUser.location.city
  + ', ' + selectedUser.location.state
  + ' ' + selectedUser.location.postcode;
	div3.appendChild(p4);
	let p5 = document.createElement("p");
	p5.setAttribute("class", "modal-text");
  //set date of birth property
	var date = new Date(selectedUser.dob.date);
  //change format of newDate
	var newdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
	p5.innerHTML = "Birthday: " + newdate;
	div3.appendChild(p5);
	let div4 = document.createElement("div");
	div1.appendChild(div4);
	div4.setAttribute("class", "modal-btn-container");
  //create button to find previous employee in list on modal
	let button2 = document.createElement("button");
	button2.setAttribute("type", "button");
	button2.setAttribute("id", "modal-prev");
	button2.setAttribute("class", "modal-prev btn");
	button2.innerHTML = "Prev";
	div4.appendChild(button2);
	//set currrentIndex equal to index of current selectedUser
	var currentIndex = users.indexOf(selectedUser);
	if(currentIndex === 0) {
			button2.style.display = "none";
	}
  //event listener for previous button
	button2.addEventListener('click', function() {
    //set currrentIndex equal to index of current selectedUser

    //conditional if to make sure currentIndex minus 1 is not less than 0
		if ((currentIndex - 1) >= 0) {
			//new selected user equals currentIndex minus 1 of users array
			selectedUser = users[currentIndex - 1];
      //currrent modal is removed and createModal is called with new value
			document.getElementById('modal-container')
				.remove();
			createModal();
		}
	});
	//create button to find next emmployee in list on modal

		let button3 = document.createElement("button");
		button3.setAttribute("type", "button");
		button3.setAttribute("id", "modal-next");
		button3.setAttribute("class", "modal-next btn");
		button3.innerHTML = "Next";
		div4.appendChild(button3);
		var currentIndex = users.indexOf(selectedUser);
		//console.log(users.length);
		//console.log(currentIndex);
		if(currentIndex === (users.length - 1)) {
				button3.style.display = "none";
		}
		//set currentIndex equal to index of current selectedUser
		//var currentIndex = users.indexOf(selectedUser);
		button3.addEventListener('click', function() {
	    //conditional if to make sure currentIndex plus 1 is not more than array length
			if ((currentIndex + 1) < users.length) {
	      //new selectedUser equals currentIndex plus 1 of users array
				selectedUser = users[currentIndex + 1];
	      //current modal is removed and createModal is called with new value
				document.getElementById('modal-container')
					.remove();
				createModal();
			}
	});
}

//populate gallery with employee cards
function populateGallery() {
  //for each item in array users, create the html for the card
	users.forEach(user => { //console.log(user);
		let div = document.createElement("div");
		div.setAttribute("class", "card");
		div.innerHTML = `<div class="card-img-container"><img class="card-img" src=
    ${user.picture.large} alt="profile picture"/></div><div class="card-info-container">
    <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
    <p class="card-text">${user.email }</p><p class="card-text cap">${user.location.city}
    , ${user.location.state}</p></div>`;
    //add event listener for card
    div.addEventListener('click', function() {
      //if card clicked, make selectedUser equal to user, then create modal for that user
			selectedUser = user;
			//console.log(selectedUser);
			createModal();
		});
    //append card to gallery
		document.getElementById('gallery')
			.appendChild(div);
	});
};
//method searchNames adds functionality to search bar
function searchNames() {
	//users is now equal to an empty array
	users = [];
  //input variable made equal to value typed into search bar
	let input = document.getElementById('search-input')
		.value;
  //for length of array newArray
	for (var i = 0; i < newArray.length; i++) {
    //let userName equal first space last name of item in newArray
		let userName = newArray[i].name.first + " " + newArray[i].name.last;
    //if the userName in newArray index includes value of input in search bar,
    //push userName in newArray to users array
		if (userName.toLowerCase()
			.includes(input.toLowerCase())) {
			users.push(newArray[i]);
		}
	}
  //if users array empty, show message in gallery
	if (users.length == 0) {
		document.getElementById('gallery')
			.innerHTML = 'No Match Found.';
    //create button to return to full gallery
		let button = document.createElement('button');
		button.innerHTML = 'Return to Employee List';
		document.getElementById('gallery')
			.appendChild(button);
    //when button clicked gallery will be cleared and users array will populate
		button.addEventListener("click", (e) => {
			document.getElementById('gallery')
				.innerHTML = ' ';
			users = newArray;
			populateGallery();
		})
  //else, a search match has occured and users array is not empty
	} else {
		document.getElementById('gallery')
			.innerHTML = ' ';
    //users array passed to populate gallery method to make a card for search result
		populateGallery();
	}
};
//button on search bar click event listener, call searchNames function
document.getElementById('search-submit')
	.addEventListener("click", (e) => {
		searchNames()
	});
  //jquery library function ajax
$.ajax({
  //address to api
	url: ' https://randomuser.me/api/?nat=us&results=12'
  //data comes as json and is converted to js objects
	, dataType: 'json'
  //on success of the call, make users equal to data.results
	, success: function(data) {
		users = data.results;
    //newArray is equal to copy of users array
		newArray = JSON.parse(JSON.stringify(users));
		//console.log(JSON.stringify(users));
    //populate the gallery once data has been parsed
		populateGallery();
	}
});
//fetch('https://randomuser.me/api/?nat=us&results=12').

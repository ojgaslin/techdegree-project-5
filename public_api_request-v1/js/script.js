let users = [];
let selectedUser;
let newArray;
document.getElementsByClassName('search-container')[0].innerHTML ='<form action="#" method="get"><input type="search" id="search-input" class="search-input" placeholder="Search..."><input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit"></form>';
//console.log(document.querySelectorAll('.search-container'));





function createModal() {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "modal-container");
  div1.setAttribute("id", "modal-container");
  document.getElementsByTagName("BODY")[0].appendChild(div1);
  let div2 = document.createElement("div");
  div2.setAttribute("class", "modal");
  div1.appendChild(div2);
  button1 = document.createElement("button");
  div1.appendChild(button1);
  button1.setAttribute("type", "button");
  button1.setAttribute("id", "modal-close-btn");
  button1.setAttribute("class", "modal-close-btn");
  button1.innerHTML = "<strong>X</strong>";
  button1.addEventListener( "click", function(e)  {
  document.getElementById("modal-container").remove();
  });
  let div3 = document.createElement("div");
  div3.setAttribute("class", "modal-info-container");
  div2.appendChild(div3);
  let img = document.createElement("img");
  img.setAttribute("class", "modal-img");
  img.setAttribute("src", selectedUser.picture.large);
  img.setAttribute("alt", "profile picture");
  div3.appendChild(img);
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "name");
  h3.setAttribute("class", "modal-name cap");
  h3.innerHTML= selectedUser.name.first + ' ' + selectedUser.name.last;
  div3.appendChild(h3);
  let p1 = document.createElement("p");
  p1.setAttribute("class", "modal-text");
  p1.innerHTML= selectedUser.email;
  div3.appendChild(p1);
  let p2 = document.createElement("p");
  p2.setAttribute("class", "modal-text cap");
  p2.innerHTML=selectedUser.location.city + ', ' + selectedUser.location.state;
  div3.appendChild(p2);
  document.createElement("hr");
  let p3 = document.createElement("p");
  p3.setAttribute("class", "modal-text");
  p3.innerHTML=selectedUser.phone;
  div3.appendChild(p3);
  let p4 = document.createElement("p");
  p4.setAttribute("class", "modal-text");
  p4.innerHTML= selectedUser.location.street.number + ' ' + selectedUser.location.street.name + '., ' + selectedUser.location.city + ', ' + selectedUser.location.state + ' ' + selectedUser.location.postcode;
  div3.appendChild(p4);
  let p5 = document.createElement("p");
  p5.setAttribute("class", "modal-text");
  var date = new Date(selectedUser.dob.date);
  var newdate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  p5.innerHTML="Birthday: " + newdate;
  div3.appendChild(p5);
  let div4 = document.createElement("div");
  div1.appendChild(div4);
  div4.setAttribute("class", "modal-btn-container");
  let button2 = document.createElement("button");
  button2.setAttribute("type", "button");
  button2.setAttribute("id", "modal-prev");
  button2.setAttribute("class", "modal-prev btn");
  button2.innerHTML="Prev";
  div4.appendChild(button2);
  button2.addEventListener('click', function(){
    console.log('echo click');
    var currentIndex = users.indexOf(selectedUser);
    if((currentIndex - 1) >= 0) {
    //new selected user equals currentIndex minus 1 of users array
    selectedUser = users[currentIndex - 1];
    document.getElementById('modal-container').remove();
    createModal();
  }
  });





  let button3 = document.createElement("button");
  button3.setAttribute("type", "button");
  button3.setAttribute("id", "modal-next");
  button3.setAttribute("class", "modal-next btn");
  button3.innerHTML="Next";
  div4.appendChild(button3);
  button3.addEventListener('click', function(){
    //next person
    //console.log('echo next click');
       var currentIndex = users.indexOf(selectedUser);
       if((currentIndex + 1) < users.length){
       selectedUser = users[currentIndex + 1];
       document.getElementById('modal-container').remove();
       createModal();
}

  });
}


function populateGallery() {
users.forEach(user => { //console.log(user);
  let div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `<div class="card-img-container"><img class="card-img" src= ${user.picture.large} alt="profile picture"/></div><div class="card-info-container"><h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3><p class="card-text">${user.email }</p><p class="card-text cap">${user.location.city}, ${user.location.state}</p></div>`;
  div.addEventListener('click', function(){
    selectedUser = user;
    console.log(selectedUser);
    createModal();
  });
  document.getElementById('gallery').appendChild(div);
});
};

function searchNames() {
  //console.log('searchNames');
  users = [];
  let input = document.getElementById('search-input').value;
  for(var i = 0; i < newArray.length; i++  ) {
      let userName = newArray[i].name.first + " " + newArray[i].name.last;
      if(userName.toLowerCase().includes(input.toLowerCase())) {
        //users.push(JSON.parse(JSON.stringify(newArray[i])));
          users.push(newArray[i]);
          console.log(users);
      }
    }
    if(users.length == 0){
      document.getElementById('gallery').innerHTML = 'No Match Found.';
      let button = document.createElement('button');
      button.innerHTML = 'Return to Employee List';
      document.getElementById('gallery').appendChild(button);
      button.addEventListener("click", (e) => {
        document.getElementById('gallery').innerHTML = ' ';
        users = newArray;
        populateGallery();
        document.getElementById('modal-container').remove();
      })
      //message showing no matches
    }else {
      document.getElementById('gallery').innerHTML = ' ';
      populateGallery();
    }

  };
  //clear Gallery
  //loop through new arry to look for matches
  //push matches to users
  //call populate gallery
  //if search bar has nothing in it the users = new array.

document.getElementById('search-submit').addEventListener("click", (e) => {searchNames()});
$.ajax({
  url: ' https://fsjs-public-api-backup.herokuapp.com/api/?nat=us&results=12',
  dataType: 'json',
  success: function(data) {
  users = data.results;
  newArray = JSON.parse(JSON.stringify(users));
  console.log(JSON.stringify(users));
  console.log(users);
  populateGallery();
  }
});
//fetch('https://randomuser.me/api/?nat=us&results=12').

let users;


document.getElementsByClassName('search-container')[0].innerHTML ='<form action="#" method="get"><input type="search" id="search-input" class="search-input" placeholder="Search..."><input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit"></form>';
//console.log(document.querySelectorAll('.search-container'));



function populateGallery(users) {
users.forEach(user => { console.log(user);
  document.getElementById('gallery').innerHTML +='<div class="card"><div class="card-img-container"><img class="card-img" src="'+ user.picture.large +'" alt="profile picture"/></div><div class="card-info-container"><h3 id="name" class="card-name cap">'+ user.name.first +' '+ user.name.last +'</h3><p class="card-text">'+ user.email +'</p><p class="card-text cap">'+ user.location.city +', '+ user.location.state +'</p></div></div>';
});

};

$.ajax({
  url: 'https://randomuser.me/api/?nat=us&results=12',
  dataType: 'json',
  success: function(data) {
  users = data.results;
  populateGallery(users);
  }
});

$('#gallery').click(function() {
  console.log('call');

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
  img.setAttribute("src", "https://placehold.it/125x125");
  img.setAttribute("alt", "profile picture");
  div3.appendChild(img);
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "name");
  h3.setAttribute("class", "modal-name cap");
  h3.innerHTML= "name";
  div3.appendChild(h3);
  let p1 = document.createElement("p");
  p1.setAttribute("class", "modal-text");
  p1.innerHTML='email';
  div3.appendChild(p1);
  let p2 = document.createElement("p");
  p2.setAttribute("class", "modal-text cap");
  p2.innerHTML="city";
  div3.appendChild(p2);
  document.createElement("hr");
  let p3 = document.createElement("p");
  p3.setAttribute("class", "modal-text");
  p3.innerHTML="(555) 555-5555";
  div3.appendChild(p3);
  let p4 = document.createElement("p");
  p4.setAttribute("class", "modal-text");
  p4.innerHTML="123 Portland Ave., Portland, OR 97204";
  div3.appendChild(p4);
  let p5 = document.createElement("p");
  p5.setAttribute("class", "modal-text");
  p5.innerHTML="Birthday: 10/21/2015";
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
  let button3 = document.createElement("button");
  button3.setAttribute("type", "button");
  button3.setAttribute("id", "modal-next");
  button3.setAttribute("class", "modal-next btn");
  button3.innerHTML="Next";
  div4.appendChild(button3);

});

//fetch('https://randomuser.me/api/?nat=us&results=12').

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
  let div1 = $(document.createElement('div'));
  div1.addClass('modal-container');
  div1.append('body');
  let div2 = $(document.createElement('div'));
  div2.addClass('modal');
  div1.append(div2);
  button1 = $(document.createElement('button'));
  div2.append(button1);
  button1.attr({type:'button', id:'modal-close-btn', class:'modal-close-btn', });
  button1.innerHTML = '<strong>X</strong>';
  let div3 = $(document.createElement('div'));
  div3.addClass('modal-info-container');
  div2.append(div3);
  let img = $(document.createElement('img'));
  img.attr({class:'modal-img', src: 'https://placehold.it/125x125', alt:'profile picture'});
  div3.append(img);
  let h3 = $(document.createElement('h3'));
  h3.attr({id:'name', class:'modal-name cap'});
  h3.innerHTML= 'name';
  div3.append(h3);
  let p1 = $(document.createElement('p'));
  p1.addClass('modal-text');
  p1.innerHTML='email';
  div3.append(p1);
  let p2 = $(document.createElement('p'));
  p2.addClass('modal-text cap');
  p2.innerHTML='city';
  div3.append(p2);
  document.createElement('hr');
  let p3 = $(document.createElement('p'));
  p3.addClass('modal-text');
  p3.innerHTML='(555) 555-5555';
  div3.append(p3);
  let p4 = $(document.createElement('p'));
  p4.addClass('modal-text');
  p4.innerHTML='123 Portland Ave., Portland, OR 97204';
  div3.append(p4);
  let p5 = $(document.createElement('p'));
  p5.addClass('modal-text');
  p5.innerHTML='Birthday: 10/21/2015';
  div3.append(p5);

  let div4 = $(document.createElement('div'));
  div1.append(div4);
  div4.addClass('modal-btn-container');
  let button2 = $(document.createElement('button'));
  button2.attr({type:'button', id:'modal-prev', class:'modal-prev btn'});
  button2.innerHTML='Prev';
  div4.append(button2);
  let button3 = $(document.createElement('button'));
  button3.attr({type:'button', id:'modal-next', class:'modal-next btn'});
  button3.innerHTML='Next';
  div4.append(button3);

});

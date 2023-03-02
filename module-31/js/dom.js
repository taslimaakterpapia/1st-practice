
// --------background er color change--------- 

document.getElementById('apply-bg').addEventListener('click', function(){

    // console.log('apply bg');

    const friends = document.getElementsByClassName('friend');

    for (const friend of friends){
       friend.style.backgroundColor= 'red';

    }
});


// --------- kono kichu k cener ba position change kora 


document.getElementById('center-third').addEventListener('click', function(){

const third = document.getElementById('third');

third.style.textAlign = 'center';


})

// ------------add new line ---------------

document.getElementById('add-friend').addEventListener('click', function(){

const friendContainer = document.getElementById('friends');

// // ----- sob gula friend class er div re ekta div a takha lagto ,
// html a kori nai tai js er madhome dib creat kora hoise ei line a --------

const friend = document.createElement('div');

// background color er class ta add kora holo

friend.classList.add('friend');


// innerHTML diye html er new kichu add kora jay

//  new ki line add hobe ta html er moto eikhane likhte hobe

friend.innerHTML = `

<h3 class='friend-name'> new friend <h3>
<p> button a click korle new line show korbe </p>


`

friendContainer.appendChild(friend);







})
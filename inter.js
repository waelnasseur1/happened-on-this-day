function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

// function HappenedOnThisDay(){
//     let today = new Date();
//     let month = String(today.getMonth() + 1).padStart(2,'0');
//     let day = String(today.getDate()).padStart(2,'0');
//     let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;
//     var eventsInput = document.getElementById('searchId').value

//     let response = fetch( url,
//         {
//             headers: {
//                 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
//                 'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
//             }
//         }
//     );
//     response.json()
//         .then(console.log).catch(console.error);
//     }


//function HappenedOnThisDay(birth, death, holiday, events) {
//    return {
//        birth,
//        death,
//        holiday,
//        events,
//    }
//}
//var day1 = HappenedOnThisDay()

// let month = 9
// let day = 11
// let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

// var getData = async function  (){

//     let response = await fetch(url);
//     response.json()
//     .then(function (res) {
//         console.log(res.events)
//         console.log(res)
//     })
//     .catch(console.error);
// }document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById('btn');
    var dataContainer = document.getElementById('data'); 
    
    a.addEventListener("click", function (e) {
      e.preventDefault();
    
      function HappenedOnThisDay() {
       // var yearInput = document.getElementById('yearId').value;
        var monthInput = document.getElementById('monthId').value;
        var dayInput = document.getElementById('dayId').value;
    
        let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${monthInput}/${dayInput}`;
    
        var getData = async function () {
          try {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
    
            
            dataContainer.innerHTML = '';
            
            var ul = document.createElement('ul');
            for (var item of data.events) {
              var li = document.createElement('li');
              li.textContent = item.text;
              ul.appendChild(li);
            }
            dataContainer.appendChild(ul);
          } catch (error){
            console.error(error);
          }
        }
    
        getData();
      }
      HappenedOnThisDay();
    });
    








  
  





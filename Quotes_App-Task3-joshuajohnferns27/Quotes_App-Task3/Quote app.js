var author = "";

function btnfunction() {
  document.getElementById("input").value = "";
  fetch("https://quote-api-app.herokuapp.com/quote")
    .then((data) => {
      //console.log(data);
      return data.json(); //converted to object
    })
    .then((ok) => {
      console.log(ok[0]);
      let list = "";
      ok.map((values) => {
        list += `   
            <h5>"${values.quote}"</h5>
            <p><b >&nbsp~${values.author}</b></p>
            <li>Likes:&nbsp${values.likes}</li>
            <li>Dislikes:&nbsp${values.dislikes}</li>
              <br>  <br>     
        `;
      });
      document.getElementById("names").innerHTML = list;
    });
}
function forauthor() {
  fetch("https://quote-api-app.herokuapp.com/author")
    .then((dat) => {
      //console.log(data);
      return dat.json(); //converted to object
    })
    .then((o) => {
      console.log(o[0]);
      let lis = "";
      o.map((value) => {
        lis += ` 
            <li>${value}</li>
         `;
      });
      document.getElementById("name").innerHTML = lis;
      addLisHandlers();
    });
}

function addLisHandlers() {
  var lis = document.getElementById("name");
  var rows = lis.getElementsByTagName("li");
  console.log(rows);
  for (i = 0; i < rows.length; i++) {
    var currentRow = rows[i];
    var createClickHandler = function (row) {
      return function () {
        author = row.innerHTML;
        document.getElementById("input").value = author;
        return search_button();
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}

function search_button() {
  let users = [];
  const url = "https://quote-api-app.herokuapp.com/quote/search?author=";
  value = document.getElementById("input").value;
  const api = url + value;
  fetch(api)
    .then((data3) => {
      return data3.json();
    })
    .then((info) => {
      users = info.map((user) => {
        console.log(info[0]);
        let list2 = "";
        info.map((values) => {
          list2 += `   
                <h5>"${values.quote}"</h5>
                <p><b >&nbsp${values.author}</b></p>
                <li>Likes:&nbsp${values.likes}</li>
                <li>Dislikes:&nbsp${values.dislikes}</li>
                 <br><br>    
            `;
        });
        document.getElementById("names").innerHTML = list2;
      });
    });
}

function getQuoteofday(){
  
  fetch("https://quote-api-app.herokuapp.com/quote")
  .then((res)=> {
    if (!res.ok) {
      throw Error (res.statusText)
    }
    return res.json()
  })
  .then((day) => {
    let quote = Math.floor(Math.random() * 102);
    console.log("data",day[quote]);
        row += `   
            <h5>"${day[quote].quote}"</h5>
            <p><b >&nbsp~${day[quote].author}</b></p>
            <li>Likes:&nbsp${day[quote].likes}</li>
            <li>Dislikes:&nbsp${day[quote].dislikes}</li>
              <br>  <br>     
        `;
        document.getElementById("names").innerHTML = row;
      });
    }

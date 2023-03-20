const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        var htmlString = `
        <tr>
             <th> Id </th>
             <th> Year </th>
             <th> Make </th>
             <th> Model </th>
             <th> Type </th>
         </tr>`;
        var arr = JSON.parse(this.responseText);
        arr.forEach(ele => {
          htmlString += `
          
          <tr>
             <td> ${ele.id} </td>
             <td> ${ele.year} </td>
             <td>${ele.make}</td>
             <td> ${ele.model} </td>
             <td> ${ele.type} </td>
          </tr>
             `;
        })
        document.getElementById("table").innerHTML = htmlString;
      }
    });


xhr.open("GET", "https://car-data.p.rapidapi.com/cars?limit=10&page=0");
xhr.setRequestHeader("X-RapidAPI-Key", "283145f3damsh2e9270231ce8eedp1732d5jsn896f1f452466");
xhr.setRequestHeader("X-RapidAPI-Host", "car-data.p.rapidapi.com");

xhr.send(data);
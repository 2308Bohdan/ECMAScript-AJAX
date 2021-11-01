"use strict"
//1.Получите данные по url: https://reqres.in/api/users/5;
fetch("https://reqres.in/api/users/5")
	.then( (response) => {
		console.log("Status: ", response.status);
		return response.json();
	})
	.then((body) => {
		console.log("Data: ", body.data);
	})
	.catch((err) => console.error(err));
//2.Создайте данные c произвольными значениями по url: https://reqres.in/api/users/;
fetch("https://reqres.in/api/users/", {
	method: "POST",
	headers: {
      "Content-Type": "application/json"
	},
	body: JSON.stringify({droid: "Deca", job: "Kill"})
})
	.then((response) => {
		console.log("Status: ", response.status);
		return response.json();
	})
	.then((data) => console.log(data))
	.catch((err) => console.error(err));
//3.Получите данные по url: https://reqres.in/api/users/10.
fetch("https://reqres.in/api/users/10")
	.then( (response) => {
		console.log("Status: ", response.status);
		return response.json();
	})
	.then((body) => {
		console.log("Data: ", body.data);
	})
	.catch((err) => console.error(err));
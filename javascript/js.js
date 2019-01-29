function submit() {
	var user = document.getElementById('user').textContent;
	console.log(user);
	var password = document.getElementById('pass').textContent;
	console.log(password);
	var stuff = '<p>' + user + ' ' + password + '<p>';
	document.getElementById('stuff').innerHTML(stuff);
	alert(stuff);
}

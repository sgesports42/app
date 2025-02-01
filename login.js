if (localStorage.getItem("sg_local")) {
  window.location.href = "index.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  var url = "https://script.google.com/macros/s/AKfycbx4UhtCJHphfT2Bba5AZnM_pziC6-KVYlPqkeLH-cOrz7HgS4sCSLHxaTREdUMfs1EM/exec";

  var data = {
    "username": username,
    "password": password
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data)
  })
  .then(response => response.text())
  .then(responseText => {
    if (responseText === "success") {
      localStorage.setItem("sg_local", username);
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password!");
    }
  })
  .catch(error => console.error('Error:', error));
});

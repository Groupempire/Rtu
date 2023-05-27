function submitForm() {
      var name = document.getElementById("name").value;
      var roll = document.getElementById("roll").value;
      var dob = document.getElementById("dob").value;

      // Store the values in session storage
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("roll", roll);
      sessionStorage.setItem("dob", dob);
    }
    
    function getRandomCGPA() {
      var min =4.8;
      var max =8.4;
      var cgpa = (Math.random() * (max - min) + min).toFixed(2);
      return cgpa;
    }

    window.onload = function() {
      // Retrieve the values from session storage
      var name = sessionStorage.getItem("name");
      var roll = sessionStorage.getItem("roll");
      var dob = sessionStorage.getItem("dob");

      // Display the values in the introduction message
      document.getElementById("name").textContent = name;
      document.getElementById("roll").textContent = roll;
      document.getElementById("dob").textContent = dob;
      document.getElementById("cgpa").textContent = getRandomCGPA();
      
      // Clear the session storage
      sessionStorage.clear();
    };
    
    function downloadResult() {
      var introductionText = document.getElementById("introduction").innerText;
      var filename = "introduction.txt";
      var element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(introductionText));
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
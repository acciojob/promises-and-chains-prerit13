<script>
    function handleSubmit() {
      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();

      // ✅ Step 1: Validate inputs
      if (name === "" || age === "") {
        alert("Please enter valid details.");
        return;
      }

      // ✅ Step 2: Create Promise based on age
      const checkVotingEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4 seconds delay
      });

      // ✅ Step 3: Handle promise result
      checkVotingEligibility
        .then(message => alert(message))
        .catch(errorMessage => alert(errorMessage));
    }
  </script>
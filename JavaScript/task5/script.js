fetch("persons.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(persons) {
        let personTableBody = document.getElementById('personTableBody');

        // Iterate through each person and populate the table
        persons.forEach(function(person) {
            let row = personTableBody.insertRow();
            let nameCell = row.insertCell(0);
            let ageCell = row.insertCell(1);

            nameCell.textContent = person.name;
            ageCell.textContent = person.age;
        });
    })
    .catch(function(error) {
        console.error("An error occurred:", error);
    });
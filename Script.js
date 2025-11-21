function addModule() {
    const tbody = document.getElementById("moduleBody");
    const row = document.createElement("tr");

    row.innerHTML = `
                <td><input type="text" placeholder="Enter module name"></td>
                <td><input type="number" placeholder="Enter credits" min="0"></td>
                <td>
                    <select>
                        <option value="">Select Grade</option>
                        <option value="4.0">A+ (4.0)</option>
                        <option value="4.0">A (4.0)</option>
                        <option value="3.7">A- (3.7)</option>
                        <option value="3.3">B+ (3.3)</option>
                        <option value="3.0">B (3.0)</option>
                        <option value="2.7">B- (2.7)</option>
                        <option value="2.3">C+ (2.3)</option>
                        <option value="2.0">C (2.0)</option>
                        <option value="1.7">C- (1.7)</option>
                        <option value="1.3">D+ (1.3)</option>
                        <option value="1.0">D (1.0)</option>
                        <option value="0.0">E (0.0)</option>
                    </select>
                </td>
            `;

            tbody.appendChild(row);
}


function calculateGPA() {

    totalWeigtedPoints = 0;
    totalCreditPoints = 0;

    const tbody = document.getElementById("moduleBody");
    const rows = tbody.querySelectorAll("tr");

    for(let row of rows){
        const creditInput = row.cells[1].querySelector('input[type="number"]');
        const gradeSelect = row.cells[2].querySelector('select');

        const credits = parseFloat(creditInput.value);
        const grade = parseFloat(gradeSelect.value);

        if(!isNaN(credits) && !isNaN(grade)){
            totalWeigtedPoints += credits * grade;
            totalCreditPoints += credits;
        }
    }

    const gpa = totalWeigtedPoints / totalCreditPoints;

    const gpaResultField = document.getElementById("gpaResult");
    if(!isNaN(gpa)){
        gpaResultField.textContent = `Cumulative GPA: ${gpa.toFixed(2)}`;
    } else {
        gpaResultField.textContent = `Cumulative GPA: 0.00`;
    }

}


function init(){
    const tbody = document.getElementById("moduleBody");
    tbody.addEventListener("input", calculateGPA);
    tbody.addEventListener("change", calculateGPA);
}


window.addEventListener("DOMContentLoaded", init);
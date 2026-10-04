// Navigation Logic
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');
}

// Basic Activities
function activity1() { alert("Welcome to JavaScript!"); }

function activity2() {
    let name = "Nicello Cham Jr";
    let age = 21;
    alert(`My name is ${name}, I am ${age} years old.`);
}
function activity2() {
    let name = "Nicello Cham Jr";
    let age = 21;
    alert(`My name is ${name}, I am ${age} years old.`);
}

function activity3() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    alert("Sum: " + (num1 + num2));
}

function activity4() {
    let name = prompt("Enter your name:");
    alert("Hello " + name + "!");
}

function activity5() {
    let age = Number(prompt("Enter your age:"));
    alert(age >= 18 ? "You are eligible / pwede kana" : "You are not eligible / bata kapa");
}

function activity6() {
    console.log("Check console for loops!");
    for (let i = 1; i <= 5; i++) console.log("Loop: " + i);
}

document.addEventListener('DOMContentLoaded', () => {
    const btn7 = document.getElementById("activity7Btn");
    if (btn7) {
        btn7.addEventListener("click", () => alert("Activity 7: Listener Active!"));
    }

    // Exercise 4: Grade Calculator Logic
    const btnCalc = document.getElementById('btnCalculate');
    const btnRes = document.getElementById('btnReset');
    const btnAddQuiz = document.getElementById('btnAddQuiz');
    const btnAddExam = document.getElementById('btnAddExam');
    const btnAddMCO = document.getElementById('btnAddMCO');
    
    let quizScores = [];
    let examScores = [];
    let mcoScores = [];

    function handleAddScore(inputId, storageArray, displayId) {
    const input = document.getElementById(inputId);
    const score = parseFloat(input.value);

    if (!isNaN(score) && score >= 0 && score <= 100) {
        storageArray.push(score);
        document.getElementById(displayId).innerText = storageArray.join(', ');
        input.value = '';
    } else {
        alert("Please enter a valid score between 0 and 100.");
    }
}

    if(btnAddQuiz) btnAddQuiz.addEventListener('click', () => {
        handleScoreAdd(document.getElementById('quizInput'), quizScores, document.getElementById('quizDisplay'), document.getElementById('quizAverageValue'));
    });

    if(btnAddExam) btnAddExam.addEventListener('click', () => {
        handleScoreAdd(document.getElementById('examInput'), examScores, document.getElementById('examDisplay'), document.getElementById('examAverageValue'));
    });

    if(btnAddMCO) btnAddMCO.addEventListener('click', () => {
        handleScoreAdd(document.getElementById('mcoInput'), mcoScores, document.getElementById('mcoDisplay'), document.getElementById('mcoAverageValue'));
    });

    if(btnCalc) btnCalc.addEventListener('click', () => {
        const quizAvg = parseFloat(document.getElementById('quizAverageValue').value) || 0;
        const examAvg = parseFloat(document.getElementById('examAverageValue').value) || 0;
        const mcoAvg = parseFloat(document.getElementById('mcoAverageValue').value) || 0;

        // Weighted Calculation
        const finalScore = (quizAvg * 0.20) + (examAvg * 0.30) + (mcoAvg * 0.50);
        
        let letter = "";
        if (finalScore >= 90) letter = "A (Excellent)";
        else if (finalScore >= 80) letter = "B (Very Good)";
        else if (finalScore >= 70) letter = "C (Good)";
        else if (finalScore >= 60) letter = "D (Pass)";
        else letter = "F (Fail)";

        document.getElementById('finalGrade').textContent = finalScore.toFixed(2);
        document.getElementById('gradeLetter').textContent = letter;
    });

    if(btnRes) btnRes.addEventListener('click', () => {
        quizScores = []; examScores = []; mcoScores = [];
        document.getElementById('quizDisplay').textContent = "None";
        document.getElementById('examDisplay').textContent = "None";
        document.getElementById('mcoDisplay').textContent = "None";
        document.getElementById('quizAverageValue').value = "0";
        document.getElementById('examAverageValue').value = "0";
        document.getElementById('mcoAverageValue').value = "0";
        document.getElementById('finalGrade').textContent = "-";
        document.getElementById('gradeLetter').textContent = "-";
    });
});

// Other Activities
function activity8() {
    document.documentElement.style.setProperty('--primary', '#39ff14');
    alert("🟢 Cyber-Green Mode Engaged!");
}

function activity9() { document.body.classList.toggle("dark-mode"); }

function activity10(display) {
    if (display) {
        const p = document.createElement("p");
        p.textContent = "✅ New Item Added!";
        display.appendChild(p);
    }
}

function activity11(display) { if (display) display.innerHTML = "Output cleared."; }

function activity12() {
    const input = prompt("Type something:");
    if (input) alert("Length: " + input.length);
}

function activity13() {
    let n1 = Number(prompt("Num 1:"));
    let n2 = Number(prompt("Num 2:"));
    alert("Sum: " + (n1 + n2));
}

let isGradpic = false;
function activity14(display) { 
    if (!display) return;
    display.innerHTML = isGradpic 
        ? '<img src="16.jpg" alt="Other Pic" style="border-radius:20px; width:100%; border: 2px solid var(--accent);">'
        : '<img src="b.jpg" alt="Gradpic" style="border-radius:20px; width:100%; border: 2px solid var(--primary);">';
    isGradpic = !isGradpic;
}

function activity15(display) {
    const task = prompt("Enter a task:");
    if (task && display) {
        const div = document.createElement("div");
        div.textContent = "• " + task;
        display.appendChild(div);
    }
}
   // Data Arrays
let quizScores = [];
let examScores = [];
let mcoScores = [];

// Helper function to update the display text
function updateDisplay(elementId, array) {
    const display = document.getElementById(elementId);
    display.innerText = array.length > 0 ? array.join(', ') : 'None';
}

// Function to add Quiz scores
function addQuiz(inputId) {
    const input = document.getElementById(inputId);
    const score = parseFloat(input.value);
    if (!isNaN(score) && score >= 0 && score <= 100) {
        quizScores.push(score);
        updateDisplay('quizDisplay', quizScores);
        input.value = '';
    }
}

// Function to add Exam scores
// 1. Create a generic function to handle adding scores
function handleAddScore(inputId, storageArray, displayId) {
    const input = document.getElementById(inputId);
    const score = parseFloat(input.value);

    if (!isNaN(score) && score >= 0 && score <= 100) {
        storageArray.push(score);
        // Update the UI
        document.getElementById(displayId).innerText = storageArray.join(', ');
        // Clear the specific input field
        input.value = '';
    } else {
        alert("Please enter a valid score between 0 and 100.");
    }
}

// 2. Set up listeners for Exam 1
document.getElementById('btnAddExam1').addEventListener('click', () => {
    handleAddScore('examInput1', examScores, 'examDisplay');
});

// 3. Set up listeners for Exam 2
document.getElementById('btnAddExam2').addEventListener('click', () => {
    handleAddScore('examInput2', examScores, 'examDisplay');
});

// Function to add MCO scores
document.getElementById('btnAddMCO').addEventListener('click', () => {
    const input = document.getElementById('mcoInput');
    const score = parseFloat(input.value);
    if (!isNaN(score) && score >= 0 && score <= 100) {
        mcoScores.push(score);
        updateDisplay('mcoDisplay', mcoScores);
        input.value = '';
    }
});

// Calculate Final Grade
document.getElementById('btnCalculate').addEventListener('click', () => {
    const getAvg = (arr) => arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;

    const quizAvg = getAvg(quizScores);
    const examAvg = getAvg(examScores);
    const mcoAvg = getAvg(mcoScores);

    // Weighted Formula: (Quiz * 0.2) + (Exam * 0.3) + (MCO * 0.5)
    const finalGrade = (quizAvg * 0.2) + (examAvg * 0.3) + (mcoAvg * 0.5);
    
    // Display Results
    document.getElementById('finalGrade').innerText = finalGrade.toFixed(2);
    document.getElementById('gradeLetter').innerText = getGradeEquivalent(finalGrade);
});

// Grade Logic (Adjust these ranges based on your school's standards)
function getGradeEquivalent(grade) {
    if (grade >= 95) return "1.00 (Excellent)";
    if (grade >= 90) return "1.25 (Very Good)";
    if (grade >= 85) return "1.50 (Good)";
    if (grade >= 80) return "2.00 (Satisfactory)";
    if (grade >= 75) return "3.00 (Passing)";
    return "5.00 (Failed)";
}

// Reset Function
document.getElementById('btnReset').addEventListener('click', () => {
    quizScores = []; examScores = []; mcoScores = [];
    updateDisplay('quizDisplay', []);
    updateDisplay('examDisplay', []);
    updateDisplay('mcoDisplay', []);
    document.getElementById('finalGrade').innerText = '-';
    document.getElementById('gradeLetter').innerText = '-';
});

// Quiz button listeners
document.getElementById('btnAddQuiz1').addEventListener('click', () => addQuiz('quizInput1'));
document.getElementById('btnAddQuiz2').addEventListener('click', () => addQuiz('quizInput2'));
document.getElementById('btnAddQuiz3').addEventListener('click', () => addQuiz('quizInput3'));
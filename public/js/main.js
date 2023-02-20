// Get the div elements
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');

// Get the buttons
const prevBtn = document.getElementById('prevBtn');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn = document.getElementById('nextBtn');
const nextBtn2 = document.getElementById('nextBtn2');

// Set the current active div
let currentDiv = div1;
let currentDiv2 = div2;
let currentDiv3 = div3;

// Hide the previous button on load
prevBtn.style.display = 'none';
prevBtn.style.display = 'block';

// Add event listeners to the buttons
nextBtn.addEventListener('click', () => {
  // Hide the current div
  currentDiv.classList.remove('active');
  currentDiv2.classList.remove('active');
  currentDiv3.classList.remove('active');

  // Show the next div
  if (currentDiv === div1) {
    currentDiv = div2;
    currentDiv2 = div3;
    currentDiv3 = div4;
    prevBtn.style.display = 'block';
    prevBtn2.style.display = 'none';
  } else if (currentDiv === div2) {
    currentDiv = div3;
    currentDiv2 = div4;
    currentDiv3 = div5;
  } else if (currentDiv === div3) {
    currentDiv = div4;
    currentDiv2 = div5;
    currentDiv3 = div6;
  } else if (currentDiv === div4) {
    currentDiv = div5;
    currentDiv2 = div6;
    currentDiv3 = div7;
    nextBtn.style.display = 'none';
    nextBtn2.style.display = 'block';
  }

  currentDiv.classList.add('active');
  currentDiv2.classList.add('active');
  currentDiv3.classList.add('active');
});

prevBtn.addEventListener('click', () => {
  // Hide the current div
  currentDiv.classList.remove('active');
  currentDiv2.classList.remove('active');
  currentDiv3.classList.remove('active');

  // Show the previous div
  if (currentDiv === div5) {
    currentDiv = div4;
    currentDiv2 = div5;
    currentDiv3 = div6;
    
    nextBtn.style.display = 'block';
    nextBtn2.style.display = 'none';
  } else if (currentDiv === div4) {
    currentDiv = div3;
    currentDiv2 = div4;
    currentDiv3 = div5;
  } else if (currentDiv === div3) {
    currentDiv = div2;
    currentDiv2 = div3;
    currentDiv3 = div4;
    
  } else if (currentDiv === div2) {
    currentDiv = div1;
    currentDiv2 = div2;
    currentDiv3 = div3;
    prevBtn.style.display = 'none';
    prevBtn2.style.display = 'block';
  }

  currentDiv.classList.add('active');
  currentDiv2.classList.add('active');
  currentDiv3.classList.add('active');
});
const socket = io();
let problem = {};
let solution = {};
let result = "";
let automaticId = 0;

function fetchStarted() {
  $('#fetchBtn').prop('disabled', true);
  $('#solveBtn').prop('disabled', true);
  $('#solution').prop('disabled', true);
  $('#submitBtn').prop('disabled', true);
  $('#left').text("Fetching...");
  $('#operation').text("Fetching...");
  $('#right').text("Fetching...");
}

function fetchAction() {
  socket.emit('fetch');
}

function fetchCallback(value) {
  problem = value;
  $('#left').text(problem.left);
  $('#operation').text(problem.operation);
  $('#right').text(problem.right);
}

function fetchDone() {
  $('#fetchBtn').prop('disabled', false);
  $('#solveBtn').prop('disabled', false);
  $('#solution').prop('disabled', false);
  onSolutionChanged();
}

function solveStarted() {
  $('#solution').prop('disabled', true);
  $('#solution').val('Solving...');
}

function solveAction() {
  socket.emit('solve', problem);
}

function solveCallback(value) {
  solution = value;
  $('#solution').val(solution.result);
}

function solveDone() {
  $('#solution').prop('disabled', false);
  $('#submitBtn').prop('disabled', false);
}

function submitStarted() {
  $('#submitBtn').prop('disabled', true);
  $('#result').text("Submiting...");
}

function submitAction() {
  socket.emit('submit', solution);
}

function submitCallback(value) {
  result = value;
  $('#result').text(result);
}

function submitDone() {
  $('#submitBtn').prop('disabled', false);
}

// handles submit button state
function onSolutionChanged() {
  try {
    const result = Number($('#solution').val());
    if(problem.id && !Number.isNaN(result)) {
      $('#submitBtn').prop('disabled', false);
      solution = {id:problem.id, result: Number($('#solution').val())}
    } else {
      $('#submitBtn').prop('disabled', true);
    }
  } catch(err) {
    $('#submitBtn').prop('disabled', true);
  }
};

function uiAutomaticTaskSolving() {
  $('#fetchBtn').click();
  setTimeout(function(){ $('#solveBtn').click() },2000);
  setTimeout(function(){ $('#submitBtn').click() },4000);
}

function onUiAutomaticToggleChecked() {
  if (this.checked) {
    uiAutomaticTaskSolving();
    automaticId = setInterval(uiAutomaticTaskSolving,6000);
  } else {
    clearInterval(automaticId);
  }
}

$('#fetchBtn').click(function (e) {
  fetchStarted();
  fetchAction();
});
socket.on('fetch/callback', function(value){
  fetchCallback(value);
  fetchDone();
});

$('#solveBtn').click(function (e) {
  solveStarted();
  solveAction();
});
socket.on('solve/callback', function(value){
  solveCallback(value);
  solveDone();
});

$('#submitBtn').click(function (e) {
  submitStarted();
  submitAction();
});
socket.on('submit/callback', function(value){
  submitCallback(value);
  submitDone();
});

$('#solution').on('change', onSolutionChanged);
$('#automatic').on('change', onUiAutomaticToggleChecked);
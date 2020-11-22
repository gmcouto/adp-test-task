const socket = io();
let problem = {};
let solution = {};
let result = "";
function updateSolution() {
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
$('#fetchBtn').click(function (e) {
  $('#left').text("Fetching...");
  $('#operation').text("Fetching...");
  $('#right').text("Fetching...");
  socket.emit('fetch');
});
$('#solveBtn').click(function (e) {
  $('#solution').prop('disabled', true);
  $('#solution').val('Solving...');
  socket.emit('solve',problem);
});
$('#submitBtn').click(function (e) {
  $('#submitBtn').prop('disabled', true);
  $('#result').text("Submiting...");
  socket.emit('submit', solution);
});
$('#solution').on('change', function(e){
  updateSolution();
});
socket.on('fetch/callback', function(aProblem){
  problem = aProblem;
  $('#left').text(problem.left);
  $('#operation').text(problem.operation);
  $('#right').text(problem.right);

  updateSolution();
  $('#solveBtn').prop('disabled', false);
  $('#solution').prop('disabled', false);
});
socket.on('solve/callback', function(aSolution){
  solution = aSolution;
  $('#solution').val(aSolution.result);
  $('#solution').prop('disabled', false);
  $('#submitBtn').prop('disabled', false);
});
socket.on('submit/callback', function(aResult){
  result = aResult;
  $('#result').text(result);
  $('#submitBtn').prop('disabled', false);
});

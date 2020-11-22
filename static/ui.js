const socket = io();
let problem = {};
let solution = {};
let result = "";
$('#fetchBtn').click(function (e) {
  socket.emit('fetch');
});
$('#solveBtn').click(function (e) {
  socket.emit('solve',problem);
});
$('#submitBtn').click(function (e) {
  socket.emit('submit',solution);
});
socket.on('fetch/callback', function(aProblem){
  problem = aProblem;
  $('#problem').text(JSON.stringify(problem));
});
socket.on('solve/callback', function(aSolution){
  solution = aSolution;
  $('#solution').text(JSON.stringify(solution));
});
socket.on('submit/callback', function(aResult){
  result = aResult;
  $('#result').text(JSON.stringify(result));
});

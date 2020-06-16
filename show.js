var startIndexZ = 0;
var indexZ;

function showCard(project) {
  project.style.display = 'block';
  startIndexZ++;
  indexZ = startIndexZ;
  project.style.zIndex = indexZ;
  // document.getElementById(button).textDecoration = 'underline';
}

function closeCard(project) {
  project.style.display = 'none';
  // button.style.textDecoration = 'none';
}

function touchCard(project) {
  startIndexZ++;
  indexZ = startIndexZ;
  project.style.zIndex = indexZ;
}


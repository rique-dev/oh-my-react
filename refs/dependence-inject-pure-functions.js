function cachorro(dependence1) {
  console.log(dependence1)
}

function gato(dependence2) {
  console.log(dependence2)
}

function show({ dependence1, dependence2 }) {
  cachorro(dependence1)
  gato(dependence2)
}

const dependences = {
  dependence1: 'Cachorro',
  dependence2: 'Gato',
  dependence3: 'Pato',
}

show(dependences)

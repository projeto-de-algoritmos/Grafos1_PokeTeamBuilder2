class type {
  constructor(name, weaknesses) {
    this.name = name;
    this.weaknesses = weaknesses;
  }
}

export const typechart = [
  new type('normal', ['fighting']),
  new type('fire', ['water', 'ground', 'rock']),
  new type('water', ['grass', 'electric']),
  new type('grass', ['fire', 'ice', 'poison', 'flying', 'bug']),
  new type('electric', ['ground']),
  new type('ice', ['fire', 'fighting', 'rock', 'steel']),
  new type('fighting', ['flying', 'psychic', 'fairy']),
  new type('poison', ['ground', 'psychic']),
  new type('ground', ['water', 'grass', 'ice']),
  new type('flying', ['electric', 'ice', 'rock']),
  new type('psychic', ['bug', 'ghost', 'dark']),
  new type('bug', ['fire', 'flying', 'rock']),
  new type('rock', ['water', 'grass', 'fighting', 'ground', 'steel']),
  new type('ghost', ['ghost', 'dark']),
  new type('dragon', ['ice', 'fairy', 'dragon']),
  new type('dark', ['fighting', 'bug', 'fairy']),
  new type('steel', ['fire', 'fighting', 'ground']),
  new type('fairy', ['poison', 'steel']),
];

export const bfs = (graph, start) => {
  let queue = [[start, 0, [start]]];
  let visitedNodes = new Set();
  let result = [];

  while (queue.length > 0) {
    let [vertex, depth, path] = queue.shift();
    if (depth > 12) {
      continue;
    }
    for (let neighbor of graph[vertex]) {
      let newPath = [...path, neighbor];
      let visitedNodesInPath = new Set(path);
      if (newPath.length === 13 && neighbor === start) {
        result.push(newPath);
      }
      if (!visitedNodes.has(neighbor) || !visitedNodesInPath.has(neighbor)) {
        visitedNodes.add(neighbor);
        queue.push([neighbor, depth + 1, newPath]);
      }
    }
  }

  return result;
};

/**-------------------------------------------------------------------------- */
function makeStruct(keys) {
  if (!keys) return null;
  const k = keys.split(', ');
  const count = k.length;

  /** @constructor */
  function constructor() {
    for (let i = 0; i < count; i++) this[k[i]] = arguments[i];
  }
  return constructor;
}
const user = new makeStruct("name, weakness");
const grass = new user('grass', ['fire', 'ice', 'poison', 'flying', 'bug']);
console.log();


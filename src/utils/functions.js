class type {
  constructor(name, weaknesses) {
    this.name = name;
    this.weaknesses = weaknesses;
  }
}

export const typeWeakenesses = [
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

export const typeStrenghts = [
  new type('normal',['ghost']),
  new type('fire',['fire','grass','ice','bug','steel','fairy']),
  new type('water',['water','fire','ice','steel']),
  new type('electric',['electric','flying','steel']),
  new type('grass',['water','electric','grass','ground']),
  new type('ice',['ice']),
  new type('fighting',['bug','rock','dark']),
  new type('poison',['grass','fighting','poison','bug','fairy']),
  new type('ground',['electric','poison','rock']),
  new type('flying',['grass','fighting','bug']),
  new type('psychic',['fighting','psychic']),
  new type('bug',['grass','fighting','ground']),
  new type('rock',['normal','fire','poison','flying']),
  new type('ghost',['dark']),
  new type('dragon',['fire','water','electric','grass']),
  new type('dark',['ghost','dark']),
  new type('steel',['normal','grass','ice','flying','psychic','bug','rock','dragon','steel','fairy']),
  new type('fairy',['fighting','bug','dark'])
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


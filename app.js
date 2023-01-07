
let domain = [];

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net"];

for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let e = 0; e < extension.length; e++) {
                let domainName = pronoun[p] + adj[a] + noun[n] + extension[e];
                domain.push(domainName);
            }
        }
    }
};
console.log(domain);


let list = document.getElementById('domain');


for (let i = 0; i < domain.length; i++) {
 
  let item = document.createElement('li');

  item.innerHTML = domain[i];

  list.appendChild(item);
}


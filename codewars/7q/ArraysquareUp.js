function squareUp(n) {

  let res = [];

  for (let i = 1; i <= n; i++)
    for (let j = n; j >= 1; j--)
      res.push(j <= i ? j : 0);

  return res;
      
}

// Friend or Foe?
function friend(friends){
  return friends.filter(n => n.length === 4)
}

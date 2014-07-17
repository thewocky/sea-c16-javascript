// http://jsfiddle.net/thewocky/gKAjv/6/

var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
];

function oldestAge (group)
{
    var oldest = _.max(group, function(person) {
        return person.age;
        });
    return oldest.age;
}

function living (group)
{
    var alive = _.reject(group, function(person) {
        return !person.age;
    });
    return _.map(alive, 'name');;
}

function oldestLivingPerson (group)
{
    var oldest = _.max(group, function(person) {
        return person.age;
        });
    return oldest.name;
}


// Given the above data structure. Implement
// a function that will return the oldest age.

oldestAge(people);
console.log ("oldestAge: "+oldestAge(people));
// -> 75

// Also given the above data structure. Implement
// a function that will return and array of the names
// of all living people.

// living(people);
console.log ("living: "+living(people));
// -> ['Hank', 'Danny', 'Deborah', 'Kathy', 'Don']

// Also give then data structure implement a function
// that will return the name of the oldest living person.

oldestLivingPerson(people);
console.log ("oldestLivingPerson: "+oldestLivingPerson(people));
// -> 'Kathy'
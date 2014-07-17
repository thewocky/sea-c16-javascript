// http://jsfiddle.net/nax6h/

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
    var oldest = 0;
    for (var i=0, l = group.length; i<l; i++)
    {
        if (group[i].age > oldest)
        {
            oldest = group[i].age;
        }
    }
    return oldest;
}

function living (group)
{
    var livingPeople = [];
    for (var i=0, l = group.length; i<l; i++)
    {
        if (group[i].age)
        {
            livingPeople.push (group[i].name);
        }
    }
    return livingPeople;
}

function oldestLivingPerson (group)
{
    var oldestName = "", oldestYears = 0;
    for (var i=0, l = group.length; i<l; i++)
    {
        if (group[i].age > oldestYears)
        {
            oldestName = (group[i].name);
        }
    }
    return (oldestName);
}


// Given the above data structure. Implement
// a function that will return the oldest age.

oldestAge(people);
console.log ("oldestAge: "+oldestAge(people));
// -> 75

// Also given the above data structure. Implement
// a function that will return and array of the names
// of all living people.

living(people);
console.log ("living: "+living(people));
// -> ['Hank', 'Danny', 'Deborah', 'Kathy', 'Don']

// Also give then data structure implement a function
// that will return the name of the oldest living person.

oldestLivingPerson(people);
console.log ("oldestLivingPerson: "+oldestLivingPerson(people));
// -> 'Kathy'
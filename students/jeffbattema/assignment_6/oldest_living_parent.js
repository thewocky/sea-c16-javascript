// Given the following data structure
// implement a oldestLivingParent method
// that will return the name of the oldest
// living parent.

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
]

function oldestLivingParent (group)
{
    var singleChildren = _.uniq(group, 'parent');
    
    var parents = [];
    _(singleChildren).forEach(function(child)
    {
        _(group).forEach(function(parent)
        {
            if (child.parent === parent.name)
            {
                parents.push (parent);
            }
        });
    });
    
    var oldest = _.max(parents, function(person) {
         return person.age;
        });
    
    return oldest.name;
}


oldestLivingParent(people);
console.log ('oldestLivingParent: '+oldestLivingParent(people));
// -> 'Don'
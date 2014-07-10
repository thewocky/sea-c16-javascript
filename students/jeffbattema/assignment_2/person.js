var maxAge = 115;
var Person = function(name, params)
{
    this.name = name;
    // console.log (name+", "+params);
    this.age = params.age;
    this.employed = params.employed;
    this.parents = params.parents;
    this.isAlive = params.isAlive;
    $("body").append("new person:<br>"+this.name+"; age: "+this.age+"; employed: "+this.employed+"; parents = "+this.parents+"; isAlive = "+this.isAlive);
    this.isDead = function ()
    {
    	if (!this.age || this.age > maxAge)
    	{
    		return "Sadly yes.";
    	} else {
    		return "Hell no!";
    	}
    }
    $("body").append("<br>");
}

var people =
{
	"John":
	{
        age:59,
        employed:true,
        parents:["Jesus","Gloria"]
    },
    "Gloria":{
        age:119,
        employed:true,
        parents:["Bob","Frank"]
    },
    "Steve":{
        employed:false
    },
    "Noah": {
        age:39,
        employed:true
    },
    "Jesus":{
        age:29,
        employed:true,
        parents:["God","Mary"]
    }
};

var group = new Array ();
for (var i in people)
{
    // console.log (i+", "+people[i]);
    group.push (new Person (i, people[i]));
    $("body").append(group);
    $("body").append("<br>");
}

for (var i = 0, len = group.length; i < len; i++)
{
    // console.log (i+", "+people[i]);
    $("body").append("Is "+group[i].name+" dead? "+group[i].isDead());
    $("body").append("<br>");
}

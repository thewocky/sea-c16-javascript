// http://jsfiddle.net/thewocky/9YL7d/

// Implement a decorator function that takes 
// a function as an argument and will track
// how many times the passed function was called.

function countDecorator (func)
{
    var counter = 0;
    closure = function()
    {
        // console.log ("arg?" +arguments+"; "+typeof arguments)
        counter++;
        return func.apply(this, arguments)
    }
    
    closure.callCount = function ()
    {
        return (counter);
    }
    
    return closure;
}

function Add(x, y) {
  return x + y;
}

var Add = countDecorator(Add);

function Add(x, y) {
  return x + y;
}

var Add = countDecorator(Add);

Add(1, 1);
// -> 2 Dont pay attention to this number. The important part is we called the `Add` function once.
Add.callCount();
console.log(Add.callCount());
// -> 1

Add(2, 2);
// -> 4 Dont pay attention to this number either. The important part is we called the `Add` function again.
Add.callCount();
console.log(Add.callCount());
// -> 2
Add(2, 2);
Add(2, 2);
Add(2, 2);
Add(2, 2);
Add(2, 2);
Add(2, 2);
Add(2, 2);
console.log(Add.callCount());
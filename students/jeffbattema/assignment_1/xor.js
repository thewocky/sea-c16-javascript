var firstName, lastName;

function preferredName (arg1, arg2)
{

return (arg1 && arg2 || !arg1 && !arg2) ? false : (arg1?arg1:"" + arg2?arg2:"");

}


firstName = "Hank";

preferredName (firstName, lastName);

lastName = 'Yates';

preferredName (firstName, lastName);
// -> false

firstName = '';

preferredName (firstName, lastName);
// -> 'Yates'

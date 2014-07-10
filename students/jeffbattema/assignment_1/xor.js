function preferredName (firstName, lastName)
{
return (!firstName == !lastName) ? false : (firstName || lastName);
}
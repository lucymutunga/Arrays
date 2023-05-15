let employees=[
    {
        firstName:"john",
        lastName:"doe",
        age:27,
        joineddate:'December 15,2017'
    },
    {
        firstName:'Ana',
        lastName:'Smith',
        age:25,
        joineddate:'january 15,2019'
    },
    {
        firstName:'Zion',
        latName:'Albert',
        age:30,
        joineddate:'February 15,2011'

    }
];

employees.sort((a,b)=>a.age-b.age);
console.log(employees);
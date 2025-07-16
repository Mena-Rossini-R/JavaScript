/*

JS is a high-level, interpretted scripting language used to make web pages interactive.

It runs in the browser and can handle tasks like updating content, validating forms, creating animations, and communicating with servers.

is a single threaded , synchronous (can execute the n+1 line only if the nth line got over)

Runs in browsers (client-side), but also on servers (Node.js).

Created by Brendan Eich in 1995.

Can manipulate HTML, CSS, and handle logic in web applications.


*/

/*

For every js prog a GEC is created which have two space...one to store the variables..other to keep the code 

                                            GLOBAL EXECUTION CONTEXT (GEC)
             --------------------------------------------------------------------------------------------
            |                                              |                                            |
            |    Variable Environment  (memory component)  |     Thread of execution(code component)    |
            |            memory creation phase             |                                            |
            ---------------------------------------------------------------------------------------------


1) in memory creation phase - JS checks the prog line by line and allocates the memory to the variables and functions in the code..for an example in the below code...


*/
var x = 4;

function square(num) {
    var ans = num * num;
    return ans;
}

var prog1 = square(x);
var prog2 = square(2);


/*                        MEMORY ALLOCATION PHASE - things are stored in key : value pair


x = undefined;
square =  {
    var ans = num * num;
    return ans;
}


# memory for variable x : variables are given a default 'UNDEFINED' value

# memory for function square : whole lines are functions are stored in the alocated memory



                                            GLOBAL EXECUTION CONTEXT (GEC)
             --------------------------------------------------------------------------------------------
            |                                              |                                            |
            |    Variable Environment  (memory component)  |     Thread of execution(code component)    |
            ---------------------------------------------------------------------------------------------
            |                                              |                                            |
            |    var x = undefined                         |                                            |
            |                                              |                                            |
            |    square = {....}                           |                                            |
            |                                              |                                            |
            |    var prog1  = undefined                    |                                            |
            |                                              |                                            |
            |    var prog2 = undefined                     |                                            |
            ---------------------------------------------------------------------------------------------




*/

/*                      CODE EXECUTION PHASE - line by line

1 -  x = 4       ------------> 4 gets stored in the memory of x

2 - function gets skipped

3 - prog1 = square(x);  ----->  when a function is called a NEW GEC is created 



                                            GLOBAL EXECUTION CONTEXT 1 (GEC)
             ---------------------------------------------------------------------------------------------------
            |                                              |                                                    |
            |    Variable Environment  (memory component)  |     Thread of execution(code component)            |
            ----------------------------------------------------------------------------------------------------
            |                                              |                                                    |
            |    var x = 4                                 |                                                    |
            |                                              |                                                    |
            |    square = {....}                           |                GEC 2                               |
            |                                              |    --------------------------------------------    |
            |                                              |    |                       |                   |   |
            |                                              |    |  var num = undefined  |                   |   |    
            |                                              |    |  var ans = undefined  |                   |   |
            |                                              |    ---------------------------------------------   |  
            |    var prog1  = undefined                    |                                                    |
            |                                              |                                                    |
            |    var prog2 = undefined                     |                                                    |
            -----------------------------------------------------------------------------------------------------

 
4 - when the function in GEC 2 gets over - GEC 2 terminates and return the control to the GEC1

5 - GEC 1 saves the value at prog1

6 - happens the same for prog2

---------------------------------------------------------------------------------------------------------------------------

WATCH - https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3&ab_channel=AkshaySaini

*/


/*

Call stack - maintain order of execution of the excution content

execution context stack; program stack; control stack; runtime stack; machiene stack

*/

/*
Functions using ARROW FUNCTIONS works the same as variables...they dont store the whole code in he memory section

find the difference btw UNDEFINED and NOT DEFINED


*/
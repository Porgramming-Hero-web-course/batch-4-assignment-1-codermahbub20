Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.?

Ans: Type Guards in TypeScript are features that allow developers to narrow the type of a variable within conditional blocks. Type guards in typescript are a technique which is used to get information about the type of the object within a conditional block. As we know that typescript is statically typed and we get to know about most of the issues during compile time only ,so here type guards come into play as they help detect more runtime failures that the TypeScript framework can not handle. The Type guard methods perform in the runtime and return a boolean value.

There are various methods to use a type of guard.:

        The typeof keyword
        The instanceof keyword
        The in keyword
        Equality narrowing type guard

*The typeof Keyword*
By the word typeof we know that it is used to determine the type of the keyword. The typeof is used to determine the following types:

            * String
            * bigint
            * symbol
            * undefined
            * function
            * number

*The Instanceof Keyword*
The Instanceof Keyword is an advanced version of the typeof type guard.The instanceof type is used to check whether the given object has properties similar to the specific class or constructor function according to which the operator returns a boolean value.

*The in Type Guard*
The in type does a check if a property is present on an object and can be used as a type guard.The in type guard is helpful for functional validations and avoiding runtime issues.

*Equality Narrowing Type Guard*
Equality narrowing type guards return a value based on the type of the variable ,it returns true if the variables are same else it returns false. It is mainly used to check the value for an expression.
 
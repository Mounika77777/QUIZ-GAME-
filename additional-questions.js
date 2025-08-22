// Additional questions for other courses
const additionalQuestions = {
    cpp: {
        easy: [
            {
                question: "Which header file is required for cout in C++?",
                options: ["<stdio.h>", "<iostream>", "<string.h>", "<conio.h>"],
                correct: 1,
                explanation: "<iostream> header file contains declarations for cout, cin, and other stream objects."
            },
            {
                question: "What is the correct way to declare a class in C++?",
                options: ["class MyClass {}", "Class MyClass {}", "define MyClass {}", "struct MyClass {}"],
                correct: 0,
                explanation: "Classes in C++ are declared using the 'class' keyword followed by the class name and body."
            },
            {
                question: "Which operator is used for scope resolution in C++?",
                options: ["::", ".", "->", "::>"],
                correct: 0,
                explanation: "The scope resolution operator (::) is used to access global variables or class members."
            },
            {
                question: "What is the default access specifier for class members in C++?",
                options: ["public", "private", "protected", "internal"],
                correct: 1,
                explanation: "Class members are private by default in C++, unlike struct members which are public by default."
            },
            {
                question: "Which keyword is used to create objects in C++?",
                options: ["create", "new", "make", "object"],
                correct: 1,
                explanation: "The 'new' keyword is used for dynamic memory allocation and object creation in C++."
            },
            {
                question: "What is the purpose of constructor in C++?",
                options: ["Destroy objects", "Initialize objects", "Copy objects", "Delete objects"],
                correct: 1,
                explanation: "Constructors are special member functions that initialize objects when they are created."
            },
            {
                question: "Which symbol is used for single-line comments in C++?",
                options: ["//", "/*", "#", "--"],
                correct: 0,
                explanation: "// is used for single-line comments in C++."
            },
            {
                question: "What is inheritance in C++?",
                options: ["Creating new classes from existing classes", "Copying objects", "Deleting classes", "Hiding data"],
                correct: 0,
                explanation: "Inheritance allows creating new classes based on existing classes, inheriting their properties and methods."
            },
            {
                question: "Which operator is overloaded for output in C++?",
                options: [">>", "<<", "->", "::"],
                correct: 1,
                explanation: "The << operator is overloaded for output operations with cout."
            },
            {
                question: "What is the correct syntax to include namespace std?",
                options: ["using namespace std;", "include namespace std;", "import namespace std;", "with namespace std;"],
                correct: 0,
                explanation: "'using namespace std;' brings all standard library names into the current scope."
            }
        ],
        medium: [
            {
                question: "What is function overloading in C++?",
                options: ["Functions with same name but different parameters", "Functions that call themselves", "Functions with multiple return types", "Functions that override base class"],
                correct: 0,
                explanation: "Function overloading allows multiple functions with the same name but different parameter lists."
            },
            {
                question: "What is the difference between public and private inheritance?",
                options: ["No difference", "Access level of inherited members", "Speed of inheritance", "Memory usage"],
                correct: 1,
                explanation: "Public inheritance maintains access levels, private inheritance makes all inherited members private."
            },
            {
                question: "What is a virtual function in C++?",
                options: ["Function that doesn't exist", "Function that can be overridden", "Function without body", "Function with virtual parameters"],
                correct: 1,
                explanation: "Virtual functions enable polymorphism by allowing derived classes to override base class functions."
            },
            {
                question: "What is the purpose of destructor in C++?",
                options: ["Create objects", "Initialize objects", "Clean up objects", "Copy objects"],
                correct: 2,
                explanation: "Destructors are called when objects are destroyed to clean up resources and perform cleanup operations."
            },
            {
                question: "What is operator overloading in C++?",
                options: ["Using operators multiple times", "Giving new meaning to operators", "Overloading functions", "Creating new operators"],
                correct: 1,
                explanation: "Operator overloading allows defining custom behavior for operators when used with user-defined types."
            },
            {
                question: "What is the difference between struct and class in C++?",
                options: ["No difference", "Default access specifier", "Memory allocation", "Inheritance capability"],
                correct: 1,
                explanation: "The only difference is default access: struct members are public by default, class members are private."
            },
            {
                question: "What is a copy constructor?",
                options: ["Constructor that copies classes", "Constructor that takes object of same class as parameter", "Constructor that copies functions", "Constructor that duplicates memory"],
                correct: 1,
                explanation: "Copy constructor creates a new object as a copy of an existing object of the same class."
            },
            {
                question: "What is polymorphism in C++?",
                options: ["Multiple inheritance", "One interface, multiple implementations", "Multiple constructors", "Multiple destructors"],
                correct: 1,
                explanation: "Polymorphism allows objects of different types to be treated as objects of a common base type."
            },
            {
                question: "What is the purpose of friend function in C++?",
                options: ["Access private members of class", "Create friendship between classes", "Share memory between functions", "Optimize function calls"],
                correct: 0,
                explanation: "Friend functions can access private and protected members of a class from outside the class."
            },
            {
                question: "What is multiple inheritance in C++?",
                options: ["Class inheriting from multiple base classes", "Multiple objects of same class", "Class with multiple constructors", "Class with multiple functions"],
                correct: 0,
                explanation: "Multiple inheritance allows a class to inherit from more than one base class."
            }
        ],
        hard: [
            {
                question: "What is the diamond problem in C++ multiple inheritance?",
                options: ["Memory leak issue", "Ambiguity when inheriting from classes with common base", "Performance issue", "Compilation error"],
                correct: 1,
                explanation: "Diamond problem occurs when a class inherits from two classes that share a common base class, causing ambiguity."
            },
            {
                question: "What is RAII in C++?",
                options: ["Resource Acquisition Is Initialization", "Rapid Application Interface Integration", "Random Access Iterator Implementation", "Runtime Automatic Instance Initialization"],
                correct: 0,
                explanation: "RAII ties resource management to object lifetime, ensuring resources are properly cleaned up."
            },
            {
                question: "What is the difference between shallow copy and deep copy?",
                options: ["No difference", "Shallow copies pointers, deep copies pointed-to data", "Deep copy is faster", "Shallow copy uses more memory"],
                correct: 1,
                explanation: "Shallow copy copies pointer values, deep copy creates new copies of pointed-to data."
            },
            {
                question: "What is a pure virtual function in C++?",
                options: ["Virtual function with no implementation", "Function that's very clean", "Function without parameters", "Function that returns void"],
                correct: 0,
                explanation: "Pure virtual function (= 0) has no implementation in base class and must be overridden in derived classes."
            },
            {
                question: "What is the purpose of explicit keyword in C++?",
                options: ["Make functions public", "Prevent implicit conversions", "Enable explicit inheritance", "Declare explicit variables"],
                correct: 1,
                explanation: "explicit keyword prevents implicit type conversions for constructors and conversion operators."
            },
            {
                question: "What is template specialization in C++?",
                options: ["Making templates faster", "Providing specific implementation for particular types", "Creating special templates", "Optimizing template code"],
                correct: 1,
                explanation: "Template specialization allows providing a specific implementation of a template for particular types."
            },
            {
                question: "What is the difference between delete and delete[] in C++?",
                options: ["No difference", "delete for single objects, delete[] for arrays", "delete[] is faster", "delete is deprecated"],
                correct: 1,
                explanation: "delete is used for single objects, delete[] is used for arrays allocated with new[]."
            },
            {
                question: "What is move semantics in C++11?",
                options: ["Moving objects in memory", "Transferring ownership of resources", "Moving functions between classes", "Changing object location"],
                correct: 1,
                explanation: "Move semantics allows transferring ownership of resources from one object to another without copying."
            },
            {
                question: "What is the purpose of mutable keyword in C++?",
                options: ["Make variables changeable", "Allow modification in const member functions", "Enable mutation operations", "Create mutable objects"],
                correct: 1,
                explanation: "mutable allows a member variable to be modified even in const member functions."
            },
            {
                question: "What is SFINAE in C++?",
                options: ["Substitution Failure Is Not An Error", "Standard Function Interface And Execution", "Structured Function Implementation And Enhancement", "System Function Integration And Evaluation"],
                correct: 0,
                explanation: "SFINAE is a principle where template substitution failures don't cause compilation errors, enabling template metaprogramming."
            }
        ]
    },
    python: {
        easy: [
            {
                question: "How do you print 'Hello World' in Python?",
                options: ["echo('Hello World')", "print('Hello World')", "console.log('Hello World')", "printf('Hello World')"],
                correct: 1,
                explanation: "print() is the built-in function used to display output in Python."
            },
            {
                question: "Which of the following is the correct file extension for Python files?",
                options: [".py", ".python", ".pt", ".pyt"],
                correct: 0,
                explanation: ".py is the standard file extension for Python source files."
            },
            {
                question: "How do you create a comment in Python?",
                options: ["// comment", "/* comment */", "# comment", "-- comment"],
                correct: 2,
                explanation: "# is used to create single-line comments in Python."
            },
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["function", "def", "func", "define"],
                correct: 1,
                explanation: "'def' keyword is used to define functions in Python."
            },
            {
                question: "What is the correct way to create a list in Python?",
                options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = <1, 2, 3>"],
                correct: 1,
                explanation: "Square brackets [] are used to create lists in Python."
            },
            {
                question: "Which operator is used for exponentiation in Python?",
                options: ["^", "**", "exp", "pow"],
                correct: 1,
                explanation: "** operator is used for exponentiation (power) in Python."
            },
            {
                question: "How do you get user input in Python?",
                options: ["input()", "read()", "get()", "scan()"],
                correct: 0,
                explanation: "input() function is used to get user input in Python."
            },
            {
                question: "What is the correct syntax for an if statement in Python?",
                options: ["if (condition):", "if condition then:", "if condition:", "if {condition}:"],
                correct: 2,
                explanation: "Python uses 'if condition:' syntax without parentheses or 'then' keyword."
            },
            {
                question: "Which method is used to add an element to the end of a list?",
                options: ["add()", "append()", "insert()", "push()"],
                correct: 1,
                explanation: "append() method adds an element to the end of a list."
            },
            {
                question: "What does 'len()' function do in Python?",
                options: ["Returns length of an object", "Creates a new list", "Sorts a list", "Removes elements"],
                correct: 0,
                explanation: "len() function returns the number of items in an object like string, list, tuple, etc."
            }
        ],
        medium: [
            {
                question: "What is the difference between a list and a tuple in Python?",
                options: ["No difference", "Lists are mutable, tuples are immutable", "Tuples are faster", "Lists use more memory"],
                correct: 1,
                explanation: "Lists can be modified after creation (mutable), while tuples cannot be changed (immutable)."
            },
            {
                question: "What is list comprehension in Python?",
                options: ["A way to understand lists", "Concise way to create lists", "Method to compress lists", "Function to analyze lists"],
                correct: 1,
                explanation: "List comprehension provides a concise way to create lists using a single line of code."
            },
            {
                question: "What is the purpose of __init__ method in Python classes?",
                options: ["Initialize objects", "Delete objects", "Copy objects", "Compare objects"],
                correct: 0,
                explanation: "__init__ is a constructor method that initializes newly created objects."
            },
            {
                question: "What is the difference between '==' and 'is' operators?",
                options: ["No difference", "== compares values, 'is' compares identity", "'is' is faster", "== is deprecated"],
                correct: 1,
                explanation: "== compares if values are equal, 'is' compares if objects are the same instance in memory."
            },
            {
                question: "What is a lambda function in Python?",
                options: ["Named function", "Anonymous function", "Class method", "Built-in function"],
                correct: 1,
                explanation: "Lambda functions are anonymous functions defined using the lambda keyword."
            },
            {
                question: "What does the 'global' keyword do in Python?",
                options: ["Makes variable accessible everywhere", "Declares global variable inside function", "Creates global scope", "Imports global modules"],
                correct: 1,
                explanation: "'global' keyword allows modifying a global variable inside a function."
            },
            {
                question: "What is the purpose of try-except blocks?",
                options: ["Test code performance", "Handle exceptions/errors", "Create loops", "Define functions"],
                correct: 1,
                explanation: "try-except blocks are used for exception handling to catch and handle errors gracefully."
            },
            {
                question: "What is the difference between append() and extend() methods?",
                options: ["No difference", "append() adds single element, extend() adds multiple elements", "extend() is faster", "append() is deprecated"],
                correct: 1,
                explanation: "append() adds a single element, extend() adds all elements from an iterable."
            },
            {
                question: "What is a dictionary in Python?",
                options: ["Ordered collection", "Key-value pair collection", "Numerical collection", "String collection"],
                correct: 1,
                explanation: "Dictionary is a collection of key-value pairs, similar to hash maps or associative arrays."
            },
            {
                question: "What does the 'yield' keyword do in Python?",
                options: ["Returns value and pauses function", "Stops function execution", "Creates new function", "Imports modules"],
                correct: 0,
                explanation: "'yield' creates a generator function that returns values one at a time and can be resumed."
            }
        ],
        hard: [
            {
                question: "What is the Global Interpreter Lock (GIL) in Python?",
                options: ["Security feature", "Mutex that prevents multiple threads from executing Python code simultaneously", "Memory management system", "Import mechanism"],
                correct: 1,
                explanation: "GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously."
            },
            {
                question: "What is the difference between deep copy and shallow copy?",
                options: ["No difference", "Deep copy creates new object with copies of nested objects", "Shallow copy is faster", "Deep copy uses less memory"],
                correct: 1,
                explanation: "Shallow copy creates new object but references to nested objects, deep copy creates new object with copies of all nested objects."
            },
            {
                question: "What are decorators in Python?",
                options: ["Functions that modify other functions", "Class inheritance mechanism", "Error handling system", "Import statements"],
                correct: 0,
                explanation: "Decorators are functions that modify or enhance other functions without changing their source code."
            },
            {
                question: "What is metaclass in Python?",
                options: ["Class that creates other classes", "Parent class", "Abstract class", "Static class"],
                correct: 0,
                explanation: "Metaclass is a class whose instances are classes themselves, controlling class creation."
            },
            {
                question: "What is the purpose of __slots__ in Python classes?",
                options: ["Define class methods", "Restrict attribute creation and save memory", "Create class inheritance", "Handle exceptions"],
                correct: 1,
                explanation: "__slots__ restricts the attributes that can be created and can save memory by avoiding __dict__."
            },
            {
                question: "What is the difference between @staticmethod and @classmethod?",
                options: ["No difference", "@staticmethod doesn't receive implicit first argument, @classmethod receives class", "@classmethod is faster", "@staticmethod is deprecated"],
                correct: 1,
                explanation: "@staticmethod doesn't receive any implicit first argument, @classmethod receives the class as first argument."
            },
            {
                question: "What is monkey patching in Python?",
                options: ["Debugging technique", "Dynamically modifying classes or modules at runtime", "Performance optimization", "Error handling method"],
                correct: 1,
                explanation: "Monkey patching is dynamically modifying a class or module at runtime to change or extend behavior."
            },
            {
                question: "What is the purpose of context managers in Python?",
                options: ["Manage execution context and ensure cleanup", "Handle multiple contexts", "Create new contexts", "Debug context issues"],
                correct: 0,
                explanation: "Context managers ensure proper acquisition and release of resources using __enter__ and __exit__ methods."
            },
            {
                question: "What is the difference between __str__ and __repr__ methods?",
                options: ["No difference", "__str__ for human-readable, __repr__ for developer-readable", "__repr__ is faster", "__str__ is deprecated"],
                correct: 1,
                explanation: "__str__ returns human-readable string, __repr__ returns unambiguous string representation for developers."
            },
            {
                question: "What is asyncio in Python?",
                options: ["Synchronous programming library", "Asynchronous programming framework", "File I/O library", "Network programming tool"],
                correct: 1,
                explanation: "asyncio is a library for writing concurrent code using async/await syntax for asynchronous programming."
            }
        ]
    },
    java: {
        easy: [
            {
                question: "What is the correct way to declare a variable in Java?",
                options: ["var x = 5;", "int x = 5;", "variable x = 5;", "x = 5;"],
                correct: 1,
                explanation: "Java requires explicit type declaration: 'int x = 5;' where 'int' is the data type."
            },
            {
                question: "Which keyword is used to create a class in Java?",
                options: ["class", "Class", "define", "create"],
                correct: 0,
                explanation: "The 'class' keyword is used to define a new class in Java."
            },
            {
                question: "What is the entry point of a Java program?",
                options: ["main()", "start()", "begin()", "run()"],
                correct: 0,
                explanation: "public static void main(String[] args) is the entry point of any Java program."
            },
            {
                question: "Which data type is used for whole numbers in Java?",
                options: ["float", "double", "int", "String"],
                correct: 2,
                explanation: "int is used for whole numbers, while float and double are for decimal numbers."
            },
            {
                question: "What is the correct way to print in Java?",
                options: ["print()", "System.out.println()", "console.log()", "printf()"],
                correct: 1,
                explanation: "System.out.println() is used to print output in Java."
            },
            {
                question: "Which operator is used for comparison in Java?",
                options: ["=", "==", "===", "equals"],
                correct: 1,
                explanation: "== is used for comparison, while = is used for assignment."
            },
            {
                question: "What is an array in Java?",
                options: ["A collection of different data types", "A collection of same data types", "A single variable", "A method"],
                correct: 1,
                explanation: "An array is a collection of elements of the same data type stored in contiguous memory."
            },
            {
                question: "Which keyword is used for inheritance in Java?",
                options: ["extends", "implements", "inherits", "super"],
                correct: 0,
                explanation: "The 'extends' keyword is used to inherit from a parent class."
            },
            {
                question: "What is a constructor in Java?",
                options: ["A method that destroys objects", "A method that initializes objects", "A variable", "A class"],
                correct: 1,
                explanation: "A constructor is a special method that initializes objects when they are created."
            },
            {
                question: "Which access modifier provides the most restrictive access?",
                options: ["public", "private", "protected", "default"],
                correct: 1,
                explanation: "private provides the most restrictive access, only accessible within the same class."
            }
        ],
        medium: [
            {
                question: "What is method overloading in Java?",
                options: ["Methods with same name but different parameters", "Methods that call themselves", "Methods with multiple return types", "Methods that override base class"],
                correct: 0,
                explanation: "Method overloading allows multiple methods with the same name but different parameter lists."
            },
            {
                question: "What is the difference between == and .equals()?",
                options: ["No difference", "== compares references, .equals() compares content", ".equals() is faster", "== is deprecated"],
                correct: 1,
                explanation: "== compares object references, while .equals() compares the actual content of objects."
            },
            {
                question: "What is an interface in Java?",
                options: ["A class", "A blueprint for a class", "A method", "A variable"],
                correct: 1,
                explanation: "An interface is a blueprint for a class that contains only abstract methods and constants."
            },
            {
                question: "What is the purpose of the 'final' keyword?",
                options: ["Make variables constant", "End program execution", "Create final methods", "Define final classes"],
                correct: 0,
                explanation: "The 'final' keyword makes variables constant and prevents them from being changed."
            },
            {
                question: "What is exception handling in Java?",
                options: ["A way to handle errors", "A way to create errors", "A way to ignore errors", "A way to debug code"],
                correct: 0,
                explanation: "Exception handling allows programs to handle runtime errors gracefully using try-catch blocks."
            },
            {
                question: "What is the difference between ArrayList and Array?",
                options: ["No difference", "ArrayList is dynamic, Array has fixed size", "Array is faster", "ArrayList is deprecated"],
                correct: 1,
                explanation: "ArrayList can grow and shrink dynamically, while arrays have a fixed size."
            },
            {
                question: "What is a static method in Java?",
                options: ["A method that doesn't move", "A method that belongs to class, not instance", "A method that's always running", "A method that can't be called"],
                correct: 1,
                explanation: "Static methods belong to the class itself, not to instances of the class."
            },
            {
                question: "What is the purpose of the 'super' keyword?",
                options: ["Call parent class methods", "Create super classes", "Access super variables", "Define super methods"],
                correct: 0,
                explanation: "The 'super' keyword is used to call methods and constructors from the parent class."
            },
            {
                question: "What is polymorphism in Java?",
                options: ["Multiple inheritance", "One interface, multiple implementations", "Multiple constructors", "Multiple variables"],
                correct: 1,
                explanation: "Polymorphism allows objects of different types to be treated as objects of a common base type."
            },
            {
                question: "What is the difference between String and StringBuilder?",
                options: ["No difference", "StringBuilder is mutable, String is immutable", "String is faster", "StringBuilder is deprecated"],
                correct: 1,
                explanation: "StringBuilder is mutable and can be modified, while String objects are immutable."
            }
        ],
        hard: [
            {
                question: "What is the difference between checked and unchecked exceptions?",
                options: ["No difference", "Checked exceptions must be handled, unchecked don't", "Unchecked are faster", "Checked are deprecated"],
                correct: 1,
                explanation: "Checked exceptions must be explicitly handled or declared, unchecked exceptions don't require explicit handling."
            },
            {
                question: "What is garbage collection in Java?",
                options: ["Manual memory management", "Automatic memory management", "Memory allocation", "Memory optimization"],
                correct: 1,
                explanation: "Garbage collection automatically frees memory by removing objects that are no longer referenced."
            },
            {
                question: "What is the difference between shallow copy and deep copy?",
                options: ["No difference", "Shallow copies references, deep copies objects", "Deep copy is faster", "Shallow copy uses less memory"],
                correct: 1,
                explanation: "Shallow copy copies references to objects, deep copy creates new copies of all objects."
            },
            {
                question: "What is reflection in Java?",
                options: ["Mirror effect", "Examining and modifying classes at runtime", "Light reflection", "Class reflection"],
                correct: 1,
                explanation: "Reflection allows examining and modifying classes, methods, and fields at runtime."
            },
            {
                question: "What is the purpose of volatile keyword?",
                options: ["Make variables visible to all threads", "Make variables constant", "Make variables faster", "Make variables private"],
                correct: 0,
                explanation: "volatile ensures that changes to a variable are immediately visible to all threads."
            },
            {
                question: "What is the difference between HashMap and HashTable?",
                options: ["No difference", "HashMap is not synchronized, HashTable is", "HashTable is faster", "HashMap is deprecated"],
                correct: 1,
                explanation: "HashMap is not synchronized and allows null keys/values, HashTable is synchronized and doesn't allow nulls."
            },
            {
                question: "What is the purpose of transient keyword?",
                options: ["Make variables temporary", "Exclude variables from serialization", "Make variables transient", "Create temporary objects"],
                correct: 1,
                explanation: "transient keyword excludes variables from serialization process."
            },
            {
                question: "What is the difference between wait() and sleep()?",
                options: ["No difference", "wait() releases lock, sleep() doesn't", "sleep() is faster", "wait() is deprecated"],
                correct: 1,
                explanation: "wait() releases the object lock, while sleep() doesn't release any locks."
            },
            {
                question: "What is the purpose of synchronized keyword?",
                options: ["Make methods faster", "Ensure thread safety", "Create synchronized objects", "Optimize performance"],
                correct: 1,
                explanation: "synchronized keyword ensures that only one thread can execute a method or block at a time."
            },
            {
                question: "What is the difference between Comparable and Comparator?",
                options: ["No difference", "Comparable is natural ordering, Comparator is custom ordering", "Comparator is faster", "Comparable is deprecated"],
                correct: 1,
                explanation: "Comparable provides natural ordering within the class, Comparator provides custom ordering externally."
            }
        ]
    },
    react: {
        easy: [
            {
                question: "What is React?",
                options: ["A programming language", "A JavaScript library for building user interfaces", "A database", "A web server"],
                correct: 1,
                explanation: "React is a JavaScript library developed by Facebook for building user interfaces."
            },
            {
                question: "What is a component in React?",
                options: ["A function", "A reusable piece of UI", "A variable", "A method"],
                correct: 1,
                explanation: "Components are reusable pieces of UI that can be composed to build complex interfaces."
            },
            {
                question: "How do you create a functional component in React?",
                options: ["function MyComponent() {}", "class MyComponent {}", "component MyComponent() {}", "create MyComponent() {}"],
                correct: 0,
                explanation: "Functional components are created using function declarations or arrow functions."
            },
            {
                question: "What is JSX in React?",
                options: ["A programming language", "JavaScript XML syntax", "A database", "A framework"],
                correct: 1,
                explanation: "JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript."
            },
            {
                question: "How do you render a component in React?",
                options: ["<MyComponent />", "render MyComponent", "show MyComponent", "display MyComponent"],
                correct: 0,
                explanation: "Components are rendered using JSX syntax with angle brackets."
            },
            {
                question: "What is the purpose of props in React?",
                options: ["To store state", "To pass data between components", "To create functions", "To handle events"],
                correct: 1,
                explanation: "Props (properties) are used to pass data from parent to child components."
            },
            {
                question: "How do you access props in a functional component?",
                options: ["this.props", "props", "this.state", "state"],
                correct: 1,
                explanation: "In functional components, props are accessed directly as a parameter."
            },
            {
                question: "What is state in React?",
                options: ["A database", "Component's internal data", "A function", "A variable"],
                correct: 1,
                explanation: "State is a component's internal data that can change over time."
            },
            {
                question: "How do you update state in a functional component?",
                options: ["this.setState()", "useState()", "setState()", "updateState()"],
                correct: 1,
                explanation: "useState() hook is used to manage state in functional components."
            },
            {
                question: "What is the purpose of useEffect hook?",
                options: ["To create effects", "To handle side effects", "To create components", "To handle events"],
                correct: 1,
                explanation: "useEffect hook is used to handle side effects in functional components."
            }
        ],
        medium: [
            {
                question: "What is the difference between props and state?",
                options: ["No difference", "Props are read-only, state is mutable", "State is faster", "Props are deprecated"],
                correct: 1,
                explanation: "Props are read-only and passed from parent, state is mutable and managed internally."
            },
            {
                question: "What is a controlled component in React?",
                options: ["A component with state", "A component whose value is controlled by React state", "A component with props", "A component with effects"],
                correct: 1,
                explanation: "A controlled component's value is controlled by React state rather than DOM."
            },
            {
                question: "What is the purpose of keys in React lists?",
                options: ["For styling", "To help React identify which items have changed", "For performance", "For accessibility"],
                correct: 1,
                explanation: "Keys help React identify which items have changed, been added, or been removed."
            },
            {
                question: "What is the difference between useState and useReducer?",
                options: ["No difference", "useState for simple state, useReducer for complex state", "useReducer is faster", "useState is deprecated"],
                correct: 1,
                explanation: "useState is for simple state, useReducer is for complex state logic."
            },
            {
                question: "What is the purpose of useContext hook?",
                options: ["To create context", "To consume context values", "To provide context", "To manage context"],
                correct: 1,
                explanation: "useContext hook is used to consume values from React context."
            },
            {
                question: "What is the difference between useCallback and useMemo?",
                options: ["No difference", "useCallback for functions, useMemo for values", "useMemo is faster", "useCallback is deprecated"],
                correct: 1,
                explanation: "useCallback memoizes functions, useMemo memoizes computed values."
            },
            {
                question: "What is the purpose of React.memo?",
                options: ["To create components", "To optimize performance by preventing unnecessary re-renders", "To handle events", "To manage state"],
                correct: 1,
                explanation: "React.memo is a higher-order component that prevents unnecessary re-renders."
            },
            {
                question: "What is the difference between class and functional components?",
                options: ["No difference", "Functional components use hooks, class components use lifecycle methods", "Class components are faster", "Functional components are deprecated"],
                correct: 1,
                explanation: "Functional components use hooks, class components use lifecycle methods and this.state."
            },
            {
                question: "What is the purpose of useRef hook?",
                options: ["To create references", "To access DOM elements or persist values", "To handle events", "To manage state"],
                correct: 1,
                explanation: "useRef is used to access DOM elements directly or persist values between renders."
            },
            {
                question: "What is the difference between shallow and deep comparison?",
                options: ["No difference", "Shallow compares references, deep compares values", "Deep comparison is faster", "Shallow comparison is deprecated"],
                correct: 1,
                explanation: "Shallow comparison checks if references are the same, deep comparison checks actual values."
            }
        ],
        hard: [
            {
                question: "What is the Virtual DOM in React?",
                options: ["A real DOM", "A lightweight copy of the real DOM", "A database", "A framework"],
                correct: 1,
                explanation: "Virtual DOM is a lightweight copy of the real DOM that React uses for efficient updates."
            },
            {
                question: "What is the difference between React.memo and useMemo?",
                options: ["No difference", "React.memo for components, useMemo for values", "useMemo is faster", "React.memo is deprecated"],
                correct: 1,
                explanation: "React.memo is for component memoization, useMemo is for value memoization."
            },
            {
                question: "What is the purpose of Error Boundaries in React?",
                options: ["To catch errors", "To catch JavaScript errors in component trees", "To handle events", "To manage state"],
                correct: 1,
                explanation: "Error Boundaries catch JavaScript errors anywhere in their child component tree."
            },
            {
                question: "What is the difference between controlled and uncontrolled components?",
                options: ["No difference", "Controlled by React state vs controlled by DOM", "Uncontrolled are faster", "Controlled are deprecated"],
                correct: 1,
                explanation: "Controlled components are managed by React state, uncontrolled components are managed by DOM."
            },
            {
                question: "What is the purpose of React.lazy?",
                options: ["To create lazy components", "To enable code splitting and lazy loading", "To handle events", "To manage state"],
                correct: 1,
                explanation: "React.lazy enables code splitting and lazy loading of components."
            },
            {
                question: "What is the difference between useLayoutEffect and useEffect?",
                options: ["No difference", "useLayoutEffect fires synchronously, useEffect fires asynchronously", "useEffect is faster", "useLayoutEffect is deprecated"],
                correct: 1,
                explanation: "useLayoutEffect fires synchronously after DOM mutations, useEffect fires asynchronously."
            },
            {
                question: "What is the purpose of React.forwardRef?",
                options: ["To create refs", "To forward refs to child components", "To handle events", "To manage state"],
                correct: 1,
                explanation: "React.forwardRef allows components to forward refs to their children."
            },
            {
                question: "What is the difference between React.Fragment and div?",
                options: ["No difference", "Fragment doesn't create extra DOM nodes", "div is faster", "Fragment is deprecated"],
                correct: 1,
                explanation: "React.Fragment groups elements without creating extra DOM nodes."
            },
            {
                question: "What is the purpose of React.PureComponent?",
                options: ["To create pure components", "To optimize performance with shallow comparison", "To handle events", "To manage state"],
                correct: 1,
                explanation: "React.PureComponent implements shouldComponentUpdate with shallow comparison."
            },
            {
                question: "What is the difference between React.StrictMode and regular mode?",
                options: ["No difference", "StrictMode enables additional checks and warnings", "Regular mode is faster", "StrictMode is deprecated"],
                correct: 1,
                explanation: "React.StrictMode enables additional checks and warnings for potential problems."
            }
        ]
    },
    html: {
        easy: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
                correct: 0,
                explanation: "HTML stands for Hyper Text Markup Language, the standard markup language for web pages."
            },
            {
                question: "Which tag is used to create a heading in HTML?",
                options: ["<h1>", "<head>", "<header>", "<heading>"],
                correct: 0,
                explanation: "<h1> to <h6> tags are used to create headings, with <h1> being the largest."
            },
            {
                question: "What is the correct HTML structure?",
                options: ["<html><head><body>", "<html><body><head>", "<head><html><body>", "<body><head><html>"],
                correct: 0,
                explanation: "The correct structure is <html><head></head><body></body></html>."
            },
            {
                question: "Which tag is used to create a paragraph in HTML?",
                options: ["<p>", "<para>", "<paragraph>", "<text>"],
                correct: 0,
                explanation: "<p> tag is used to create paragraphs in HTML."
            },
            {
                question: "How do you create a link in HTML?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                correct: 1,
                explanation: "<a> tag is used to create hyperlinks in HTML."
            },
            {
                question: "Which attribute is used to specify the URL in a link?",
                options: ["url", "link", "href", "src"],
                correct: 2,
                explanation: "href attribute specifies the destination URL for a link."
            },
            {
                question: "How do you add an image in HTML?",
                options: ["<img>", "<image>", "<picture>", "<photo>"],
                correct: 0,
                explanation: "<img> tag is used to embed images in HTML."
            },
            {
                question: "Which attribute is required for the img tag?",
                options: ["src", "alt", "width", "height"],
                correct: 0,
                explanation: "src attribute is required to specify the image source URL."
            },
            {
                question: "How do you create a list in HTML?",
                options: ["<list>", "<ul> or <ol>", "<li>", "<item>"],
                correct: 1,
                explanation: "<ul> creates unordered lists, <ol> creates ordered lists."
            },
            {
                question: "Which tag is used for list items?",
                options: ["<item>", "<li>", "<list>", "<ul>"],
                correct: 1,
                explanation: "<li> tag is used to define list items within <ul> or <ol>."
            }
        ],
        medium: [
            {
                question: "What is the difference between <div> and <span>?",
                options: ["No difference", "<div> is block-level, <span> is inline", "<span> is block-level, <div> is inline", "Both are block-level"],
                correct: 1,
                explanation: "<div> is a block-level element, <span> is an inline element."
            },
            {
                question: "What is semantic HTML?",
                options: ["HTML with CSS", "HTML that describes its meaning", "HTML with JavaScript", "HTML with images"],
                correct: 1,
                explanation: "Semantic HTML uses meaningful tags that describe the content's purpose."
            },
            {
                question: "Which tag is used for navigation?",
                options: ["<nav>", "<navigation>", "<menu>", "<link>"],
                correct: 0,
                explanation: "<nav> tag is used to define navigation links."
            },
            {
                question: "What is the purpose of the <form> tag?",
                options: ["To create forms", "To style content", "To add images", "To create links"],
                correct: 0,
                explanation: "<form> tag is used to create HTML forms for user input."
            },
            {
                question: "Which input type is used for passwords?",
                options: ["text", "password", "hidden", "secret"],
                correct: 1,
                explanation: "type='password' creates a password field that masks input."
            },
            {
                question: "What is the purpose of the <table> tag?",
                options: ["To create tables", "To style content", "To add borders", "To create lists"],
                correct: 0,
                explanation: "<table> tag is used to create HTML tables for displaying data."
            },
            {
                question: "Which tag is used for table headers?",
                options: ["<th>", "<header>", "<thead>", "<td>"],
                correct: 0,
                explanation: "<th> tag is used to define header cells in a table."
            },
            {
                question: "What is the purpose of the <meta> tag?",
                options: ["To add metadata", "To create links", "To add images", "To style content"],
                correct: 0,
                explanation: "<meta> tag provides metadata about the HTML document."
            },
            {
                question: "Which attribute is used for accessibility?",
                options: ["alt", "title", "aria-label", "All of the above"],
                correct: 3,
                explanation: "alt, title, and aria-label are all used for accessibility purposes."
            },
            {
                question: "What is the purpose of the <iframe> tag?",
                options: ["To embed content", "To create frames", "To add images", "To create links"],
                correct: 0,
                explanation: "<iframe> tag is used to embed another HTML page within the current page."
            }
        ],
        hard: [
            {
                question: "What is the difference between GET and POST methods?",
                options: ["No difference", "GET is visible in URL, POST is not", "POST is faster", "GET is deprecated"],
                correct: 1,
                explanation: "GET parameters are visible in URL, POST data is sent in request body."
            },
            {
                question: "What is the purpose of the <canvas> tag?",
                options: ["To draw graphics", "To create tables", "To add images", "To create forms"],
                correct: 0,
                explanation: "<canvas> tag is used to draw graphics, animations, and other visual images."
            },
            {
                question: "What is the difference between localStorage and sessionStorage?",
                options: ["No difference", "localStorage persists, sessionStorage is temporary", "sessionStorage is faster", "localStorage is deprecated"],
                correct: 1,
                explanation: "localStorage persists until manually cleared, sessionStorage is cleared when tab closes."
            },
            {
                question: "What is the purpose of the <video> tag?",
                options: ["To embed videos", "To create animations", "To add audio", "To create links"],
                correct: 0,
                explanation: "<video> tag is used to embed video content in HTML pages."
            },
            {
                question: "What is the difference between <article> and <section>?",
                options: ["No difference", "<article> is self-contained, <section> groups content", "<section> is self-contained", "Both are the same"],
                correct: 1,
                explanation: "<article> represents self-contained content, <section> groups related content."
            },
            {
                question: "What is the purpose of the <details> tag?",
                options: ["To create collapsible content", "To add details", "To create lists", "To add metadata"],
                correct: 0,
                explanation: "<details> tag creates interactive disclosure widget for collapsible content."
            },
            {
                question: "What is the difference between <em> and <strong>?",
                options: ["No difference", "<em> for emphasis, <strong> for importance", "<strong> for emphasis", "Both are the same"],
                correct: 1,
                explanation: "<em> indicates emphasis, <strong> indicates strong importance or urgency."
            },
            {
                question: "What is the purpose of the <datalist> tag?",
                options: ["To create lists", "To provide autocomplete options", "To add data", "To create forms"],
                correct: 1,
                explanation: "<datalist> tag provides autocomplete options for input elements."
            },
            {
                question: "What is the difference between <figure> and <img>?",
                options: ["No difference", "<figure> can contain caption, <img> cannot", "<img> is semantic", "Both are the same"],
                correct: 1,
                explanation: "<figure> can contain an image with a caption, <img> is just the image."
            },
            {
                question: "What is the purpose of the <time> tag?",
                options: ["To display time", "To create timers", "To add dates", "To create schedules"],
                correct: 0,
                explanation: "<time> tag represents a specific period in time or a datetime value."
            }
        ]
    },
    css: {
        easy: [
            {
                question: "What does CSS stand for?",
                options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
                correct: 0,
                explanation: "CSS stands for Cascading Style Sheets, used for styling web pages."
            },
            {
                question: "How do you link CSS to HTML?",
                options: ["<link>", "<style>", "<css>", "<stylesheet>"],
                correct: 0,
                explanation: "<link> tag is used to link external CSS files to HTML documents."
            },
            {
                question: "Which property is used to change text color?",
                options: ["text-color", "color", "font-color", "text-style"],
                correct: 1,
                explanation: "color property is used to set the text color in CSS."
            },
            {
                question: "How do you change the background color?",
                options: ["background-color", "bg-color", "color-background", "background"],
                correct: 0,
                explanation: "background-color property is used to set the background color."
            },
            {
                question: "Which property controls text size?",
                options: ["text-size", "font-size", "size", "text-height"],
                correct: 1,
                explanation: "font-size property is used to control the size of text."
            },
            {
                question: "How do you center text horizontally?",
                options: ["text-align: center", "align: center", "center: text", "text-center"],
                correct: 0,
                explanation: "text-align: center centers text horizontally within its container."
            },
            {
                question: "Which property adds space around elements?",
                options: ["margin", "padding", "spacing", "gap"],
                correct: 0,
                explanation: "margin property adds space outside the element's border."
            },
            {
                question: "What is the purpose of padding?",
                options: ["Space outside element", "Space inside element", "Space between elements", "Space around text"],
                correct: 1,
                explanation: "padding adds space inside the element, between content and border."
            },
            {
                question: "How do you make text bold?",
                options: ["font-weight: bold", "text-weight: bold", "bold: true", "font: bold"],
                correct: 0,
                explanation: "font-weight: bold makes text appear bold."
            },
            {
                question: "Which property controls element width?",
                options: ["width", "size", "length", "dimension"],
                correct: 0,
                explanation: "width property controls the width of an element."
            }
        ],
        medium: [
            {
                question: "What is the difference between margin and padding?",
                options: ["No difference", "Margin is outside, padding is inside", "Padding is outside, margin is inside", "Both are the same"],
                correct: 1,
                explanation: "Margin is space outside the element, padding is space inside the element."
            },
            {
                question: "What is the box model in CSS?",
                options: ["A way to create boxes", "Content, padding, border, margin", "A layout system", "A styling method"],
                correct: 1,
                explanation: "The box model consists of content, padding, border, and margin layers."
            },
            {
                question: "What is the purpose of display property?",
                options: ["To show elements", "To control how elements are displayed", "To hide elements", "To style elements"],
                correct: 1,
                explanation: "display property controls how an element is rendered (block, inline, flex, etc.)."
            },
            {
                question: "What is the difference between block and inline elements?",
                options: ["No difference", "Block takes full width, inline takes content width", "Inline takes full width", "Both are the same"],
                correct: 1,
                explanation: "Block elements take full width and start on new line, inline elements take content width."
            },
            {
                question: "What is the purpose of position property?",
                options: ["To position elements", "To place elements", "To move elements", "To align elements"],
                correct: 0,
                explanation: "position property controls how an element is positioned in the document."
            },
            {
                question: "What is the difference between relative and absolute positioning?",
                options: ["No difference", "Relative to normal position vs relative to nearest positioned parent", "Absolute is faster", "Relative is deprecated"],
                correct: 1,
                explanation: "Relative positioning is relative to normal position, absolute is relative to nearest positioned parent."
            },
            {
                question: "What is the purpose of z-index?",
                options: ["To control depth", "To control stacking order", "To control height", "To control width"],
                correct: 1,
                explanation: "z-index controls the stacking order of positioned elements."
            },
            {
                question: "What is the difference between class and ID selectors?",
                options: ["No difference", "Class can be used multiple times, ID must be unique", "ID can be used multiple times", "Both are the same"],
                correct: 1,
                explanation: "Class selectors can be used on multiple elements, ID selectors must be unique."
            },
            {
                question: "What is the purpose of float property?",
                options: ["To make elements float", "To position elements to left or right", "To create animations", "To style text"],
                correct: 1,
                explanation: "float property positions elements to the left or right of their container."
            },
            {
                question: "What is the difference between em and rem units?",
                options: ["No difference", "em is relative to parent, rem is relative to root", "rem is relative to parent", "Both are the same"],
                correct: 1,
                explanation: "em is relative to parent element's font size, rem is relative to root element's font size."
            }
        ],
        hard: [
            {
                question: "What is CSS Grid?",
                options: ["A layout system", "A two-dimensional layout system", "A styling method", "A positioning system"],
                correct: 1,
                explanation: "CSS Grid is a two-dimensional layout system for creating complex web layouts."
            },
            {
                question: "What is Flexbox?",
                options: ["A one-dimensional layout system", "A styling method", "A positioning system", "A grid system"],
                correct: 0,
                explanation: "Flexbox is a one-dimensional layout system for creating flexible responsive layouts."
            },
            {
                question: "What is the difference between Grid and Flexbox?",
                options: ["No difference", "Grid is 2D, Flexbox is 1D", "Flexbox is 2D", "Both are the same"],
                correct: 1,
                explanation: "CSS Grid is two-dimensional (rows and columns), Flexbox is one-dimensional (row or column)."
            },
            {
                question: "What is the purpose of CSS variables (custom properties)?",
                options: ["To create variables", "To store reusable values", "To create functions", "To store data"],
                correct: 1,
                explanation: "CSS variables allow storing reusable values that can be used throughout the stylesheet."
            },
            {
                question: "What is the difference between transform and transition?",
                options: ["No difference", "Transform changes appearance, transition controls animation", "Transition changes appearance", "Both are the same"],
                correct: 1,
                explanation: "Transform changes element appearance, transition controls how changes animate over time."
            },
            {
                question: "What is the purpose of media queries?",
                options: ["To create media", "To apply styles based on device characteristics", "To create animations", "To style media elements"],
                correct: 1,
                explanation: "Media queries apply different styles based on device characteristics like screen size."
            },
            {
                question: "What is the difference between pseudo-class and pseudo-element?",
                options: ["No difference", "Pseudo-class targets state, pseudo-element creates content", "Pseudo-element targets state", "Both are the same"],
                correct: 1,
                explanation: "Pseudo-class targets element states, pseudo-element creates or styles specific parts of elements."
            },
            {
                question: "What is the purpose of CSS animations?",
                options: ["To create movement", "To animate property changes over time", "To create effects", "To style elements"],
                correct: 1,
                explanation: "CSS animations allow property changes to occur over a specified duration."
            },
            {
                question: "What is the difference between visibility: hidden and display: none?",
                options: ["No difference", "hidden preserves space, none removes space", "none preserves space", "Both are the same"],
                correct: 1,
                explanation: "visibility: hidden preserves space, display: none removes the element from layout."
            },
            {
                question: "What is the purpose of CSS specificity?",
                options: ["To make CSS specific", "To determine which styles apply when rules conflict", "To create specific styles", "To target specific elements"],
                correct: 1,
                explanation: "CSS specificity determines which styles apply when multiple rules target the same element."
            }
        ]
    },
    sql: {
        easy: [
            {
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
                correct: 0,
                explanation: "SQL stands for Structured Query Language, used for managing relational databases."
            },
            {
                question: "Which SQL command is used to retrieve data?",
                options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
                correct: 1,
                explanation: "SELECT command is used to retrieve data from database tables."
            },
            {
                question: "Which SQL command is used to insert data?",
                options: ["INSERT", "ADD", "CREATE", "PUT"],
                correct: 0,
                explanation: "INSERT command is used to add new records to database tables."
            },
            {
                question: "Which SQL command is used to update data?",
                options: ["UPDATE", "MODIFY", "CHANGE", "EDIT"],
                correct: 0,
                explanation: "UPDATE command is used to modify existing records in database tables."
            },
            {
                question: "Which SQL command is used to delete data?",
                options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
                correct: 0,
                explanation: "DELETE command is used to remove records from database tables."
            },
            {
                question: "What is a primary key?",
                options: ["A key that opens the database", "A unique identifier for each record", "A password", "A username"],
                correct: 1,
                explanation: "A primary key is a unique identifier that distinguishes each record in a table."
            },
            {
                question: "Which clause is used to filter results?",
                options: ["WHERE", "FILTER", "SEARCH", "FIND"],
                correct: 0,
                explanation: "WHERE clause is used to filter records based on specified conditions."
            },
            {
                question: "Which clause is used to sort results?",
                options: ["SORT", "ORDER BY", "ARRANGE", "ORGANIZE"],
                correct: 1,
                explanation: "ORDER BY clause is used to sort query results in ascending or descending order."
            },
            {
                question: "What is a foreign key?",
                options: ["A key from another country", "A key that references another table's primary key", "A backup key", "A temporary key"],
                correct: 1,
                explanation: "A foreign key is a field that references the primary key of another table."
            },
            {
                question: "Which operator is used for equality comparison?",
                options: ["=", "==", "===", "equals"],
                correct: 0,
                explanation: "= operator is used for equality comparison in SQL."
            }
        ],
        medium: [
            {
                question: "What is the difference between INNER JOIN and LEFT JOIN?",
                options: ["No difference", "INNER JOIN returns matching records, LEFT JOIN returns all from left table", "LEFT JOIN is faster", "INNER JOIN is deprecated"],
                correct: 1,
                explanation: "INNER JOIN returns only matching records, LEFT JOIN returns all records from left table."
            },
            {
                question: "What is the purpose of GROUP BY clause?",
                options: ["To group tables", "To group rows by column values", "To create groups", "To organize data"],
                correct: 1,
                explanation: "GROUP BY clause groups rows by column values, often used with aggregate functions."
            },
            {
                question: "What is the difference between WHERE and HAVING?",
                options: ["No difference", "WHERE filters rows, HAVING filters groups", "HAVING is faster", "WHERE is deprecated"],
                correct: 1,
                explanation: "WHERE filters individual rows, HAVING filters groups created by GROUP BY."
            },
            {
                question: "What is a subquery?",
                options: ["A small query", "A query within another query", "A simple query", "A basic query"],
                correct: 1,
                explanation: "A subquery is a query nested inside another query, used to retrieve data for the main query."
            },
            {
                question: "What is the purpose of INDEX in SQL?",
                options: ["To create indexes", "To improve query performance", "To organize data", "To sort data"],
                correct: 1,
                explanation: "Indexes improve query performance by providing faster data access paths."
            },
            {
                question: "What is the difference between DELETE and TRUNCATE?",
                options: ["No difference", "DELETE can be rolled back, TRUNCATE cannot", "TRUNCATE is faster", "DELETE is deprecated"],
                correct: 1,
                explanation: "DELETE can be rolled back and fires triggers, TRUNCATE cannot be rolled back and is faster."
            },
            {
                question: "What is the purpose of DISTINCT keyword?",
                options: ["To make queries distinct", "To remove duplicate rows", "To create unique queries", "To filter data"],
                correct: 1,
                explanation: "DISTINCT keyword removes duplicate rows from query results."
            },
            {
                question: "What is the difference between UNION and UNION ALL?",
                options: ["No difference", "UNION removes duplicates, UNION ALL keeps duplicates", "UNION ALL is faster", "UNION is deprecated"],
                correct: 1,
                explanation: "UNION removes duplicate rows, UNION ALL keeps all rows including duplicates."
            },
            {
                question: "What is the purpose of EXISTS operator?",
                options: ["To check existence", "To test for existence of rows in subquery", "To create existence", "To verify data"],
                correct: 1,
                explanation: "EXISTS operator tests for the existence of rows returned by a subquery."
            },
            {
                question: "What is the difference between COUNT(*) and COUNT(column)?",
                options: ["No difference", "COUNT(*) counts all rows, COUNT(column) counts non-null values", "COUNT(column) is faster", "COUNT(*) is deprecated"],
                correct: 1,
                explanation: "COUNT(*) counts all rows, COUNT(column) counts only non-null values in the column."
            }
        ],
        hard: [
            {
                question: "What is a stored procedure?",
                options: ["A database procedure", "A precompiled collection of SQL statements", "A simple query", "A database function"],
                correct: 1,
                explanation: "A stored procedure is a precompiled collection of SQL statements stored in the database."
            },
            {
                question: "What is the difference between a view and a table?",
                options: ["No difference", "View is virtual, table is physical", "Table is virtual", "Both are the same"],
                correct: 1,
                explanation: "A view is a virtual table based on a query, while a table stores actual data."
            },
            {
                question: "What is normalization in SQL?",
                options: ["A process to organize data", "A process to reduce data redundancy and improve data integrity", "A way to speed up queries", "A backup process"],
                correct: 1,
                explanation: "Normalization is a process to organize data to reduce redundancy and improve data integrity."
            },
            {
                question: "What is the difference between OLTP and OLAP?",
                options: ["No difference", "OLTP for transactions, OLAP for analysis", "OLAP for transactions", "Both are the same"],
                correct: 1,
                explanation: "OLTP (Online Transaction Processing) handles transactions, OLAP (Online Analytical Processing) handles analysis."
            },
            {
                question: "What is a deadlock in SQL?",
                options: ["A database lock", "A situation where two transactions wait for each other", "A security feature", "A performance issue"],
                correct: 1,
                explanation: "A deadlock occurs when two or more transactions wait for each other to release locks."
            },
            {
                question: "What is the purpose of ACID properties?",
                options: ["To make databases acidic", "To ensure database transaction reliability", "To speed up queries", "To organize data"],
                correct: 1,
                explanation: "ACID properties (Atomicity, Consistency, Isolation, Durability) ensure reliable database transactions."
            },
            {
                question: "What is the difference between clustered and non-clustered indexes?",
                options: ["No difference", "Clustered determines physical order, non-clustered doesn't", "Non-clustered determines order", "Both are the same"],
                correct: 1,
                explanation: "Clustered index determines the physical order of data, non-clustered index doesn't affect physical order."
            },
            {
                question: "What is the purpose of transaction isolation levels?",
                options: ["To isolate transactions", "To control how transactions interact with each other", "To separate data", "To organize transactions"],
                correct: 1,
                explanation: "Transaction isolation levels control how transactions interact with each other and prevent concurrency issues."
            },
            {
                question: "What is the difference between INNER JOIN and CROSS JOIN?",
                options: ["No difference", "INNER JOIN matches on condition, CROSS JOIN creates all combinations", "CROSS JOIN is faster", "INNER JOIN is deprecated"],
                correct: 1,
                explanation: "INNER JOIN matches rows based on a condition, CROSS JOIN creates all possible combinations of rows."
            },
            {
                question: "What is the purpose of window functions in SQL?",
                options: ["To create windows", "To perform calculations across rows without grouping", "To create views", "To organize data"],
                correct: 1,
                explanation: "Window functions perform calculations across rows without reducing the number of rows returned."
            }
        ]
    },
    c: {
        easy: [
            {
                question: "What is the correct way to declare a variable in C?",
                options: ["var x = 5;", "int x = 5;", "variable x = 5;", "x = 5;"],
                correct: 1,
                explanation: "C requires explicit type declaration: 'int x = 5;' where 'int' is the data type."
            },
            {
                question: "Which header file is required for printf function?",
                options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
                correct: 0,
                explanation: "<stdio.h> header file contains declarations for printf, scanf, and other I/O functions."
            },
            {
                question: "What is the correct way to print in C?",
                options: ["print()", "printf()", "cout", "console.log()"],
                correct: 1,
                explanation: "printf() is the standard function used to print output in C."
            },
            {
                question: "Which operator is used for comparison in C?",
                options: ["=", "==", "===", "equals"],
                correct: 1,
                explanation: "== is used for comparison, while = is used for assignment."
            },
            {
                question: "What is an array in C?",
                options: ["A collection of different data types", "A collection of same data types", "A single variable", "A function"],
                correct: 1,
                explanation: "An array is a collection of elements of the same data type stored in contiguous memory."
            },
            {
                question: "How do you declare a function in C?",
                options: ["function name() {}", "def name() {}", "return_type name(parameters);", "void name() {}"],
                correct: 2,
                explanation: "Functions in C are declared with return type, name, and parameters: 'return_type name(parameters);'."
            },
            {
                question: "What is a pointer in C?",
                options: ["A variable that stores an address", "A variable that stores a value", "A function", "A data type"],
                correct: 0,
                explanation: "A pointer is a variable that stores the memory address of another variable."
            },
            {
                question: "Which operator is used to get the address of a variable?",
                options: ["*", "&", "->", "::"],
                correct: 1,
                explanation: "& operator is used to get the memory address of a variable."
            },
            {
                question: "What is the purpose of #include directive?",
                options: ["To include files", "To include header files", "To create files", "To delete files"],
                correct: 1,
                explanation: "#include directive is used to include header files in C programs."
            },
            {
                question: "Which data type is used for whole numbers in C?",
                options: ["float", "double", "int", "char"],
                correct: 2,
                explanation: "int is used for whole numbers, while float and double are for decimal numbers."
            }
        ],
        medium: [
            {
                question: "What is the difference between malloc() and calloc()?",
                options: ["No difference", "malloc() doesn't initialize, calloc() initializes to zero", "calloc() is faster", "malloc() is deprecated"],
                correct: 1,
                explanation: "malloc() allocates memory without initialization, calloc() allocates and initializes to zero."
            },
            {
                question: "What is the purpose of free() function?",
                options: ["To free memory", "To deallocate dynamically allocated memory", "To clear variables", "To delete files"],
                correct: 1,
                explanation: "free() function is used to deallocate memory that was allocated using malloc(), calloc(), or realloc()."
            },
            {
                question: "What is a structure in C?",
                options: ["A function", "A user-defined data type", "A variable", "A pointer"],
                correct: 1,
                explanation: "A structure is a user-defined data type that groups related variables under a single name."
            },
            {
                question: "What is the difference between struct and union?",
                options: ["No difference", "Struct allocates space for all members, union shares space", "Union is faster", "Struct is deprecated"],
                correct: 1,
                explanation: "Struct allocates separate memory for each member, union shares memory among all members."
            },
            {
                question: "What is the purpose of typedef keyword?",
                options: ["To create new types", "To create type aliases", "To define variables", "To create functions"],
                correct: 1,
                explanation: "typedef keyword is used to create type aliases or alternative names for existing data types."
            },
            {
                question: "What is the difference between ++i and i++?",
                options: ["No difference", "++i pre-increment, i++ post-increment", "i++ is faster", "++i is deprecated"],
                correct: 1,
                explanation: "++i increments before use (pre-increment), i++ increments after use (post-increment)."
            },
            {
                question: "What is the purpose of const keyword?",
                options: ["To make variables constant", "To create constants", "To define functions", "To create pointers"],
                correct: 0,
                explanation: "const keyword makes variables read-only and prevents them from being modified."
            },
            {
                question: "What is the difference between char* and char[]?",
                options: ["No difference", "char* is pointer, char[] is array", "char[] is pointer", "Both are the same"],
                correct: 1,
                explanation: "char* is a pointer to character, char[] is an array of characters."
            },
            {
                question: "What is the purpose of static keyword?",
                options: ["To make variables static", "To control variable scope and lifetime", "To create static functions", "To define static types"],
                correct: 1,
                explanation: "static keyword controls variable scope and lifetime, and can be used with functions and variables."
            },
            {
                question: "What is the difference between local and global variables?",
                options: ["No difference", "Local has function scope, global has file scope", "Global is faster", "Local is deprecated"],
                correct: 1,
                explanation: "Local variables have function scope, global variables have file scope and can be accessed throughout the file."
            }
        ],
        hard: [
            {
                question: "What is the difference between stack and heap memory?",
                options: ["No difference", "Stack is automatic, heap is manual allocation", "Heap is faster", "Stack is deprecated"],
                correct: 1,
                explanation: "Stack memory is automatically managed, heap memory requires manual allocation and deallocation."
            },
            {
                question: "What is a function pointer in C?",
                options: ["A pointer to function", "A pointer that points to a function", "A function that returns pointer", "A pointer variable"],
                correct: 1,
                explanation: "A function pointer is a pointer that stores the address of a function."
            },
            {
                question: "What is the purpose of volatile keyword?",
                options: ["To make variables volatile", "To prevent compiler optimization", "To create volatile functions", "To define volatile types"],
                correct: 1,
                explanation: "volatile keyword tells the compiler that a variable may change unexpectedly, preventing optimization."
            },
            {
                question: "What is the difference between shallow copy and deep copy?",
                options: ["No difference", "Shallow copies pointers, deep copies pointed-to data", "Deep copy is faster", "Shallow copy uses less memory"],
                correct: 1,
                explanation: "Shallow copy copies pointer values, deep copy creates new copies of pointed-to data."
            },
            {
                question: "What is the purpose of register keyword?",
                options: ["To register variables", "To suggest compiler to store variable in register", "To create register functions", "To define register types"],
                correct: 1,
                explanation: "register keyword suggests the compiler to store a variable in a CPU register for faster access."
            },
            {
                question: "What is the difference between #define and const?",
                options: ["No difference", "#define is preprocessor, const is compiler", "const is faster", "#define is deprecated"],
                correct: 1,
                explanation: "#define is a preprocessor directive, const is a compiler keyword with type checking."
            },
            {
                question: "What is the purpose of inline keyword?",
                options: ["To create inline functions", "To suggest compiler to inline function calls", "To define inline types", "To create inline variables"],
                correct: 1,
                explanation: "inline keyword suggests the compiler to replace function calls with the function body for optimization."
            },
            {
                question: "What is the difference between strcpy() and strncpy()?",
                options: ["No difference", "strncpy() allows specifying maximum length", "strcpy() is safer", "Both are the same"],
                correct: 1,
                explanation: "strncpy() allows specifying maximum number of characters to copy, providing better buffer overflow protection."
            },
            {
                question: "What is the purpose of realloc() function?",
                options: ["To reallocate memory", "To change size of allocated memory block", "To resize arrays", "To modify pointers"],
                correct: 1,
                explanation: "realloc() function is used to change the size of a previously allocated memory block."
            },
            {
                question: "What is the difference between lvalue and rvalue?",
                options: ["No difference", "lvalue can appear on left side of assignment, rvalue cannot", "rvalue is faster", "lvalue is deprecated"],
                correct: 1,
                explanation: "lvalue can appear on the left side of assignment, rvalue can only appear on the right side."
            }
        ]
    }
};

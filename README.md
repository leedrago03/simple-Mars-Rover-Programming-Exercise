# simple-Mars-Rover-Programming-Exercise
A TypeScript implementation of a Mars Rover simulator, responding to commands to move forward, turn left, and turn right on a Martian terrain. The application features a modular design, using the Command pattern and separation of concerns to ensure maintainability and extensibility.

# Key Decision Maker
As the developer of the Mars Rover application, I'd like to walk you through the code base and explain the key decisions I made during the development process.

# Decision 1: Choosing the Programming Language
I chose TypeScript as the programming language for this project. The reasons for this decision were:

Type Safety: TypeScript provides optional static typing, which helps catch type-related errors at compile-time rather than runtime.
Object-Oriented Programming: TypeScript supports object-oriented programming (OOP) concepts like classes, interfaces, and inheritance, which made it easier to design and implement the Mars Rover application.
Compatibility: TypeScript is fully compatible with JavaScript, making it easy to integrate with existing JavaScript libraries and frameworks.

# Decision 2: Designing the Rover Class
I designed the Rover class to encapsulate the state and behavior of the Mars Rover. The key decisions I made here were:

Properties: I defined properties for the rover's position (x and y coordinates), direction (N, S, E, or W), and the grid it's operating on.
Methods: I implemented methods for moving the rover forward, turning left and right, and checking for obstacles.
Encapsulation: I used encapsulation to hide the internal state of the rover and expose only the necessary methods to interact with it.

# Decision 3: Implementing the Grid Class
I designed the Grid class to represent the Martian terrain. The key decisions I made here were:

Properties: I defined properties for the grid's dimensions (width and height) and obstacles (obstacles array).
Methods: I implemented methods for checking if a position is within the grid boundaries and if there are any obstacles at a given position.
Separation of Concerns: I kept the grid logic separate from the rover logic to make the code more modular and reusable.

# Decision 4: Using the Command Pattern
I used the Command pattern to implement the rover's movements and turns. The key decisions I made here were:

Command Interface: I defined an interface for commands that the rover can execute.
Concrete Commands: I implemented concrete command classes for moving forward, turning left, and turning right.
Invoker: I used the Rover class as the invoker, which executes the commands.

# Decision 5: Running the Application
I used ts-node to run the application. The key decisions I made here were:

ts-node: I chose ts-node because it allows running TypeScript files directly without the need for compilation.
Entry Point: I defined the entry point of the application as the app.ts file.

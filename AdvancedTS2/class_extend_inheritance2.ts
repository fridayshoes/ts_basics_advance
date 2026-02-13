// This code demonstrates the simplest form of Inheritance. Here, the 
// child classes (Masters and Bachelors) are empty, 
// yet they are fully functional because they "inherit" 
// the DNA of the Courses class.

// 1. THE PARENT CLASS (Base Class)
class Courses {
    // We use union types (string | undefined) because these properties 
    // aren't initialized in a constructor. They start as 'undefined'.
    courseName: string | undefined;
    courseCode: string | undefined;

    // A shared method that all children will be able to use.
    displayCourseDetails(): void {
        console.log(`Course Name: ${this.courseName}, Course Code: ${this.courseCode}`);
    }
}

// 2. THE CHILD CLASSES (Derived Classes)
// Even though these classes are empty { }, they 'extend' Courses.
// This means they get courseName, courseCode, and displayCourseDetails() for free.
class Masters extends Courses {
    // Hidden here is everything from the Courses class.
}

class Bachelors extends Courses {
    // Same here—it's a perfect copy of the parent blueprint.
}

// 3. EXECUTION
// Creating an instance of the Masters class
const mastersCourse = new Masters();
// We assign values directly to the properties inherited from the parent
mastersCourse.courseName = "Computer Science";
mastersCourse.courseCode = "CS101";

// Creating an instance of the Bachelors class
const bachelorsCourse = new Bachelors();
bachelorsCourse.courseName = "Information Technology";
bachelorsCourse.courseCode = "IT101";

// 4. CALLING INHERITED METHODS
// Both objects can call this method because it's defined in their parent (Courses).
mastersCourse.displayCourseDetails(); 
bachelorsCourse.displayCourseDetails();
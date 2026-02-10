//sample if else code with marks 1bove 40 so pass or fail
 
function checkMarks(marks : number) : string {      
    if (marks >= 40) {
        return "Pass";
    }
    else {
        return "Fail";
    }
}
 
const studentMarks = 24;
console.log("Student Marks: " + studentMarks);
console.log("Result: " + checkMarks(studentMarks));
 
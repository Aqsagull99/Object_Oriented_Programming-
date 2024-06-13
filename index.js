import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Whom Would you like to intrect with ?",
                choices: ["Staff ", "Student", "Exit"],
            },
        ]);
        if (ans.select == "Staff ") {
            console.log("You approarch the staff room. Please feel free to ask for more information");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the name of the student you wish to engage with: ",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(` Hello i am ${name.name} Nice to meet you `);
                console.log("New Student Added");
                console.log("Current Student List");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name} Nice to see  you again `);
                console.log("Existing Student List:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Existing The Program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);

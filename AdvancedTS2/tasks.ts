class University {
    name: string
    location: string
    courses: string[]

    constructor(name: string, location: string, courses: string[]) {
        this.name = name
        this.location = location
        this.courses = courses
    }

    getUniDetailsList(): void {
        console.log(`University: ${this.name}, Location: ${this.location}`)
    }
}

const uni = new University("Tech University", "New York", ["Computer Science", "Mathematics", "Physics"])
const uni2 = new University("Arts University", "Los Angeles", ["Fine Arts", "Music", "Theater"])
const uni3 = new University("Business University", "Chicago", ["Business Administration", "Marketing", "Finance"])



uni.getUniDetailsList();
uni2.getUniDetailsList();
uni3.getUniDetailsList();

import fs from 'fs-extra';
import { nanoid } from 'nanoid';
import path from 'path';

class CourseRepo{
    constructor(){
        this.filePath = path.join(process.cwd(), 'app/data/courses.json');
    }

    //get courses
    async getCourses(){
        return fs.readJSON(this.filePath);
    }

    //add courses
    async addCourse(course){
        const courses = await this.getCourses()
        course.id = nanoid(5);
        courses.push(course)
        await fs.writeJSON(this.filePath, courses)
        
        return course
    }

    async getCourseById(id){
        const courses = await this.getCourses()
        const course = courses.find(course => course.id === id)

        if(!course){
            return 'Course not found'
        }
        return course
    }

    async updateCourse(id, course){
        const courses = await this.getCourses();
        const courseIndex = courses.findIndex(course => course.id ===id)

        if(courseIndex === -1){
            return 'Course not found'
        }

        courses[courseIndex] = course
        await fs.writeJSON(this.filePath, courses);
        return course
    }

    async deleteCourse(id){
        const courses = await this.getCourses()
        const courseIndex = courses.findIndex(course => course.id ===id)

        if(courseIndex === -1){
            return 'Course not found'
        }
        courses.splice(courseIndex, 1)
        await fs.writeJSON(this.filePath, courses);
        return 'course deleted'
         
    }
}

export default new CourseRepo();
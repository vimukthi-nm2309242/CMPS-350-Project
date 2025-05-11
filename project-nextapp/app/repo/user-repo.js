import fs from 'fs-extra';
import { nanoid } from 'nanoid';
import path from 'path';

class userRepo{
    constructor(){
        this.filePath = path.join(process.cwd(), 'app/data/users.json');
    }

    async getUsers(){
        return fs.readJSON(this.filePath);
    }

    async updateUser(id, user){
        const users = await this.getUsers();
        const userIndex = users.findIndex(user => user.id ===id)    
        if(userIndex === -1){
            return 'Course not found'
        }   
        users[userIndex] = user
        await fs.writeJSON(this.filePath, users);
        return user
    }
    
}
export default new userRepo(); 
import User from '../models/User';

export class UserService {
    static async createUser(userData) {
        const user = new User(userData);
        return await user.save();
    }

    static async retrieveUser(userId) {
        return await User.findById(userId);
    }

    static async updateUser(userId, updateData) {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }

    static async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    }
}

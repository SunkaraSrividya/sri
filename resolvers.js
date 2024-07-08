const { Query } = require('mongoose');
const User = require('./model/userSchema');

const resolvers = {
    Query: {
        getUsers: async (_, { id }) => {
            return await User.findById(id);
        },
    },
    Mutation: {
        createUser: async (_, { input }) => {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new Error("Please enter all fields");
                }
                const newUser = new User({ name, email, password });
                return await newUser.save();
            } catch (err) {
                throw new Error(`Error Creating User: ${err}`);
            }
        },
        changePass: async (_, { input }) => {
            try {
                const { id, password } = input;
                const userNew = await User.findByIdAndUpdate(id, { password: password }, { new: true });
                if (!userNew) {
                    throw new Error('USER not found');
                }
                return userNew; // Return the updated user
            } catch (err) {
                throw new Error(`Error Updating Password: ${err}`);
            }
        },
    },
    User: {
        email: (parent) => parent.email || '',
        name: (parent) => parent.name || '',
        password: (parent) => parent.password || '', // Correct field name
    }
};

module.exports = resolvers;

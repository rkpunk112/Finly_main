import User from '../libs/model/usermodel.js';

const createUser = async (req, res) => {
    try {
        const user = await User.create({
            email: 'rohitpunk14@gmail.com',
            password: 'roht2123',
        });
        res.render('user', { message: 'User Created', user });
    } catch (err) {
        res.status(500).render('user', { message: 'Error creating user', user: null });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: 'atttlantic@gmail.com' });
        res.render('user', { message: 'User Retrieved', user });
    } catch (err) {
        res.status(500).render('user', { message: 'Error retrieving user', user: null });
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({ email: 'hellomy@gmail.com' });
        res.render('user', { message: 'User Deleted', user: null });
    } catch (err) {
        res.status(500).render('user', { message: 'Error deleting user', user: null });
    }
};

export { createUser, getUser, deleteUser };
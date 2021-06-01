const LoginRegController = require('../controllers/loginReg.controller'),
    UserController = require('../controllers/user.controller'),
    { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/register', LoginRegController.register);
    app.post('/api/login', LoginRegController.login);
    app.get('/api/logout', authenticate, LoginRegController.logout);

    app.get('/api/users', authenticate, UserController.index);
    app.get('/api/users/:id', authenticate, UserController.show);
    app.put('/api/update/users/:id', authenticate, UserController.update);

    app.get(
        '/api/users/matches/:seeking',
        authenticate,
        UserController.matches
    );
    app.put(
        '/api/users/matches/likes/:loggedId',
        authenticate,
        UserController.update_likes
    );
    app.put(
        '/api/users/matches/dislikes/:loggedId',
        authenticate,
        UserController.update_dislikes
    );
};

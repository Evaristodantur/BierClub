const fs = require('fs');

function logUsersMiddleware (req, res, next) {
    fs.appendFileSync('./logs/logsUsers.txt', `Se registró el usuario "${req.body.email}" -- ` + (new Date().toLocaleString()) + '\n');

    next();
}

module.exports = logUsersMiddleware;
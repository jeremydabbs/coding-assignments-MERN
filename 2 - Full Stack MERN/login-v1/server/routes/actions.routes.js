const ActionController = require("../controllers/actions.controller");

const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post("/api/register", ActionController.register);
    app.post("/api/login", ActionController.login);
    app.get("/api/users", ActionController.userIndex);

    app.get("/api/action/", authenticate, ActionController.index);
    app.get("/api/action/:id", authenticate, ActionController.show);
    app.post("/api/action", authenticate, ActionController.create);
    app.put("/api/action/:id", authenticate, ActionController.update);
    app.delete("/api/action/:id", authenticate, ActionController.destroy);
};

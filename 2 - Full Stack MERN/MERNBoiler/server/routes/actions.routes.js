const ActionController = require("../controllers/action.controller");

module.exports = (app) => {
    app.get("/api/action/", ActionController.index);
    app.get("/api/action/:id", ActionController.show);
    app.post("/api/action", ActionController.create);
    app.put("/api/action/:id", ActionController.update);
    app.delete("/api/action/:id", ActionController.destroy);
};

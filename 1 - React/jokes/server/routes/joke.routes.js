const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes/", JokeController.index);
    app.get("/api/jokes/:id", JokeController.show);
    app.post("/api/jokes/new", JokeController.create);
    app.put("/api/jokes/update/:id", JokeController.update);
    app.delete("/api/jokes/delete/:id", JokeController.destroy);
};
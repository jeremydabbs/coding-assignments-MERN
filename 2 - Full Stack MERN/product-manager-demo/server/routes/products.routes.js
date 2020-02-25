const ProductController = require("../controllers/products.controller");

module.exports = (app) => {
    app.get("/api/product/", ProductController.index);
    app.get("/api/product/:id", ProductController.show);
    app.post("/api/product", ProductController.create);
    app.put("/api/product/:id", ProductController.update);
    app.delete("/api/product/:id", ProductController.destroy);
};

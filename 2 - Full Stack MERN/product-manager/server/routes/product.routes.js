const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products/", ProductController.index);
    app.get("/api/products/:id", ProductController.show);
    app.post("/api/products/new", ProductController.create);
    app.put("/api/products/update/:id", ProductController.update);
    app.delete("/api/products/delete/:id", ProductController.destroy);
};
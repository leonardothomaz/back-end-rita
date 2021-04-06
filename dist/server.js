"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

require("./database");

var _AppError = _interopRequireDefault(require("./errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv-safe").config();

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use((err, request, response, _) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }

  console.error(err);
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
});
app.listen(process.env.PORT || 3333, () => {
  console.log("-----Servidor iniciado na porta 3333-----");
});
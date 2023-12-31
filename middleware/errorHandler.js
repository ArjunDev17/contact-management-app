const { constants } = require("../constant");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.status(statusCode).json({
        title: "validation faild",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.status(statusCode).json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORISED:
      res.status(statusCode).json({
        title: "UNAUTHORISED_error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.INTERNAL_SERVER_ERROR:
      res.status(statusCode).json({
        title: "internal server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      //   res.status(statusCode).json({
      //     title: statusCode,
      //     message: err.message,
      //     stackTrace: err.stack,
      //   });
      console.log("no error");
      break;
  }
  res.status(statusCode).json({ message: err.message, stackTrace: err.stack });
};

module.exports = errorHandler;

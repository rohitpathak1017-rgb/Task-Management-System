export const notFound = (req, res, next) => {
  res.status(404);
  next(new Error("Route not found"));
};

export const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};

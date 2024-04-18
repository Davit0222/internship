export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    message: err.message,
    // Stack trace should not be returned in production
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
};

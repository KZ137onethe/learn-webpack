const env = {
  name: process.env.WEBPACK_ENV_NAME,
  serveApi: process.env.WEBPACK_SERVE_API,
  dbHost: process.env.WEBPACK_DB_HOST,
  dbUser: process.env.WEBPACK_DB_USER,
  dbPass: process.env.WEBPACK_DB_PASS,
};

console.log("💬 ⋮ env => ", env);

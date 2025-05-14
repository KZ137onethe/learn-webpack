const env = {
  name: import.meta.env.WEBPACK_ENV_NAME,
  serveApi: import.meta.env.WEBPACK_SERVE_API,
  dbHost: import.meta.env.WEBPACK_DB_HOST,
  dbUser: import.meta.env.WEBPACK_DB_USER,
  dbPass: import.meta.env.WEBPACK_DB_PASS,
};

// "process.env"

console.log("💬 ⋮ env => ", env);

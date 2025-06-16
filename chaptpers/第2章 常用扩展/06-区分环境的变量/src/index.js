const env = {
  name: import.meta.env.WEBPACK_ENV_NAME,
  serveApi: import.meta.env.WEBPACK_SERVE_API,
  dbHost: import.meta.env.WEBPACK_DB_HOST,
  dbUser: import.meta.env.WEBPACK_DB_USER,
  dbPass: import.meta.env.WEBPACK_DB_PASS,
};

// "process.env"

console.log("💬 ⋮ env => ", env);
/**
 * 系统变量：操作系统安装的驱动器盘符
 * 如果 systemvars 为 true，那么编译后会把其值作为常量放在编译结果中
 * 否则，编译后为 undefined.SystemDrive
 */
console.log("SystemDrive => ", import.meta.env.SystemDrive);

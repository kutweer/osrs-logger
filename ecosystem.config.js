module.exports = {
  apps: [
    {
      name: "cloglog",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/opt/cloglog",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      error_file: "/var/log/cloglog/err.log",
      out_file: "/var/log/cloglog/out.log",
      time: true,
    },
  ],
};

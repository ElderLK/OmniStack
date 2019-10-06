function getFromEnv(name) {
    if (!process.env[name]) throw Error(`Required env ${name}`);
    return process.env[name];
}

function getEnv() {
    if (process.env.NODE_ENV !== "production") {
        require("dotenv").config({ path: "./.env" });
        console.warn(
        `-> Loading environment from .env file (env: ${process.env.NODE_ENV})`
        );
    }

    return {
        db: {
            host: getFromEnv("DB_HOST"),
            user: getFromEnv("DB_USER"),
            password: getFromEnv("DB_PASS")
        }
    };
}

const config = getEnv();

module.exports = config;
import dotenv from 'dotenv';
dotenv.config();

const _config = {
  port: process.env.PORT || 5000,
  backendUrl: process.env.MONGO_URI,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  clientUrl: process.env.CLIENT_URL,
};

export const config = Object.freeze(_config);

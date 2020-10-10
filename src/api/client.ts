import axios from 'axios';

const PRODUCTION_API = 'https://hermes-daangn.vercel.app';
const DEVELOPMENT_API = 'http://localhost:8000';

const IS_ON_DEVELOPMENT = !process.env.NODE_ENV
  || process.env.NODE_ENV === 'development';

export default axios.create({
  baseURL: IS_ON_DEVELOPMENT ?
    DEVELOPMENT_API
    : PRODUCTION_API,
});

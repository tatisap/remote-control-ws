const WS_PORT = Number(process.env.WS_PORT);

if (isNaN(WS_PORT)) {
  throw new Error('WS_PORT is not defined. Please, check .env');
}

const HTTP_PORT = process.env.HTTP_PORT;

if (!HTTP_PORT) {
  throw new Error('HTTP_PORT is not defined. Please, check .env');
}

export { WS_PORT, HTTP_PORT };

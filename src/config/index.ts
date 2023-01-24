const WS_PORT = Number(process.env.WS_PORT) || 8080;

const WS_HOST = process.env.WS_HOST || 'localhost';

const HTTP_PORT = process.env.HTTP_PORT || 8181;

export { WS_PORT, WS_HOST, HTTP_PORT };

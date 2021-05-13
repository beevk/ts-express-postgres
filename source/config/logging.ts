import morgan from 'morgan';
import chalk from 'chalk';

// Logs all the incoming request and response info to console
const morganMiddleware = morgan(function (tokens, req, res) {
    // You can convert it to any timezone using JS
    const dateTime = tokens.date(req, res, 'iso');
    return [
        '\n',
        chalk.hex('#f78fb3').bold('@ ' + dateTime),
        chalk.hex('#fffa65').bold(tokens['remote-addr'](req, res)),
        '\n',
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk.hex('#ff5252').bold(tokens.url(req, res)),
        '\n',
        chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        '\n',
        '\n'
    ].join(' ');
});

export const logInfo = (message: string): any => console.info(chalk.hex('#34ACE0').bold(message));
export const logWarning = (message: string): any => console.warn(chalk.hex('#ff9966').bold(message));
export const logError = (message: string): any => console.error(chalk.hex('#ff5252').bold(message));

export default morganMiddleware;

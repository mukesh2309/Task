
export interface ILogger {
  oKey?: string;

  log(_: string): void;
  error(_: string): void;
  warn(_: string): void;
  info(_: string): void;
  debug(_: string): void;
}

export default class Logger implements ILogger {
  oKey: string;

  constructor(originKey: string) {
    this.oKey = originKey || 'UNSET_KEY';
    this.log = console.log;
    this.error = console.error;
    this.info = console.info;
    this.debug = console.debug;
  }

  log(_: string) {
    console.log(`LOG ${getTimeStamp()} ${this.oKey} ${_}`);
  }

  info(_: string) {
    console.info(`INFO ${getTimeStamp()} ${this.oKey} ${_}`);
  }

  warn(_: string) {
    console.warn(`WARN ${getTimeStamp()} ${this.oKey} ${_}`);
  }

  error(_: string) {
    console.error(`ERROR ${getTimeStamp()} ${this.oKey} ${_}`);
  }

  debug(_: string) {
    console.debug(`DEBUG ${getTimeStamp()} ${this.oKey} ${_}`);
  }

  setKey(nKey: string) {
    this.info(`Key changed to ${this.oKey}/${nKey}`);
    this.oKey += nKey;
  }
}
function getTimeStamp() {
    throw new Error("Function not implemented.");
}


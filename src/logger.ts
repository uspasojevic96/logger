import {LogLevel} from "./log-level";
import {cyan, red, white, yellow} from "kleur";

export class Logger {
    private logLevel: LogLevel = LogLevel.ERROR;

    public log(level: LogLevel, tag: string, message: string): void {
        switch(level) {
            case LogLevel.ERROR:
                this.logError(tag, message);
                break;
            case LogLevel.INFO:
                this.logInfo(tag, message);
                break;
            case LogLevel.WARNING:
                this.logWarning(tag, message);
                break;
            default:
                break;
        }
    }

    private generatePrefix(tag: string): string {
        let date: any = new Date().toISOString().split('T');
        date = `${date[0]} ${date[1].substring(0, date[1].length - 5)}`;

        return `${cyan(tag)} : ${date} : `;
    }

    private logError(tag: string, message: string): void {
        if (this.logLevel >= LogLevel.ERROR) {
            const str = `${this.generatePrefix(tag)}${red('[ERROR]')} ${message}`;
            console.log(str);
        }
    }

    private logInfo(tag: string, message: string): void {
        if (this.logLevel >= LogLevel.INFO) {
            const str = `${this.generatePrefix(tag)}${white('[INFO]')} ${message}`;
            console.log(str);
        }
    }

    private logWarning(tag: string, message: string): void {
        if (this.logLevel >= LogLevel.WARNING) {
            const str = `${this.generatePrefix(tag)}${yellow('[WARNING]')} ${message}`;
            console.log(str);
        }
    }
}
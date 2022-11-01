import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoggerService {
	readonly loggerEnabled: boolean;
	private colors = {
		log: '#999999',
		warning: '#FF8C00',
		error: '#FF0000',
		info: '#0000FF',
	};

	constructor() {
		this.loggerEnabled = true;
	}

	private logToConsole(message: any[], color: string = this.colors.log, groupLog: boolean = false): void {
		const timeStamp = '[' + (new Date()).toUTCString() + '] ';
		const strings = ['%c'];
		const dataObjects = [];

		if (this.loggerEnabled) {

			// place all the string values in the log message in one array so that we can color them accordingly
			// place all the complex objects (array, obj) in a separate array to be added at the end
			// why all this? to get colors in the console to show up (can only color strings)
			message.forEach((value) => {
				typeof value === 'string' ? strings.push(value) : dataObjects.push(value);
			});

			// always show the string values w/appropriate color
			const messageToLog = [strings.join(' ')];

			// use browser's console command to spit it all out
			if (groupLog) {
				console.groupCollapsed(messageToLog.toString(), 'color: ' + color, ...dataObjects);
			} else {
				console.log(messageToLog.toString(), 'color: ' + color, ...dataObjects);
			}

		}
	}

	log(...args): void {
		this.logToConsole(args, this.colors.log);
	}

	warn(...args): void {
		this.logToConsole(args, this.colors.warning);
	}

	info(...args): void {
		this.logToConsole(args, this.colors.info);
	}

	error(...args): void {
		this.logToConsole(args, this.colors.error);
	}

	group(...args): void {
		this.logToConsole(args, this.colors.info, true);
	}

	endGroup(...args): void {
		console.groupEnd();
	}

}

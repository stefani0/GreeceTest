import { IError } from './IError';

export class Result<S> {
    success: boolean ;
    errors: Array<IError>;
    warnings: Array<IError>;
    info: Array<IError>;
    code: string;

    count: number;
    data: S;

    constructor(obj?: any) {
        if (obj) {
            this.success = obj.success;
            this.errors = obj.errors;
            this.warnings = obj.warnings;
            this.info = obj.info;
            this.count = obj.count;
            this.data = obj.data;
            this.code = obj.code;
        }
    }

    setErrorText(text: string) {
        this.success = true;
        this.errors = [ { text } as IError];
    }
}

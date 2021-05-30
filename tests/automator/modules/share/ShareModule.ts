import { NextMiddleware, StepMiddleware, StepMiddlewareCtor, UtilData } from "../../../../src";

export class ShareModule extends StepMiddleware {
    public ctor: StepMiddlewareCtor & {
        cmd: {
            map: (input: string) => string
        }
    }
    constructor(ctor: StepMiddlewareCtor) {
        super(ctor);
    }
    async execute(next: NextMiddleware<StepMiddleware>, utils: UtilData, fn: string, ln: string): Promise<any> {
        await next();
        return [fn, ln].map(this.ctor.cmd.map).join(" ");
    }
}
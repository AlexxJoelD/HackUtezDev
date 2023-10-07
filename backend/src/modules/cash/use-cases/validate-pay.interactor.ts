import {UseCase} from "../../../kernel/contracts";

export class ValidatePayInteractor implements UseCase<any, any>{
    execute(payload: any): Promise<any> {
        return Promise.resolve(undefined);
    }


}

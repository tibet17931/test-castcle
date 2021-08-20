import { createParamDecorator, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";

export const RequestHeader = createParamDecorator(
    async (value: any, ctx: ExecutionContext) => {

        // extract headers
        const headers = ctx.switchToHttp().getRequest().headers;

        // Convert headers to DTO object
        const dto = plainToClass(value, headers, { excludeExtraneousValues: true });
        // Validate 
        return validateOrReject(dto).then(
            (res) => {
                return dto;
            },
            (err) => {
                let validationErrors = err.map(obj => Object.values(obj.constraints));
                console.log(err);
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: `Please Set Your Headers ${validationErrors.toString()}`
                }, HttpStatus.FORBIDDEN);
            }
        );
    },
);
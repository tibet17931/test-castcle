import { Expose } from "class-transformer";
import { IsDefined, IsString } from "class-validator";

export class HeaderDTO {
    @IsString()
    @IsDefined()
    @Expose({ name: 'accept-language' })        // required as headers are case insensitive
    'accept-language': string;

    @IsString()
    @IsDefined()
    @Expose({ name: 'accept-version' })
    'accept-version': string;
}
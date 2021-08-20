import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeaders } from '@nestjs/swagger';
import { HeaderDTO } from '../../dto/headers.dto';
import { RequestHeader } from '../../libs/customDecorator';
import { MetadataService } from './metadata.service';


@ApiHeaders([{
    name: 'Accept-Language',
    description: 'Need your Accept-Language',
    required: true
}, {
    name: 'Accept-Version',
    description: 'Need your Accept-Version',
    required: true
}])
@Controller('metadata')
export class MetadataController {

    constructor(private service: MetadataService) { }

    @Get("hashtags")
    public async listHashtags(@RequestHeader(HeaderDTO) headers: HeaderDTO) {
        return this.service.listHashtags()
    }
}


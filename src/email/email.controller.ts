import { Controller, Get, Param } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('email')
@Controller('email')
export class EmailController {

    constructor(private readonly emailService: EmailService) {}

    @Get(':filename')
    @ApiOperation({ summary: 'Extract emails from a file'})
    @ApiParam({ name: 'filename', description: 'Name of the file to read from file', type: String})
    @ApiResponse({ status: 200, description: 'List of unique email addresses from the file' })

    getEmails(@Param('filename') filename: string): { emails: string[]} {

        const filePath = `./file/${filename}.log`;
        const emails = this.emailService.extractEmails(filePath);
        return { emails };
    }
}

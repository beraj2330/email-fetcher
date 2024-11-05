import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    getEmails(filename: string): {
        emails: string[];
    };
}

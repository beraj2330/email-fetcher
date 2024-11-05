import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class EmailService {
  extractEmails(filePath: string): string[] {
    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Regular expression to match email addresses
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    // Extract all emails
    const emails = fileContent.match(emailRegex);
    
    // Return unique emails if found
    return emails ? Array.from(new Set(emails)) : [];
  }
}

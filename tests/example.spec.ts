import { test } from '@playwright/test';
import { JobPage } from '../page_objects/JobPage';
import * as fs from 'fs'


//Logging in multiple users handling
//test.use({ storageState: '../playwright/.auth/recruiter.json' });
// test.use({ storageState: '../playwright/.auth/candidate.json' });


// Logging and Error Handling
const logStep = (message: string) => console.log(`[LOG]: ${new Date().toLocaleTimeString()} - ${message}`);


test('test', async ({ page }) => {

    //

    

    //
    try {
        const jobPage = new JobPage(page)
        await jobPage.goto()
        await jobPage.searchJob('TopSchool.ai')
        await jobPage.verifyErrorMessageOfAllMandatoryFields()
        await jobPage.verifyButtonStateAlwaysEnableRegardlessMandatoryFieldsEmpty('0388365614')
        await jobPage.uploadResume('./test_files/testfile.docx')



    } catch (error) {
        console.error(`[ERROR]: Script failed during execution. Details: ${(error as Error).message}`);
    }






    
});
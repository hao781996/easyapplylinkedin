import { test } from '@playwright/test';
import { JobPage } from '../page_objects/JobPage';



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
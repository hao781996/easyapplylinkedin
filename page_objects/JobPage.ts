import { expect, Locator, Page } from "@playwright/test"
import path from 'path'

export class JobPage{
    readonly page:Page
    readonly textboxJobSearchBox:Locator

    readonly filterEasyApply:Locator
    readonly buttonEasyApply:Locator

    //Popup
    readonly dropdownEmailAddress:Locator
    readonly dropdownPhoneCountryCode:Locator
    readonly textboxMobilePhoneNumber:Locator
    readonly buttonUploadResume:Locator
    readonly buttonSubmit:Locator

    //Error Messages
    readonly textErrorMessageOfEmailAddress:Locator
    readonly textErrorMessageOfPhoneCountryCode:Locator
    readonly textErrorMessageOfMobilePhoneNumber:Locator


    constructor (page:Page){
        this.page = page
        this.textboxJobSearchBox = page.locator('input[componentkey="jobSearchBox"]')
        this.filterEasyApply = page.locator('button[aria-label="Easy Apply filter."]')
        // this.buttonEasyApply = page.locator('button#jobs-apply-button-id>span')
        this.buttonEasyApply = page.getByRole('button', { name: 'Easy Apply to School Success' })

        this.dropdownEmailAddress = page.getByLabel('EmailEmail')
        this.dropdownPhoneCountryCode = page.getByLabel('Phone country codePhone')
        this.textboxMobilePhoneNumber = page.locator('input[inputmode="text"]')
        this.buttonSubmit = page.locator('button[aria-label="Submit application"]')

        this.textErrorMessageOfEmailAddress = page.getByText('Please enter a valid answer').first()
        this.textErrorMessageOfPhoneCountryCode = page.getByText('Please enter a valid answer').nth(1)
        this.textErrorMessageOfMobilePhoneNumber = page.getByText('Enter a valid phone number')

        this.buttonUploadResume = page.getByRole('button', { name: 'Upload resume button. Only,'})        
    }

    //Methods
    async goto(){
        await this.page.goto('https://www.linkedin.com/jobs')
    }

    async searchJob(job:string){
        await this.textboxJobSearchBox.fill(job)
        await this.textboxJobSearchBox.press('Enter')
        await this.filterEasyApply.click()
        await this.buttonEasyApply.click()
    }


    async verifyErrorMessageOfAllMandatoryFields(){
        await this.dropdownEmailAddress.selectOption('Select an option')
        await this.dropdownPhoneCountryCode.selectOption('Select an option')
        await this.textboxMobilePhoneNumber.clear()
        await this.buttonSubmit.click()



        await expect(this.textErrorMessageOfEmailAddress).toHaveText('Please enter a valid answer')
        await expect(this.textErrorMessageOfPhoneCountryCode).toHaveText('Please enter a valid answer')
        await expect(this.textErrorMessageOfMobilePhoneNumber).toHaveText('Enter a valid phone number')
    }

    async verifyButtonStateAlwaysEnableRegardlessMandatoryFieldsEmpty(phone:string){
        //Verify Submit button state when leaving all required fields empty
        await this.dropdownEmailAddress.selectOption('Select an option')
        await this.dropdownPhoneCountryCode.selectOption('Select an option')
        await this.textboxMobilePhoneNumber.clear()
        await expect(this.buttonSubmit).toBeEnabled()
        
        //Verify Submit button state when all required fields empty were filled out
        await this.dropdownEmailAddress.click()
        await this.dropdownEmailAddress.press('ArrowDown')
        await this.dropdownPhoneCountryCode.click()
        await this.dropdownPhoneCountryCode.press('ArrowDown')
        await this.textboxMobilePhoneNumber.fill(phone)

    }

    async uploadResume(pathFile:string){
        const [fileChooser] = await Promise.all([
                        this.page.waitForEvent('filechooser'),
                        this.buttonUploadResume.click(), // Click the button that opens the file chooser
                        ]);
        await fileChooser.setFiles(pathFile);
    }




}
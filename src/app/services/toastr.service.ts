
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class NGXToastrService {
    constructor(public toastr: ToastrService) { }

    // Success Type

    showInputError(){
       this.toastr.error('Please Enter valid OTP') ;
    }

    otpSuccess(){
        this.toastr.success('OTP sent to your registered EmailId');
    }
    mailSentSuccess(){
        this.toastr.success('All Mails are sent to all uploaded Staff');
    }
    forgotPasswordSuccess() {
        this.toastr.success('Password is sent to your registered MailId');
    }
    reportSuccess() {
        this.toastr.success(' Report Sucessfully Generated!');
    }
    reportDownloadSuccess() {
        this.toastr.success(' Report Downloaded Sucessfully Generated!');
    }
    addSuccess() {
        this.toastr.success('Sucessfully added!');
    }
    updateSuccess() {
        this.toastr.success('Sucessfully updated!');
    }
    loginSuccess() {
        this.toastr.success('Login Sucessfully !');
    }
    registerSuccess() {
        this.toastr.success('Sucessfully Registerd!');
    }
    
    passwordChangeSuccess() {
        this.toastr.success('Password Changed Sucessfully !Please login Again ');
    }
    typeDelete() {
        this.toastr.success('Deleted Sucessfully !');
    }

    // Success Type
    typeInfo() {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    }

    // Success Type
    typeWarning() {
        this.toastr.warning('Sorry! Failed.');
    }

    // Success Type
    typeError() {
        this.toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    }

    // // Custom Type
    // typeCustom() {
    //     this.toastr.success('<span class="text-danger">Message in red.</span>', null, { enableHtml: true });
    // }

    //Progress bar
    progressBar() {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { "progressBar": true });
    }

    // Timeout
    timeout() {
        this.toastr.error('I do not think that word means what you think it means.', 'Timeout!', { "timeOut": 2000 });
    }


    //Dismiss toastr on Click
    dismissToastOnClick() {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { "tapToDismiss": true });
    }
    // Remove current toasts using animation
    clearToast() {
        this.toastr.clear()
    }

    // Show close button
    showCloseButton() {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { closeButton: true });
    }
    // Enable  HTML
    enableHtml() {
        this.toastr.info('<i>Have fun <b>storming</b> the castle!</i>', 'Miracle Max Says', { enableHtml: true });
    }
    // Title Class
    titleClass() {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { titleClass: 'h3' });
    }
    // Message Class
    messageClass() {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { messageClass: 'text-uppercase' });
    }

    showMessage(message:string){
        this.toastr.error(message);
    
    }
    

}
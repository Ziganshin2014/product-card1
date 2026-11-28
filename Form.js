export class Form {   
    constructor(id) {
      this.form = document.querySelector('.footer-form');
    }



    getValues() {
        const formData = new FormData(this.form);
        return Object.fromEntries(formData.entries());
    }

    Validate() {
        return this.form.checkValidity();
    }


    reset() {
        this.form.reset();
    }




}
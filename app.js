const popup = {

    form: document.querySelector("aside form"),
    

    init : function() { 

        //open button
        const popupBtn = document.querySelector('#popup');
        popupBtn.addEventListener('click', popup.handlePopup);
        //console.log(popupBtn);

        // close button
        const popupCloseBtn = document.querySelector('.popup__close');
        // console.log(popupCloseBtn);
        popupCloseBtn.addEventListener('click', popup.handlePopupCloseBtn);

        // submit button
        const popupForm = document.querySelector('.popup form');
        popupForm.addEventListener('submit', popup.handleFormSubmit);
    },

    // function to clik on 'Email' to open popup
    handlePopup: function(event) {
        event.preventDefault();
        
        const popupEl = document.querySelector('.popup');
        
        popupEl.classList.add('popup--on');
        // console.log(event);
    },

    // function to clik on 'x' to close popup
    handlePopupCloseBtn: function(event){
        event.preventDefault();
        const popupEl = document.querySelector('.popup');
        popupEl.classList.remove('popup--on');
    },

    handleFormSubmit: function(event) {
        event.preventDefault();

        // take data from email field
        const emailInput = document.querySelector('#sender-email');
        const senderEmail = emailInput.value;

        // take data from text field
        const messageInput = document.querySelector('#message');
        const messageContent = messageInput.value;

        // to send the form
        // popup.form.submit();
        // console.log(form);
    }



}

document.addEventListener('DOMContentLoaded', popup.init);
const btnSend = document.getElementById('btn_send');
const terms = document.getElementById('terms');

const termsAccept = () => {
    btnSend.disabled = false;
}

const termsNotAccept = () => {
    btnSend.disabled = true;
}

const validateTerms = () => {
    if (terms.checked) {
        termsAccept();
    } else {
        termsNotAccept();
    }
}
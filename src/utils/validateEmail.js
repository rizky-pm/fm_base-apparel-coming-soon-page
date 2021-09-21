const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateEmail = (e, setEmailStatus) => {
    var incomingEmail = e.target.value;

    if (incomingEmail !== '') {
        if (validEmailRegex.test(incomingEmail)) {
            setEmailStatus(true);
        } else {
            setEmailStatus(false);
        }
    } else {
        setEmailStatus(false);
    }
};

export default validateEmail;

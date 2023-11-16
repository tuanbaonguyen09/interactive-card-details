const cardNameValidate = (cardName, setFormStatus) => {
    if (cardName.length < 1) { 
        setFormStatus((prev) => ({
            ...prev,
            name: 0
        }))
    }
    else setFormStatus((prev) => ({
        ...prev,
        name: 1
    }))
}

const cardNumberValidate = (cardNumber, setFormStatus) => {
    
    if (cardNumber.length < 1 || cardNumber.length <16) { 
        setFormStatus((prev) => ({
            ...prev,
            number: 0
        }))
    }
    else setFormStatus((prev) => ({
        ...prev,
        number: 1
    }))
}

const cardMonthValidate = (cardMonth, setFormStatus) => {
    
    if (cardMonth.length < 1 || cardMonth < 0 || cardMonth > 12) { 
        setFormStatus((prev) => ({
            ...prev,
            month: 0
        }))
    }
    else setFormStatus((prev) => ({
        ...prev,
        month: 1
    }))
}

const cardYearValidate = (cardYear, setFormStatus) => {
    
    if (cardYear.length < 1 || cardYear < 20 || cardYear > 30   ) { 
        setFormStatus((prev) => ({
            ...prev,
            year: 0
        }))
    }
    else setFormStatus((prev) => ({
        ...prev,
        year: 1
    }))
}

const cardCVCValidate = (cardCVC, setFormStatus) => {
    
    if (cardCVC.length < 1) { 
        setFormStatus((prev) => ({
            ...prev,
            cvc: 0
        }))
    }
    else setFormStatus((prev) => ({
        ...prev,
        cvc: 1
    }))
}

export 
    {
        cardNameValidate,
        cardNumberValidate,
        cardMonthValidate,
        cardYearValidate,
        cardCVCValidate
    };

import { useState } from 'react'
import './index.css'
import SuccessIcon from '../../assets/icon-complete.svg'
import { 
    cardNameValidate, 
    cardNumberValidate, 
    cardMonthValidate, 
    cardYearValidate, 
    cardCVCValidate } from '../../utils/FormValidation'

const Form = ({
    setCardName, setCardNumber, setCardMonth, setCardYear, setCardCVC
}) => {
    const [successState, setSuccessState] = useState(false)
    const [formStatus, setFormStatus] = useState({
        'name' : -1, 
        'number' : -1,
        'month' : -1,
        'year' : -1,
        'cvc' : -1,
    })


    const initCardNumber = '0'.repeat(16)
    const cardNumberInputHandler = (cardNumber) => {
        setCardNumber(() => {
            const numsOfKey = cardNumber.length
            const result = cardNumber.concat(initCardNumber.slice(numsOfKey,))
            return result
        })
    }
    const cardMonthInputHandler = (cardMonth) => {
            setCardMonth(() => {
                let result =""
                if(cardMonth < 10) result = "0".concat(cardMonth)
                else result += cardMonth
                return result
            })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const state = formStatus.name & formStatus.number & formStatus.year & formStatus.month & formStatus.cvc
        if (state) setSuccessState(true)
    }

    return (
        <>
            <div className="sub_main2">
                <div className="main_form">
                {
                    !successState ? (
                        <form onSubmit={formSubmitHandler}>
                            <div className="form-item">
                                <label htmlFor="card-name">
                                    Cardholder Name
                                </label>
                                <input 
                                    className={`${formStatus.name ? '' : 'error'}`}
                                    onBlur={(event) => cardNameValidate(event.target.value, setFormStatus)}
                                    onChange={(event) => setCardName(event.target.value)} 
                                    type="text" 
                                    name="card-name" id="card-name" placeholder="e.g. Jane Appleseed"
                                    required
                                />
                                {formStatus.name ? '': <p className='error-message'>Can&apos;t be blank</p>}
                            </div>
                            <div className="form-item">
                                <label htmlFor="card-number">Card Number</label>
                                <input 
                                    className={`${formStatus.number ? '' : 'error'}`}
                                    onBlur={(event) => {
                                        event.target.value = event.target.value.replace(/(\d{4}(?=\d))/g, '$1 ')
                                        return cardNumberValidate(event.target.value.replace(/ /g,''), setFormStatus)
                                    }}
                                    onFocus={(event) => {
                                        event.target.value = event.target.value.replace(/ /g,'')
                                        return cardNumberValidate(event.target.value, setFormStatus)
                                    }}
                                    onChange={(event) => cardNumberInputHandler(event.target.value)}
                                    type="tel" 
                                    inputMode="numeric" 
                                    maxLength="16" name="card-number" id="card-number" 
                                    placeholder="e.g. 1234 5678 9123 0000"
                                    required
                                    />
                                {formStatus.number ? '': <p className='error-message'>Please enter right card number format</p>}
                                
                            </div>
                            <div className="form-item">
                                <label htmlFor="card-date">Exp. Date (MM/YY)</label>
                                <div className="card-date">
                                    <div>
                                        <input 
                                            onBlur={(event) => cardMonthValidate(event.target.value, setFormStatus)}
                                            className={`${formStatus.month ? '' : 'error'}`}
                                            onChange={(event) => cardMonthInputHandler(event.target.value)}
                                            type="text" inputMode='numeric' 
                                            maxLength={2}
                                            name="card-month" id="card-month" placeholder="MM" required/>
                                        {formStatus.month ? '': <p className='error-message'>Please enter right format</p>}
                                    </div>
                                    <div>
                                        <input 
                                            onBlur={(event) => cardYearValidate(event.target.value, setFormStatus)}
                                            className={`${formStatus.year ? '' : 'error'}`}
                                            type="text" inputMode='numeric' 
                                            maxLength={2}
                                            onChange={(event) => setCardYear(event.target.value)}
                                            name="card-year" id="card-year" placeholder="YY" required/>
                                        {formStatus.year ? '': <p className='error-message'>Please enter right format</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <label htmlFor="card-cvc">CVC</label>
                                <input 
                                onBlur={(event) => cardCVCValidate(event.target.value, setFormStatus)}
                                className={`${formStatus.cvc ? '' : 'error'}`}
                                onChange={(event) => setCardCVC(event.target.value)}
                                type="text" inputMode='numeric' 
                                maxLength={3}
                                name="card-cvc" id="card-cvc" placeholder="e.g. 123"/>
                                {formStatus.cvc ? '': <p className='error-message'>Can&apos;t be blank</p>}
                            </div>
                            <button className="submit-button">Confirm</button>
                        </form>
                    ) :
                    (
                        <div className='success_form'>
                            <img src={SuccessIcon} className='icon'/>
                            <h1>Thank you!</h1>
                            <p>We&apos;ve added your card details</p>
                            <button     
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.reload();
                                }}
                            className="continue-button">Continue</button>
                        </div>
                    )
                }

                </div>

            </div>
        </>
    )
}

export default Form
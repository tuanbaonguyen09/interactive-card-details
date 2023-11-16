import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Form from './components/Form'




const App = () => {
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState('0'.repeat(16))
    const [cardMonth, setCardMonth] = useState('')
    const [cardYear, setCardYear] = useState('00')
    const [cardCVC, setCardCVC] = useState('')


    return (
        <>
            <div className="main">
                <Background 
                    cardName={cardName}
                    cardNumber={cardNumber}
                    cardMonth={cardMonth}
                    cardYear={cardYear}
                    cardCVC={cardCVC}
                />
                <Form 
                    setCardName={setCardName}
                    setCardNumber={setCardNumber}
                    setCardMonth={setCardMonth}
                    setCardYear={setCardYear}
                    setCardCVC={setCardCVC}
                />
            </div>
        </>
    )
}

export default App
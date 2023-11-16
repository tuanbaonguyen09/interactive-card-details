import './index.css'
import FrontCardBg from '../../assets/bg-card-front.png'
import BackCardBg from '../../assets/bg-card-back.png'

const Background = ({cardName, cardNumber, cardMonth, cardYear, cardCVC}) => {
    return (
        <>
            <div className="sub_main1">
                <div className='wrapper'>
                    <div className="card-front">
                        <img src={FrontCardBg} className='card-front-bg' />

                        <div className="card-info">
                            <div className="logo"></div>
                            <div className="info">
                                <div className="number" id="number"> 
                                    {cardNumber.replace(/(\d{4}(?=\d))/g, '$1 ')}
                                </div>
                                <div className="name" id="name">
                                    {cardName ? cardName : "Jane Appleseed" }
                                    <div className="date" id="date">
                                        {cardMonth ? String(cardMonth).replace(/^(\d)$/, '0$1'): "00"}/{cardYear.length > 0 ? cardYear : "00" }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src={BackCardBg} className='card-back-bg' />
                        <div className="cvc" id="cvc"> 
                            {cardCVC ? cardCVC : '000'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background
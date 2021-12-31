import './Ticket.css'


function Ticket() {
    return (
        <div className='ticket'>
            <div className='ticket__title'>
                <p className='ticket__cost'>13 400 P</p>
                <img src="https://pics.avs.io/99/36/EK.png" alt="image here" />
            </div>
            <div className='ticket__info'>
                <div className='ticket__thither'>
                    <div className='ticket__departure'>
                        <p className='ticket__topic'>MOW HKT</p>
                        <p className='ticket__desc'>10:45 - 08:00</p>
                    </div>
                    <div className='ticket__duration'>
                        <p className='ticket__topic'>В ПУТИ</p>
                        <p className='ticket__desc'>21ч 15м</p>
                    </div>
                    <div className='ticket__transfers'>
                        <p className='ticket__topic'>2 ПЕРЕСАДКИ</p>
                        <p className='ticket__desc'>HKG, JNB</p>
                    </div>
                </div>
                <div className='ticket__backward'>
                    <div className='ticket__departure'>
                        <p className='ticket__topic'>MOW HKT</p>
                        <p className='ticket__desc'>10:45 - 08:00</p>
                    </div>
                    <div className='ticket__duration'>
                        <p className='ticket__topic'>В ПУТИ</p>
                        <p className='ticket__desc'>21ч 15м</p>
                    </div>
                    <div className='ticket__transfers'>
                        <p className='ticket__topic'>2 ПЕРЕСАДКИ</p>
                        <p className='ticket__desc'>HKG, JNB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
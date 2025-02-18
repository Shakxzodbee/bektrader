import { FaTelegram, FaInstagram} from 'react-icons/fa';
import brendimg from '../../assets/logo.webp'
import './footer.style.css'
import phoneIcon from '../../assets/svg/phone.svg'
import gmailIcon from '../../assets/svg/gmail.svg'
const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='div-brend'>
                <img src={brendimg} alt="" />
            </div>
            <div className='div-router'>
                <ul>
                    <span>Bo'limlar</span>
                    <li>Biz xaqimizda</li>
                    <li>Natijalar</li>
                    <li>Tariflar</li>
                </ul>
            </div>
            <div className='div-connect'>
                <span>Aloqa</span>
                <div>
                    <img className='phoneIcon' src={phoneIcon} alt="" />
                    <p>+998 33 595 95 00</p>
                </div>
                <div>
                    <img src={gmailIcon} alt="" />
                    <p>bektrader@gmail.com</p>
                </div>
            </div>
            <div className='div-socialMedia'>
                <span>Ijtimoiy tarmoqlar</span>
                <div>
                    <FaTelegram/>
                    <p>Telegram</p>
                </div>
                <div>
                    <FaInstagram/>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    )
}
export default Footer
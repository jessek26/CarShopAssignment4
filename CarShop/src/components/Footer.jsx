import './Footer.css'

function Footer({logo, email, adress, phone}) {
    return(
        <div className="footer">
            <h3 className="footer-logo">{logo}</h3>
            <div className="footer-text">
                <p>{email}</p>
                <p>{phone}</p>
                <p>{adress}</p>
            </div>
        </div>
    )
}
export default Footer;
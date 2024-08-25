 import ig from './img/ig.svg';
 import git from './img/git.svg';
 import lin from './img/in.svg';
 import x from './img/x.svg';
 import './ContactList.css';
 const ContactList = () => {

    return(
        <div className="contact-list">
                <ol>
                    <li><img src={ig} className="contact-icon"></img></li>
                    <li><img src={git} className="contact-icon"></img></li>
                    <li><img src={lin} className="contact-icon"></img></li>
                    <li><img src={x} className="contact-icon"></img></li>
                </ol>
            </div>
    )
}

export default ContactList
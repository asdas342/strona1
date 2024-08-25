import { useEffect } from 'react';
import './Additional.css';

// eslint-disable-next-line react/prop-types
const ExperienceItem = ({ image, year, description}) => {
    useEffect(() => {
        const items = document.querySelectorAll('.additional-item');

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                items.forEach(el => {
                    if (el !== item) {
                        el.classList.add('dimmed');
                    }
                });
            });

            item.addEventListener('mouseleave', () => {
                items.forEach(el => {
                    el.classList.remove('dimmed');
                });
            });
        });

        return () => {
            items.forEach(item => {
                item.removeEventListener('mouseenter', () => {
                    items.forEach(el => {
                        if (el !== item) {
                            el.classList.add('dimmed');
                        }
                    });
                });

                item.removeEventListener('mouseleave', () => {
                    items.forEach(el => {
                        el.classList.remove('dimmed');
                    });
                });
            });
        };
    }, []);

    return (
        <div className="additional-item">
            <div className="additional-access">
                <div className="additional-all">
                    <div className="additional-date">
                        <img src={image}></img>
                    </div>
                    <div className="additional-text">
                        <h4>{year}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default ExperienceItem;

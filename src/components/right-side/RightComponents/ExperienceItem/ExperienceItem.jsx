import { useEffect } from 'react';
import './ExperienceItem.css';

// eslint-disable-next-line react/prop-types
const ExperienceItem = ({ date, role, positions = [], description, skills = [] }) => {
    useEffect(() => {
        const items = document.querySelectorAll('.experience-item');

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
        <>
        <div className="experience-item">
            <div className="experience-access">
                <div className="experience-all">
                    <div className="experience-date">
                        {date}
                    </div>
                    <div className="experience-text">
                        <h4>{role}</h4>
                        {positions.map((position, index) => (
                            <h5 key={index}>{position}</h5>
                        ))}
                        <p>{description}</p>
                        <div className="coding-details">
                    <ol>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ol>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ExperienceItem;

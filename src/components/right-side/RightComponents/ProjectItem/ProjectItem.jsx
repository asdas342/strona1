import { useEffect } from 'react';
import './ProjectItem.css';

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ title, image, description, skills = [] }) => {
    useEffect(() => {
        const items = document.querySelectorAll('.project-item');

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
        <div className="project-item">
            <div className="project-access">
                <div className="project-all">
                    <div className="project-date">
                        <img src={image}></img>
                    </div>
                    <div className="project-text">
                        <h4>{title}</h4>
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
    );
};

export default ProjectItem;

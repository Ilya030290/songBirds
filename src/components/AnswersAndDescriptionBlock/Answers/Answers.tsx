import React from 'react';
import style from './Answers.module.css';


const Answers = () => {

    const birds = ['Ворон', 'Журавль', 'Ласточка', 'Козодой', 'Кукушка', 'Синица'];

    return (
        <div className={style.answers}>
            <ul className={style.answersList}>
                {
                    birds.map((el, index) => <li key={index}><span/>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Answers;
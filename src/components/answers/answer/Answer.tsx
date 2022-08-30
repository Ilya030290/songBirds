import React from 'react';
import {IndicatorType} from "../../../types/types";
import styles from './Answer.module.scss';


type AnswerProps = {
    id: number
    name: string
    indicator: IndicatorType
    handleClick: (li: HTMLLIElement, id: number) => void
}

const Answer: React.FC<AnswerProps> = ({id, name, indicator, handleClick}) => {

      const getIndicatorStyleStatus = (status: string) => {
          if(status === 'default') {
              return styles.default;
          } else if(status === 'fail') {
              return styles.fail;
          } else if(status === 'success') {
              return styles.success;
          }
      }
    return (
        <li className={styles.answer} onClick={(event) => handleClick(event.currentTarget, id)}>
                <span className={`${styles.indicator} ${getIndicatorStyleStatus(indicator.status)}`} />
                {name}
        </li>
    );
};

export default Answer;
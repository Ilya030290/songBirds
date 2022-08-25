import React from 'react';
import {IndicatorType} from "../../../types/types";
import style from  './Answer.module.css';


type AnswerProps = {
    id: number
    name: string
    indicator: IndicatorType
    handleClick: (li: HTMLLIElement, id: number) => void
}

const Answer: React.FC<AnswerProps> = ({id, name, indicator, handleClick}) => {

      const getIndicatorStyleStatus = (status: string) => {
          if(status === 'default') {
              return style.default;
          } else if(status === 'fail') {
              return style.fail;
          } else if(status === 'success') {
              return style.success;
          }
      }
    return (
        <li className={style.answer} onClick={(event) => handleClick(event.currentTarget, id)}>
                <span className={`${style.indicator} ${getIndicatorStyleStatus(indicator.status)}`} />
                {name}
        </li>
    );
};

export default Answer;
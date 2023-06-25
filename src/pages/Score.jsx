import React from 'react';
import { useSelector } from "react-redux";


export default function Score() {

    const curStat = useSelector((state) => {
        return state.stat.value;
      });

    const finalScore = curStat.reduce((cur,acc)=> {return cur+acc});


    return (
        <>
        <div>
           최종 스코어는 : {finalScore}
        </div>
        </>
    );
}


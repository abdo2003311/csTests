import { useState } from "react";

let Answer =
    (props:
    {
        desc: string;
        correct: number;
        order: number;
        degree: {
            data : number
        };
        questionId: string;
        questionDegree: number;
    }) : JSX.Element => {

    let { desc, correct, order, degree, questionId, questionDegree  } = props;

    let [answerd, setAnswerd] = useState(false);

    let id : string = `answer${Math.random() * 10000}`;

    let handleAnswer = () => {

        if (!answerd && order + 1 === correct) degree.data += questionDegree;

        setAnswerd(true);

        let answers = document.getElementsByClassName(questionId);

        for (let i = 0; i < answers.length; i++) {
            
            if (i + 1 === correct) answers[i].setAttribute('style', 'background-color :rgb(58, 231, 0); color : #fff');
            else answers[i].setAttribute('style', 'background-color : rgb(230, 11, 11);color : #fff');
    
        }


    }

    return (
        <div className={questionId + ' answer'} onClick={handleAnswer} id={id}>
            <p>{desc}</p>
        </div>
    )
}

export default Answer;
import { useState } from "react";


//Hjälp av chatgpt
export default function ShowResult ({ question, answers }) {
    const [showResults, setShowResults] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClick = (id) => {
        setSelected(id);
        setShowResults(true);
    };


    return (
        <article className="survey">
            {question && <p className="survey-question">{question}</p>}

            <div className="survey-buttons">
                {answers.map((a) => (
                    <button
                        key={a.id}
                        type="button"
                        onClick={() => handleClick(a.id)}
                        className={selected === a.id ? "is-selected" : ""}
                    >
                        {a.text}
                    </button>
                ))}
            </div>

            {showResults && (
                <ul>
                    {answers.map((a) => (
                        <li
                            key={a.id}
                            className={`survey-row ${selected === a.id ? "is-selected" : ""}`}
                            >

                            <div className="survey-bar-wrapper">
                                <div
                                className="survey-bar"
                                style={{ width: `${a.count}%` }}
                                />
                            </div>

                            <span className="survey-label">{a.text}</span>
                            <span className="survey-percent">{a.count}%</span>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    )
}
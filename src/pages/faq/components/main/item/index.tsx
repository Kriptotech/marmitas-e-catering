import style from "./styles.module.css";
import { ArrowCircleDown, ArrowCircleUp, Question } from "phosphor-react";
import { useState } from "react";

export function Item({
    title,
    description,
    isOpened,
}: {
    title: string;
    description: string;
    isOpened?: boolean;
}) {
    const [dropped, setDropped] = useState(isOpened == true ? true : false);

    return (
        <div className={style.row}>
            <div
                className={style.row_header}
                onClick={() => {
                    setDropped(!dropped);
                }}
            >
                <div>
                    <span>
                        <Question size={30} weight="fill" color="white" />
                    </span>
                    {title}
                </div>
                {!dropped ? (
                    <ArrowCircleUp size={25} weight="fill" color="#555" />
                ) : (
                    <ArrowCircleDown size={25} weight="fill" color="#555" />
                )}
            </div>
            {dropped && <p>{description}</p>}
        </div>
    );
}

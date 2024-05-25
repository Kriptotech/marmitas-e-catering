import style from "./styles.module.css";

export function Hero() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <p>
                    <span>Lorem ipsum dolor sit.</span> Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Et, ipsa.{" "}
                    <span>Lorem ipsum dolor sit.</span>
                </p>
            </div>
        </div>
    );
}

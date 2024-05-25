import styles from "./styles.module.css";
import { Star } from "phosphor-react";

interface IProps {
    description: string;
    name: string;
    image: string;
}

export function Item({ description, image, name }: IProps) {
    return (
        <div className={styles.item}>
            <div className={styles.row}>
                <img src={image} alt="person's photo" />

                <div>
                    <span>{name}</span>

                    <Star color="#ff7426" size={15} weight="fill" />
                    <Star color="#ff7426" size={15} weight="fill" />
                    <Star color="#ff7426" size={15} weight="fill" />
                    <Star color="#ff7426" size={15} weight="regular" />
                    <Star color="#ff7426" size={15} weight="regular" />
                </div>
            </div>

            <p>{description}</p>
        </div>
    );
}

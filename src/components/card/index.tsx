import styles from './index.module.scss'
import React, {FC} from "react";
import {Data} from "./interface";

interface CardProps {
    data: Data
}

const Card: FC<CardProps> = ({data}) => {
    if (data.type === "") data.type = "Has no features"
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={data.image} alt={data.name}/>
            </div>
            <div className={styles.card__info}>
                <h2><span>Name:</span> {data.name}</h2>
                <h2><span>Status: </span>{data.status}</h2>
                <h2><span>Gender:</span> {data.gender}</h2>
                <h2><span>Species: </span>{data.species}</h2>
                <h2><span>Type: </span>{data.type}</h2>
            </div>
        </div>
    )
}

export default Card
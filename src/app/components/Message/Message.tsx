import { ReactElement } from "react";
import style from './message.module.css';

interface MessageProps {
    title: string;
    children: ReactElement | string;
}
export const Message = ({ title, children }: MessageProps): ReactElement => {
    return <section className={style.message}>
        <h3>{title}</h3>
        <div>{children}</div>
    </section>
}
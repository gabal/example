import { ReactElement } from "react";
import styles from './details-box.module.css';
interface DetailsBoxProps {
    title?: string;
    children: ReactElement;
}
export const DetailsBox = ({ title, children }: DetailsBoxProps): ReactElement => {
    return <section className={styles?.['details-box']}>
        {title && <h2>{title}</h2>}
        <div role="region">{children}</div>
    </section>;
}



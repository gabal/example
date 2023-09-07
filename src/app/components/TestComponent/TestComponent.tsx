import styles from './test-component.module.css';

export const TestComponent = () => {
    return <div className={styles?.['test-component']}>
        TestComponent
    </div >;
}

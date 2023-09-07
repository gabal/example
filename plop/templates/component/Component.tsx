import styles from './{{kebabCase name}}.module.css';

export const {{ pascalCase name }} = () => {
    return <div className={styles?.['{{ kebabCase name }}']}>
        {{ name }}
    </div >;
}

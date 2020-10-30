// @flow
import React from 'react';
// CSSファイルを読み込む
import styles from '../css/heading.css';

// propsの型定義
type Props = {
    name: string;
}

const Heading = (props: Props) => {
    const { name } = props;
    // 自動生成されたクラス名は"styles.<もとのクラス名>"でアクセスできる
    return <h1 className={styles.text}>{`Hello ${name} World!`}</h1>;
};

export default Heading;

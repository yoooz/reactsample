// @flow
export class Hello {
    // this.name の型定義
    name: string;

    // 引数nameの型定義
    constructor(name: string) {
        this.name = name;
        this.say();
    }

    // 戻り値の型定義は省略可能(voidである場合)
    say(): void {
        console.log(`Hello ${this.name} World!`);
    }
}

export default new Hello('Oggi');

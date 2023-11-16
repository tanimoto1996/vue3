import type { ButtonHTMLAttributes } from "vue";

export const ButtonVariantProp = {
    Primary: 'primary',
    Secondary: 'secondary',
} as const;

export type ButtonVariantProp = typeof ButtonVariantProp[keyof typeof ButtonVariantProp];

export type ButtonProps = {
    /**
     * ボタンバリアント
     */
    variant?: ButtonVariantProp;

    /**
     * ボタンタイプ
     */
    type?: ButtonHTMLAttributes['type']

    /**
     * アウトライン
     */
    isOutline?: boolean;
    

    /**
     * ボタンテキスト
     */
    text: string;
}
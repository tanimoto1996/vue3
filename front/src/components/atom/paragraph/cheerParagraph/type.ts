export const ParagraphVariantProp = {
    Black: 'black',
    White: 'white',
    Gray: 'gray',
} as const;

export type ParagraphVariantProp = typeof ParagraphVariantProp[keyof typeof ParagraphVariantProp];

export type ParagraphProps = {
    variant: ParagraphVariantProp;
}
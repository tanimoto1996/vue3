export const HeaderTitleProp = {
    Corporation: 'corporation',
    Bussiness: 'bussiness',
    Staff: 'staff',
    User: 'user',
} as const;

export type HeaderTitleProp = typeof HeaderTitleProp[keyof typeof HeaderTitleProp];


export type HeaderTitleProps = {
    title: HeaderTitleProp;
}

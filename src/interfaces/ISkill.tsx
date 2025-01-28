export interface ISkill{
    id?: string,
    name: string,
    description?: string,
    base_price: number,
    multiplying_factor?: number,
    img_url? : string,
    category_id?: string
}
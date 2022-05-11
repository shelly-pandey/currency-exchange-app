//type defined for search but search is handeled from dropdown
export type SearchProp = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//Currency types defined
export type Currency = {
    code: string
    currencyname: string
    }

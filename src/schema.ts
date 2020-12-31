export interface ArtType  {
    id: number
    name: string
    pic : string
    price: number
    owner: UserType
}

export interface UserType {
    id: number
    name: string
    password: string
    arts: [ArtType]
}


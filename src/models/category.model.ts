export interface Category {
    idCategory: number
    description: string
    imagePath: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
}

export interface CategoryRow {
    id_category: number
    description: string
    image_path: string | null
    active: boolean
    created_at: Date
    updated_at: Date
}
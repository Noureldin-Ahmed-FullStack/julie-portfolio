export interface SocialPost {
    content?: string
    comments?: Comments[]
    createdBy?: UserData
    createdAt?: string
    role?: string
    Images?: string[]
    _id?: string
}
export interface userType {
    name: string,
    _id: string,
    userPFP: string,
    email: string,
    role: 'user' | 'admin' | 'owner' | 'dev'
  }
export interface UserData {
    email: string
    _id: string
    name: string
    userPFP: string
    role: 'user' | 'admin' | 'dev' | 'teamlead'
}
export interface Comments {
    content: string
    createdBy: UserData
    createdAt: string
}
export interface response {
    Images: [string]
    tags: [string]
    createdAt: string
    location: string
    address: string
    coverImage: string
    note: string
    price: number
    ownedBy: string
    type: string
    title: string
    _id: string
};
export interface rating {
    userId: string
    rating: number,
}
export interface ArtPieceType {
    Images: [string]
    tags: [string]
    createdAt: string
    ratings: [rating]
    coverImage: string
    note: string
    status: string
    price: number
    type: 'general' | 'cartoon_characters' | 'animals' | 'realism' | 'historical_icons'
    title: string
    _id: string
};
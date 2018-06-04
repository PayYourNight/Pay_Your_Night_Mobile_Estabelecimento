export interface User  {
    id: string,
    displayName: string,
    username: string,
    created: Date,
    roles: Array<string>,
    profileImageURL: string,
    email: string,
    lastName: string,
    firstName: string
}

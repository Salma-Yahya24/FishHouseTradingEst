export interface Login {
    
  userName: string,
  password: string

}

export interface successResponse {
  success: boolean
  data: Data
}

export interface Data {
  token: string
  expiryDate: string
}
export interface errorResponse {
  success: boolean
  data: string
}
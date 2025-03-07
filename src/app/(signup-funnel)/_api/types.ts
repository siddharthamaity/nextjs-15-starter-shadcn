export interface EmailVerificationResponse {
    success: boolean;
    message: string;
    userId?: string;
}

export interface EmailStatusResponse {
    verified: boolean;
    email: string;
}

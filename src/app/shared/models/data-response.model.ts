export class SuccessResponse {
    current_page: number = 1;
    data: any;
    per_page: number = 15;
    total: number =  15;
}
export class Meta {
    current_page: number = 1;
    from: number = 1;
    per_page: number = 15;
    total: number =  15;
    last_page: number = 1;
    to: number = 15;
}
export class DataResponse{
    success: SuccessResponse;
    meta: Meta
    data: [];
}
export function extractErrorMessage(error: any): string {
  return error?.response?.data?.message || error?.message || 'Lỗi không xác định';
}

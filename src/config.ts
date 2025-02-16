interface EnvConfig {
  API_BASE_URL: string;
}

// Fallback to prevent undefined values during build
export const config: EnvConfig = {
  API_BASE_URL:
    process?.env?.REACT_APP_API_BASE_URL || 'https://default-api.com',
};

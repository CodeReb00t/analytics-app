const requiredEnvKeys = ['VITE_API_URL'] as const

type RequiredEnvKey = (typeof requiredEnvKeys)[number]

function getEnvValue(key: RequiredEnvKey): string {
  const value = import.meta.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'Analytics App',
  apiUrl: getEnvValue('VITE_API_URL'),
  logLevel: import.meta.env.VITE_LOG_LEVEL ?? 'info',
  isDev: import.meta.env.DEV,
  mongoUri:
    import.meta.env.VITE_MONGO_URI ?? 'mongodb://localhost:27017/analytics-app',
}

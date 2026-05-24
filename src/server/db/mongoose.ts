import { env } from '#/shared/config/env'
import mongoose from 'mongoose'
let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(env.mongoUri)
  }

  cached.conn = await cached.promise
  return cached.conn
}

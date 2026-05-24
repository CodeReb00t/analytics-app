import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '#/server/models/user.model'

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

function generateToken(
  user: { id: string; email: string },
  options: jwt.SignOptions,
) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET!,
    options,
  )
}

type AuthUserRecord = {
  _id: string | { toString(): string }
  email: string
  password: string
  fullName?: string
}

export const login = createServerFn({ method: 'POST' })
  .inputValidator(loginSchema)
  .handler(async ({ data }) => {
    const { email, password } = data
    await import('#/server/db/mongoose')

    const user = await User.findOne({ email }).lean<AuthUserRecord | null>()
    if (!user) {
      throw new Error('Invalid email or password')
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      throw new Error('Invalid email or password')
    }

    const userId = typeof user._id === 'string' ? user._id : user._id.toString()

    const accessToken = generateToken(
      { id: userId, email: user.email },
      { expiresIn: '15m' },
    )

    const refreshToken = generateToken(
      { id: userId, email: user.email },
      { expiresIn: '7d' },
    )

    return {
      user: {
        id: userId,
        email: user.email,
        fullName: user.fullName ?? '',
      },
      accessToken,
      refreshToken,
    }
  })

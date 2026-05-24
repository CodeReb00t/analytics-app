import { useState } from 'react'
import { useAuth } from '../use-auth'
import { Navigate } from '@tanstack/react-router'

const LoginPage = () => {
  const { login, isAuthenticated, user, error, clearError, isLoading } =
    useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(event: any) {
    event.preventDefault()
    clearError()
    setLoading(true)
    try {
      await login({ email, password })
    } finally {
      setLoading(false)
    }
  }
  if (isAuthenticated) return <Navigate to="/" />
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 via-white to-slate-200 px-4">
      {/* Card */}
      <section className="w-full max-w-md rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            Welcome back
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Sign in to your account
          </h1>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black text-white py-2.5 text-sm font-semibold transition hover:bg-gray-900 active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <span className="font-medium text-black cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </form>
      </section>
    </main>
  )
}

export default LoginPage

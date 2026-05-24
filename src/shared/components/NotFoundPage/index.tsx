import { Link } from '@tanstack/react-router'

const RootNotFound = () => {
  return (
    <main className="page-wrap py-16">
      <section className="island-shell rounded-2xl p-8">
        <p className="island-kicker mb-2">Page not found</p>
        <h1 className="display-title text-3xl font-semibold">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-[var(--sea-ink-soft)]">
          The link may be outdated, or the page may have moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg border border-[var(--line)] px-4 py-2 text-sm hover:bg-[var(--link-bg-hover)]"
        >
          Go to dashboard
        </Link>
      </section>
    </main>
  )
}
export default RootNotFound

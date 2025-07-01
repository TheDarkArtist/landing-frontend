import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: 'auto',
        color: '#e0e0e0',
        backgroundColor: '#0e0e0e',
        borderRadius: '8px',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff6b6b' }}>
        🕳️ 404 – Page Vanished
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#cccccc' }}>
        This landing page doesn’t exist… yet.
      </p>
      <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#aaaaaa' }}>
        Did you forget to <strong style={{ color: '#fff' }}>publish</strong> the entry in Contentful?<br />
        Or maybe mistyped the slug?
      </p>
      <Link href="/">
        <button
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: '#222',
            color: '#00e5ff',
            border: '1px solid #444',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
        >
          🏠 Take Me Home
        </button>
      </Link>
    </div>
  );
}


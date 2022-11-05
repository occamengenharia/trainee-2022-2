import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/form">
        <button>
          Ir ao Form
        </button>
      </Link>
    </div>
  )
}

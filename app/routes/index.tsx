import type {
  LinksFunction,
} from "@remix-run/node";

import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import stylesUrl from './index.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesUrl }
  ]
}

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="ri-home">
      {/* @todo: extract to Hero component */}
      <section className='ri-home__hero'>
        <img
          src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
          alt="Sonic Youth On Stage"
        />
        <div>
          <h1>Indie Stack</h1>
          <p>
            Check the README.md file for instructions on how to get this
            project deployed.
          </p>
          {user ? (
            <Link
              to="/notes"
            >
              View Notes for {user.email}
            </Link>
          ) : (
            <>
            <Link
              to="/join"
            >
              Sign up
            </Link>
            <Link
              to="/login"
            >
              Log In
            </Link>
            </>
          )}
          <a href="https://remix.run">
            <img
              src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
              alt="Remix"
              className="ri-home__hero-logo"
            />
          </a>
        </div>
      </section>
      {/* @todo: extract to LogoList component */}
      <aside className="ri-home__logo-list">
        {[
          {
            src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
            alt: "Fly.io",
            href: "https://fly.io",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
            alt: "SQLite",
            href: "https://sqlite.org",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
            alt: "Prisma",
            href: "https://prisma.io",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
            alt: "Cypress",
            href: "https://www.cypress.io",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
            alt: "MSW",
            href: "https://mswjs.io",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
            alt: "Vitest",
            href: "https://vitest.dev",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
            alt: "Testing Library",
            href: "https://testing-library.com",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
            alt: "Prettier",
            href: "https://prettier.io",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
            alt: "ESLint",
            href: "https://eslint.org",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
            alt: "TypeScript",
            href: "https://typescriptlang.org",
          },
        ].map((img) => (
          <a
            key={img.href}
            href={img.href}
          >
            <img alt={img.alt} src={img.src} />
          </a>
        ))}
      </aside>
    </main>
  );
}

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "./session.server";

import tokenStylesUrl from './styles/tokens.css';
import globalStylesUrl from './styles/global.css';
import typographyStylesUrl from './styles/typography.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: 'https://unpkg.com/open-props' },
    { rel: 'stylesheet', href: 'https://unpkg.com/open-props/normalize.min.css' },
    { rel: 'stylesheet', href: tokenStylesUrl },
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: 'stylesheet', href: typographyStylesUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

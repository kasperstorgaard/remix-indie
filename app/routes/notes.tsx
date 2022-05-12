import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";

import stylesUrl from './notes.css';
import { Button, links as buttonLinks } from '../components/button/button';

type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getNoteListItems>>;
};

export const links: LinksFunction = () => {
  return [
    ...buttonLinks(),
    { rel: 'stylesheet', href: stylesUrl }
  ]
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json<LoaderData>({ noteListItems });
};

export default function NotesPage() {
  const data = useLoaderData() as LoaderData;
  const user = useUser();

  return (
    <div className="ri-notes">
      <header>
        <h1>
          Notes
        </h1>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <Button
            type="submit"
            variation="secondary"
          >
            Logout
          </Button>
        </Form>
      </header>

      <main>
        <aside>
          <Link to="new">
            + New Note
          </Link>

          {data.noteListItems.length === 0 ? (
            <p>No notes yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝&nbsp;&nbsp;{note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </aside>
        <Outlet />
      </main>
    </div>
  );
}

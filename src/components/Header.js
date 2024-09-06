import { Icons } from "./Icons";

export default function Header({ name }) {
  return (
    <header className="py-6 text-center">
      <div className="relative inline-block">
        <h1 className="text-4xl font-bold">{name}</h1>
        <Icons.underline
          className="block pointer-events-none absolute inset-x-0 -bottom-2 top-4 text-white-600"
        />
      </div>
    </header>
  );
}

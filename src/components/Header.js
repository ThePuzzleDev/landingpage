export default function Header({ name }) {
    return (
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">{name}</h1>
      </header>
    );
  }
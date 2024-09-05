export default function Header() {
  return (
    <div>
      <div className="px-1 py-4 flex items-center justify-center">
        <h1 className="mb-4 font-extrabold leading-none tracking-tight text-2xl md:text-5xl lg:text-5xl text-stone-300">
          Your only{" "}
          <mark className="px-2 text-black rounded bg-pink-500">Hub</mark> for
          PYQ&apos;s
        </h1>
      </div>
    </div>
  );
}

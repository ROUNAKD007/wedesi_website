export default function Stars() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-[0.15]">
      <div className="absolute inset-0 animate-twinkle bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"></div>
    </div>
  );
}

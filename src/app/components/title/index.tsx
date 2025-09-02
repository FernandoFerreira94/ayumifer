export default function Title({ text }: { text: string }) {
  return (
    <h1
      className="text-4xl font-bold w-full text-center my-4 max-sm:my-0 max-sm:text-3xl text-shadow-md"
      style={{ color: "#A7884A" }}
    >
      {text}
    </h1>
  );
}

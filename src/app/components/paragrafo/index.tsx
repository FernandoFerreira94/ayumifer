export function Paragrafo({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xl max-sm:text-[1rem] max-sm:leading-8 w-8/10 text-gray-500 tracking-widest  leading-loose ${className}`}
    >
      {children}
    </p>
  );
}

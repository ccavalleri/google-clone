export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-[50%] text-sm  translate-x-[-50%] git whitespace-nowrap p-6 text-gray-600">
      <p>Copyright &copy; {new Date().getFullYear()} Bacetech ltd</p>
    </footer>
  );
}

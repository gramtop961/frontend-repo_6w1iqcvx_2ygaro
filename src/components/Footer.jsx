export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 bg-white" />
      <div className="relative mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-blue-900/80">© 2025 FLAMES Café • Premium futuristic coffee branding</p>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-full text-blue-900 bg-yellow-200 hover:bg-yellow-300 transition-colors">Privacy</button>
          <button className="px-4 py-2 rounded-full text-blue-900 bg-yellow-200 hover:bg-yellow-300 transition-colors">Terms</button>
        </div>
      </div>
    </footer>
  );
}

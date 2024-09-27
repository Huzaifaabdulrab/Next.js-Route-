export default function Services() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 mt-80">
      <div className="bg-white border rounded-lg p-6 hover:bg-blue-300 hover:text-white transition">
        <h2 className="text-lg font-semibold mb-2">HTML Development</h2>
        <p>Basic HTML structure and semantic tags for modern websites.</p>
      </div>
      <div className="bg-white border rounded-lg p-6 hover:bg-blue-300 hover:text-white transition">
        <h2 className="text-lg font-semibold mb-2">CSS Styling</h2>
        <p>Learn how to style web pages using modern CSS techniques.</p>
      </div>
      <div className="bg-white border rounded-lg p-6 hover:bg-blue-300 hover:text-white transition">
        <h2 className="text-lg font-semibold mb-2">JavaScript Development</h2>
        <p>Learn how to use JavaScript to make interactive web pages.</p>
      </div>
      <div className="bg-white border rounded-lg p-6 hover:bg-blue-300 hover:text-white transition">
        <h2 className="text-lg font-semibold mb-2">TypeScript Programming</h2>
        <p>Type-safe JavaScript with enhanced features and scalability.</p>
      </div>
    </div>
  );
}

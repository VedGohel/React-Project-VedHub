export default function CardComponent() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="/src/assets/12.jpg"
            alt="Card Image"
          />
          <div className="py-4 text-center">
            <h2 className="text-xl font-semibold text-black">Ved Gohel</h2>
            <p className="text-gray-600 mt-2">
              I am Ved Gohel and I am currently learning React with Tailwind Props.
            </p>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Click Me
          </button>
        </div>
      </div>
    );
  }
  
export default function FilmCard({ film, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-transform">
      <img
        src={film.poster_url}
        alt={film.title}
        className="w-full h-56 object-cover rounded-lg mb-3"
      />
      <h3 className="font-bold text-gray-600 text-lg">{film.title}</h3>
      <p className="text-yellow-500 font-semibold">⭐ {film.rating}</p>
      <p className="text-gray-600 text-sm">{film.summary}</p>
      <p className="italic text-gray-400 text-sm">{film.review}</p>
      <div className="flex gap-2 mt-3">
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => onEdit(film)}
        >
          Modifier
        </button>
        <button
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
          onClick={() => onDelete(film.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

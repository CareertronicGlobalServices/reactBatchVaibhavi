function StudentCard({ name, score, course }) {
  return (
    <div className="w-72 rounded-2xl bg-white p-6 shadow-lg border border-slate-100">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
        {name}
      </div>

      <h2 className="text-xl font-bold text-slate-800">{name}</h2>
      <p className="mt-1 text-sm text-slate-500">{course}</p>

      <div className="mt-4 rounded-lg bg-indigo-50 p-3">
        <p className="text-sm text-indigo-600">
          Score: <span className="font-bold">{score}/100</span>
        </p>
      </div>
    </div>
  );
}

export default StudentCard;

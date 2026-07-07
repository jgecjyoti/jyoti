import { NavLink } from "react-router-dom";

export default function PreviousTeamLink({ year }) {
  return (
    <NavLink
      to={`/team2k${year}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group"
    >
      <div className="w-44 rounded-xl border border-amber-400 bg-white shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-amber-50">
        <h3 className="text-2xl font-semibold text-[#915f2e]">
          2K{year}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          Core Team
        </p>

        <span className="mt-4 inline-block text-amber-700 font-medium group-hover:translate-x-1 transition-transform">
          View →
        </span>
      </div>
    </NavLink>
  );
}
/**
 * TASK-07: TeamMemberCard Component
 * Design: "Neon Operations" — dark card with photo, name, role, bio
 * Used on /about page.
 */

interface TeamMemberCardProps {
  photo?: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
}

export default function TeamMemberCard({ photo, name, role, bio, linkedin }: TeamMemberCardProps) {
  return (
    <div className="group p-6 rounded-lg border border-[#1E2738] bg-[#0D1220] hover:border-[#8C34E9]/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Photo */}
        <div className="w-16 h-16 rounded-full bg-[#1E2738] overflow-hidden shrink-0 flex items-center justify-center">
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xl font-bold text-[#596475]" style={{ fontFamily: 'Montserrat' }}>
              {name.charAt(0)}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-base font-bold text-white" style={{ fontFamily: 'Montserrat' }}>
            {name}
          </h3>
          <p className="text-xs font-medium text-[#8C34E9] mb-2">{role}</p>
          <p className="text-sm text-[#8890A0] leading-relaxed">{bio}</p>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs text-[#596475] hover:text-[#8C34E9] transition-colors"
            >
              LinkedIn &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";

const PullRequestSidebar: React.FC = () => {
  return (
    <div className="w-80 p-4 bg-[#0d1117] border-l border-[#30363d]">
      <button className="w-full bg-[#238636] hover:bg-[#2ea043] text-white py-1.5 px-4 rounded-md mb-4 text-sm font-medium border border-[#3fb950]">
        New issue
      </button>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Reviewers</h2>
        <ul className="space-y-1 text-sm">
          <li className="text-[#58a6ff]">shaden</li>
          <li className="text-[#58a6ff]">Jacksonmills</li>
          <li className="text-[#58a6ff]">matwesh</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Assignees</h2>
        <p className="text-sm text-[#8b949e]">No one assigned</p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Labels</h2>
        <div className="flex flex-wrap gap-1">
          <span className="text-xs bg-[#1f6feb] bg-opacity-20 text-[#58a6ff] px-2 py-1 rounded-full">
            automerge
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Projects</h2>
        <p className="text-sm text-[#8b949e]">None yet</p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Milestone</h2>
        <p className="text-sm text-[#8b949e]">No milestone</p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Development</h2>
        <p className="text-sm text-[#8b949e]">
          Successfully merging this pull request may close these issues.
        </p>
        <p className="text-sm text-[#8b949e] mt-1">None yet</p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Participants</h2>
        <p className="text-sm text-[#8b949e]">4 participants</p>
      </div>

      <div className="border-t border-[#30363d] pt-4">
        <h2 className="text-sm font-semibold mb-2">vercel</h2>
        <p className="text-xs text-[#8b949e] mb-3">
          The latest updates on your projects. Learn more about Vercel for Git
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-[#8b949e] border-b border-[#30363d]">
                <th className="pb-2 font-semibold">Name</th>
                <th className="pb-2 font-semibold">Status</th>
                <th className="pb-2 font-semibold">Preview</th>
                <th className="pb-2 font-semibold">Updated (UTC)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#30363d]">
                <td className="py-2">ui</td>
                <td className="py-2">Ready (inspect)</td>
                <td className="py-2 text-[#58a6ff] hover:underline cursor-pointer">
                  Visit Preview
                </td>
                <td className="py-2">Mar 17, 2025 10:54am</td>
              </tr>
              <tr>
                <td className="py-2">v4</td>
                <td className="py-2">Ready (inspect)</td>
                <td className="py-2 text-[#58a6ff] hover:underline cursor-pointer">
                  Visit Preview
                </td>
                <td className="py-2">Mar 17, 2025 10:54am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PullRequestSidebar;

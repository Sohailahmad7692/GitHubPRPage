// import React from 'react';
// import {
//   Check,
//   Pencil,
//   GitCommit,
//   Rocket,
//   GitMerge
// } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { getThemeClasses } from '../utils/ThemeUtils';
// import SignupBanner from './SignUpBanner';

// const PRTimeline: React.FC = () => {
//   const { isDark } = useTheme();
//   const theme = getThemeClasses(isDark);

//   return (
//     <div className="col-span-1 md:col-span-3">
//       {/* Original comment */}
//       <div className={`border ${theme.border} rounded-md mb-4`}>
//         <div className={`border-b ${theme.border} p-3 ${theme.bgSecondary} flex flex-wrap items-center`}>
//           <a href="#" className="flex items-center">
//             <img src="https://avatars.githubusercontent.com/u/15782156?s=60&v=4" alt="YordanIliev2002" className="w-8 h-8 rounded-full mr-2" />
//             <span className="font-semibold">YordanIliev2002</span>
//           </a>
//           <span className={`${theme.textSecondary} text-sm ml-2`}>commented Mar 14, 2025</span>
//           <div className="ml-auto relative">
//             <button className={theme.textSecondary}>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM14.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div className="p-4">
//           <p className={theme.textMain}>There was a typo</p>
//         </div>
//       </div>

//       {/* Title change event */}
//       <div className="flex items-center space-x-2 mb-4">
//         <div className={`w-6 h-6 rounded-full ${theme.bgTertiary} flex items-center justify-center`}>
//           <Pencil size={12} className={theme.textMain} />
//         </div>
//         <div className="text-sm">
//           <a href="#" className={`${theme.textLink} hover:underline`}>YordanIliev2002</a>
//           <span className={theme.textSecondary}> changed the title </span>
//           <del className={theme.textSecondary}>Fix css selector for Zinc theme in website</del>
//           <span className={theme.textSecondary}> → </span>
//           <span>docs: fix typo in CSS selector</span>
//         </div>
//       </div>

//       {/* Commit event */}
//       <div className="flex items-center space-x-2 mb-4">
//         <div className={`w-6 h-6 rounded-full ${theme.bgTertiary} flex items-center justify-center`}>
//           <GitCommit size={12} className={theme.textMain} />
//         </div>
//         <div className="text-sm">
//           <a href="#" className={`${theme.textLink} hover:underline`}>YordanIliev2002</a>
//           <span className={theme.textSecondary}> committed </span>
//           <a href="#" className={`${theme.textMain} font-mono`}>5a72857</a>
//           <span className={theme.textSecondary}>: docs: fix typo in CSS selector</span>
//         </div>
//       </div>

//       {/* Review event */}
//       <div className="flex items-center space-x-2 mb-4">
//         <div className={`w-6 h-6 rounded-full ${theme.bgTertiary} flex items-center justify-center`}>
//           <Check size={12} className={theme.textMain} />
//         </div>
//         <div className="text-sm">
//           <a href="#" className={`${theme.textLink} hover:underline`}>shadcn</a>
//           <span className={theme.textSecondary}> approved these changes</span>
//           <span className={`${theme.textSecondary} ml-2`}>Mar 17, 2025</span>
//           <div className={`mt-1 p-3 ${theme.bgSecondary} rounded-md`}>
//             <p className={theme.textMain}>Thank you</p>
//           </div>
//         </div>
//       </div>

//       {/* Deployment event */}
//       <div className="flex items-center space-x-2 mb-4">
//         <div className={`w-6 h-6 rounded-full ${theme.bgTertiary} flex items-center justify-center`}>
//           <Rocket size={12} className={theme.textMain} />
//         </div>
//         <div className="text-sm">
//           <span className={theme.textSecondary}>Deployed to </span>
//           <a href="#" className={`${theme.textMain} font-semibold hover:underline`}>Preview – ui</a>
//           <a href="#" className={`float-right ${theme.buttonSecondary} ${theme.textMain} text-xs rounded px-2 py-1`}>View deployment</a>
//         </div>
//       </div>

//       {/* Merge event */}
//       <div className="flex items-center space-x-2 mb-4">
//         <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
//           <GitMerge size={12} className="text-white" />
//         </div>
//         <div className="text-sm">
//           <a href="#" className={`${theme.textLink} hover:underline`}>kodiakhq</a>
//           <span className={`${theme.textMain} ml-1 px-1 ${theme.bgSecondary} rounded text-xs`}>bot</span>
//           <span className={theme.textSecondary}> merged commit </span>
//           <a href="#" className={`${theme.textLink} font-mono hover:underline`}>61e21e3</a>
//           <span className={theme.textSecondary}> into </span>
//           <span className={theme.textMain}>shadcn-ui:main</span>
//           <span className={`${theme.textSecondary} ml-2`}>Mar 17, 2025</span>
//         </div>
//       </div>
//       <SignupBanner />
//     </div>
//   );
// };

// export default PRTimeline;
import React from "react";
import {
  Check,
  Pencil,
  GitCommit,
  GitMerge,
  MoreVertical,
  Tag,
  Rocket,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { getThemeClasses } from "../utils/ThemeUtils";
import SignupBanner from "./SignUpBanner";

const PRTimeline: React.FC = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);
  const avatarArray = [
    {
      name: "Jacksonmills",
      src: "https://avatars.githubusercontent.com/u/19780885?s=40&v=4",
    },
    {
      name: "matevegh",
      src: "https://avatars.githubusercontent.com/u/30011773?s=40&v=4",
    },
    {
      name: "shadcn",
      src: "https://avatars.githubusercontent.com/u/124599?s=52&v=4",
    },
  ];

  return (
    <div className={`col-span-1 md:col-span-3 ${theme.bgMain}`}>
      <div className={`border ${theme.border} rounded-md mb-4`}>
        <div
          className={`border-b ${theme.border} p-3 ${theme.bgSecondary} flex flex-wrap items-center`}
        >
          <a href="#" className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/15782156?s=60&v=4"
              alt="YordanIliev2002"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-semibold">YordanIliev2002</span>
          </a>

          <span className={`${theme.textSecondary} text-sm ml-2`}>
            commented Mar 14, 2025
          </span>

          <div className="ml-auto relative">
            <button className={theme.textSecondary}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM14.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4">
          <p className={theme.textMain}>There was a typo</p>
        </div>
      </div>
      <div className={`border ${theme.border} rounded-md mb-4`}>
        <div className="flex items-center p-4">
          <div className="flex items-center flex-grow">
            <div className="w-8 h-8 rounded-full mr-2 bg-black flex items-center justify-center">
              <div className="text-white">▲</div>
            </div>
            <div>
              <div className="flex items-center">
                <span className={`font-medium ${theme.textMain}`}>vercel</span>
                <span
                  className={`text-xs px-2 py-0.5 mx-1 rounded-full ${theme.bgSecondary} ${theme.textSecondary}`}
                >
                  bot
                </span>
                <span className={`${theme.textSecondary}`}>
                  commented on Mar 14
                </span>
              </div>
            </div>
          </div>
          <div>
            <button className={theme.textSecondary}>
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <p className={theme.textMain}>
            <span className={`font-medium ${theme.textMain}`}>
              @YordanIliev2002
            </span>{" "}
            is attempting to deploy a commit to the{" "}
            <span className="font-medium">shadcn-pro</span> Team on{" "}
            <a href="#" className={`${theme.textLink}`}>
              Vercel
            </a>
            .
          </p>
          <p className={`mt-2 ${theme.textMain}`}>
            A member of the Team first needs to{" "}
            <a href="#" className={`${theme.textLink}`}>
              authorize it
            </a>
            .
          </p>
        </div>
      </div>

      {/* Timeline events */}
      <div className="relative border-l-2 border-gray-700 ml-4 pl-6">
        {/* Title change event 1 */}
        <div className="mb-4 relative">
          <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
            <Pencil size={12} className={theme.textMain} />
          </div>

          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/15782156?s=52&v=4"
              alt="YordanIliev2002"
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className={`font-medium ${theme.textMain}`}>
              YordanIliev2002
            </span>
            <span className={`${theme.textSecondary} ml-1`}>
              changed the title
            </span>
            <span className={`${theme.textSecondary} ml-1 line-through`}>
              Fix css selector for Zinc theme in website
            </span>
            <span className={`${theme.textSecondary} mx-1`}>→</span>
            <span className={theme.textMain}>docs: typo in CSS selector</span>
            <span className={`${theme.textSecondary} ml-1`}>on Mar 14</span>
          </div>
        </div>

        {/* Commit event */}
        <div className="mb-4 relative">
          <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
            <GitCommit size={12} className={theme.textMain} />
          </div>

          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/15782156?s=52&v=4"
              alt="YordanIliev2002"
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className={theme.textSecondary}>
              docs: fix typo in CSS selector
            </span>
            <span className={`${theme.textMain} ml-2 font-mono`}>5a72857</span>
            <svg
              className="ml-2 text-green-500"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                fill="currentColor"
              />
              <path d="M5.5 7.5l2 2 3.5-3.5" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Title change event 2 */}
        <div className="mb-4 relative">
          <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
            <Pencil size={12} className={theme.textMain} />
          </div>

          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/15782156?s=52&v=4"
              alt="YordanIliev2002"
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className={`font-medium ${theme.textMain}`}>
              YordanIliev2002
            </span>
            <span className={`${theme.textSecondary} ml-1`}>
              changed the title
            </span>
            <span className={`${theme.textSecondary} ml-1 line-through`}>
              docs: typo in CSS selector
            </span>
            <span className={`${theme.textSecondary} mx-1`}>→</span>
            <span className={theme.textMain}>
              docs: fix typo in CSS selector
            </span>
            <span className={`${theme.textSecondary} ml-1`}>on Mar 14</span>
          </div>
        </div>

        {/* Force push event */}
        <div className="mb-4 relative">
          <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
            <div className="text-white text-xs">□</div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img
                src="https://avatars.githubusercontent.com/u/15782156?s=52&v=4"
                alt="YordanIliev2002"
                className="w-5 h-5 rounded-full mr-2"
              />
              <span className={`font-medium ${theme.textMain}`}>
                YordanIliev2002
              </span>
              <span className="ml-1">
                <a href="#" className={`${theme.textLink}`}>
                  force-pushed
                </a>
              </span>
              <span className={`${theme.textSecondary} ml-1`}>the</span>
              <span
                className={`${theme.bgSecondary} ${theme.textMain} px-1 mx-1 rounded text-xs`}
              >
                main
              </span>
              <span className={`${theme.textSecondary} ml-1`}>branch from</span>
              <span className={`${theme.textMain} font-mono ml-1`}>
                26c1149
              </span>
              <span className={`${theme.textSecondary} ml-1`}>to</span>
              <span className={`${theme.textMain} font-mono ml-1`}>
                5a72857
              </span>
              <span className={`${theme.textSecondary} ml-1`}>last month</span>
            </div>
            <button className={`px-3 py-1 ${theme.textSecondary}`}>
              Compare
            </button>
          </div>
        </div>

        {/* Review events */}
        {avatarArray.map(({ name, src }, index) => (
          <div key={index} className="mb-4 relative">
            <div className="absolute -left-8 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <img
                  src={src}
                  alt={name}
                  className="w-5 h-5 rounded-full mr-2"
                />
                <span className={`font-medium ${theme.textMain}`}>{name}</span>
                <span className={`${theme.textSecondary} ml-1`}>
                  approved these changes last month
                </span>
              </div>
              <button className={`px-3 py-1 rounded-md ${theme.textSecondary}`}>
                View reviewed changes
              </button>
            </div>
          </div>
        ))}

      </div>
      <div className={`border ${theme.border} rounded-md mb-4`}>
        <div className="flex items-center p-4">
          <div className="flex items-center flex-grow">
            <img
              src="https://avatars.githubusercontent.com/u/124599?s=52&v=4"
              alt="shadcn"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <div className="flex items-center">
                <span className={`font-medium ${theme.textMain}`}>shadcn</span>
                <span
                  className={`text-xs px-2 py-1 ml-2 rounded-full ${theme.bgSecondary} ${theme.textSecondary}`}
                >
                  Collaborator
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className={theme.textSecondary}>
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <p className={theme.textMain}>Thank you</p>
        </div>
      </div>

      <div className={`border ${theme.border} rounded-md mb-4`}>
        <div className="absolute -left-8 w-6 h-6 rounded-full bg-black flex items-center justify-center">
          <div className="text-white">▲</div>
        </div>

        <div className={`mb-4 rounded-lg ${theme.border}`}>
          <div className="flex items-center p-4">
            <div className="flex items-center flex-grow">
              <div className="w-8 h-8 rounded-full mr-2 bg-black flex items-center justify-center">
                <div className="text-white">▲</div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className={`font-medium ${theme.textMain}`}>
                    vercel
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 mx-1 rounded-full ${theme.bgSecondary} ${theme.textSecondary}`}
                  >
                    bot
                  </span>
                  <span className={`${theme.textSecondary}`}>
                    commented last month · edited
                  </span>
                  <button className={`ml-1 ${theme.textSecondary}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4.74645 12.8529L2.51472 13.4853L3.14708 11.2536C3.22397 10.9893 3.36519 10.7456 3.55888 10.5519L10.5589 3.55188C10.9494 3.16136 11.4978 2.94342 12.0684 2.94342C12.6391 2.94342 13.1875 3.16136 13.578 3.55188C13.9685 3.9424 14.1865 4.49078 14.1865 5.06145C14.1865 5.63212 13.9685 6.1805 13.578 6.57102L6.57799 13.571C6.38427 13.7647 6.14058 13.9059 5.87631 13.9828L4.74645 12.8529Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button className={theme.textSecondary}>
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
          <div className="px-4 pb-4">
            <p className={`font-medium text-lg mb-2 ${theme.textMain}`}>
              The latest updates on your projects.
              <span className={theme.textSecondary}>Learn more about </span>
              <a
                href="#"
                className={`${theme.textLink} inline-flex items-center`}
              >
                Vercel for Git
                <ExternalLink size={12} className="ml-1" />
              </a>
            </p>

            <div className={`mt-4 border ${theme.border} rounded`}>
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${theme.border}`}>
                    <th className={`p-3 text-left ${theme.textMain}`}>Name</th>
                    <th className={`p-3 text-left ${theme.textMain}`}>
                      Status
                    </th>
                    <th className={`p-3 text-left ${theme.textMain}`}>
                      Preview
                    </th>
                    <th className={`p-3 text-left ${theme.textMain}`}>
                      Updated (UTC)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`border-b ${theme.border}`}>
                    <td className={`p-3 ${theme.textMain}`}>ui</td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center mr-1">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className={theme.textMain}>Ready (</span>
                        <a href="#" className={`${theme.textLink}`}>
                          Inspect
                        </a>
                        <span className={theme.textMain}>)</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <a href="#" className={`${theme.textLink}`}>
                        Visit Preview
                      </a>
                    </td>
                    <td className={`p-3 ${theme.textMain}`}>
                      Mar 17, 2025 10:54am
                    </td>
                  </tr>
                  <tr>
                    <td className={`p-3 ${theme.textMain}`}>v4</td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center mr-1">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className={theme.textMain}>Ready (</span>
                        <a href="#" className={`${theme.textLink}`}>
                          Inspect
                        </a>
                        <span className={theme.textMain}>)</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <a href="#" className={`${theme.textLink}`}>
                        Visit Preview
                      </a>
                    </td>
                    <td className={`p-3 ${theme.textMain}`}>
                      Mar 17, 2025 10:54am
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment events */}
      {[
        { name: "ui", icon: <Rocket size={12} /> },
        { name: "v4", icon: <Rocket size={12} /> },
      ].map((deployment, index) => (
        <div key={index} className="mb-4">
          <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
            {deployment.icon}
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full mr-2 bg-black flex items-center justify-center">
                <div className="text-white text-xs">▲</div>
              </div>
              <span className={`font-medium ${theme.textMain}`}>vercel</span>
              <span
                className={`text-xs px-2 py-0.5 mx-1 rounded-full ${theme.bgSecondary} ${theme.textSecondary}`}
              >
                bot
              </span>
              <span className={`${theme.textSecondary} ml-1`}>deployed to</span>
              <span className={`font-medium ${theme.textMain} ml-1`}>
                Preview – {deployment.name}
              </span>
              <span className={`${theme.textSecondary} ml-1`}>last month</span>
            </div>
            <button className={`px-3 py-1 rounded-md ${theme.textSecondary}`}>
              View deployment
            </button>
          </div>
        </div>
      ))}

      {/* Label event */}
      <div className="mb-4">
        <div className="absolute -left-8 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
          <Tag size={12} className={theme.textMain} />
        </div>

        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/124599?s=52&v=4"
            alt="shadcn"
            className="w-5 h-5 rounded-full mr-2"
          />
          <span className={`font-medium ${theme.textMain}`}>shadcn</span>
          <span className={`${theme.textSecondary} ml-1`}>added the</span>
          <span className="ml-1 px-2 py-0.5 rounded-full bg-green-700 text-white">
            automerge
          </span>
          <span className={`${theme.textSecondary} ml-1`}>
            label last month
          </span>
        </div>
      </div>

      {/* Merge event */}
      <div className="mb-4">
        <div className="absolute -left-8 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
          <GitMerge size={12} className="text-white" />
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/124599?s=52&v=4"
              alt="kodiakhq"
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className={`font-medium ${theme.textMain}`}>kodiakhq</span>
            <span
              className={`text-xs px-2 py-0.5 mx-1 rounded-full ${theme.bgSecondary} ${theme.textSecondary}`}
            >
              bot
            </span>
            <span className={`${theme.textSecondary} ml-1`}>merged commit</span>
            <span className={`font-mono ${theme.textMain} ml-1`}>61e21e3</span>
            <span className={`${theme.textSecondary} ml-1`}>into</span>
            <span
              className={`${theme.bgSecondary} text-blue-400 px-2 py-0.5 rounded ml-1`}
            >
              shadcn-ui:main
            </span>
            <span className={`${theme.textSecondary} ml-1`}>last month</span>
          </div>
          <button className={`px-3 py-1 rounded-md ${theme.textSecondary}`}>
            View details
          </button>
        </div>
        <div className={`mt-1 ${theme.textSecondary} text-sm`}>
          7 checks passed
        </div>
      </div>
      <SignupBanner />
    </div>
  );
};

export default PRTimeline;

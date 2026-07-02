import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiDocker,
  SiVuedotjs,
  SiAmazon,
  SiPostgresql,
  SiTailwindcss,
  SiAngular,
  SiJavascript,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiGit,
  SiDotnet,
  SiSharp,
  SiTerraform,
  SiApachekafka,
  SiNestjs,
  SiIonic,
  SiGrafana,
  SiPrometheus,
  SiFirebase,
  SiAmazondynamodb,
  SiAnthropic,
  SiClaude,
  SiGithubcopilot,
  SiOpenai,
  SiDatadog,
  SiGithubactions,
  SiAdonisjs
} from 'react-icons/si';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';
import { DiMsqlServer } from 'react-icons/di';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const Technologies: React.FC = () => {
  const { t } = useTranslation();
  const technologies: Technology[] = [
    // IA aplicada al desarrollo
    { name: 'MCP · Agentes', icon: <SiAnthropic className="w-8 h-8" />, color: '#FFFFFF' },
    { name: 'Claude Code', icon: <SiClaude className="w-8 h-8" />, color: '#D97757' },
    { name: 'GitHub Copilot', icon: <SiGithubcopilot className="w-8 h-8" />, color: '#FFFFFF' },
    { name: 'OpenAI Codex', icon: <SiOpenai className="w-8 h-8" />, color: '#FFFFFF' },
    // Lenguajes
    { name: 'C#', icon: <SiSharp className="w-8 h-8" />, color: '#9B4F96' },
    { name: '.NET', icon: <SiDotnet className="w-8 h-8" />, color: '#512BD4' },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, color: '#3178C6' },
    { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" />, color: '#F7DF1E' },
    { name: 'Python', icon: <SiPython className="w-8 h-8" />, color: '#3776AB' },
    // Frameworks / Frontend
    { name: 'React', icon: <SiReact className="w-8 h-8" />, color: '#61DAFB' },
    { name: 'Angular', icon: <SiAngular className="w-8 h-8" />, color: '#DD0031' },
    { name: 'Vue', icon: <SiVuedotjs className="w-8 h-8" />, color: '#42B883' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8" />, color: '#68A063' },
    { name: 'NestJS', icon: <SiNestjs className="w-8 h-8" />, color: '#E0234E' },
    { name: 'Ionic', icon: <SiIonic className="w-8 h-8" />, color: '#3880FF' },
    { name: 'AdonisJS', icon: <SiAdonisjs className="w-8 h-8" />, color: '#5A45FF' },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8" />, color: '#06B6D4' },
    // Cloud / DevOps
    { name: 'AWS', icon: <SiAmazon className="w-8 h-8" />, color: '#FF9900' },
    { name: 'Azure', icon: <VscAzure className="w-8 h-8" />, color: '#0078D4' },
    { name: 'Docker', icon: <SiDocker className="w-8 h-8" />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes className="w-8 h-8" />, color: '#326CE5' },
    { name: 'Terraform', icon: <SiTerraform className="w-8 h-8" />, color: '#7B42BC' },
    { name: 'Kafka', icon: <SiApachekafka className="w-8 h-8" />, color: '#FFFFFF' },
    { name: 'GitHub Actions', icon: <SiGithubactions className="w-8 h-8" />, color: '#2088FF' },
    { name: 'Azure DevOps', icon: <VscAzureDevops className="w-8 h-8" />, color: '#0078D4' },
    { name: 'Git', icon: <SiGit className="w-8 h-8" />, color: '#F05032' },
    // Observabilidad
    { name: 'Grafana', icon: <SiGrafana className="w-8 h-8" />, color: '#F46800' },
    { name: 'Prometheus', icon: <SiPrometheus className="w-8 h-8" />, color: '#E6522C' },
    { name: 'Loki', icon: <SiGrafana className="w-8 h-8" />, color: '#F5A800' },
    { name: 'Datadog', icon: <SiDatadog className="w-8 h-8" />, color: '#632CA6' },
    // Bases de datos
    { name: 'SQL Server', icon: <DiMsqlServer className="w-8 h-8" />, color: '#CC2927' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, color: '#336791' },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, color: '#4479A1' },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, color: '#47A248' },
    { name: 'DynamoDB', icon: <SiAmazondynamodb className="w-8 h-8" />, color: '#4053D6' },
    { name: 'Redis', icon: <SiRedis className="w-8 h-8" />, color: '#DC382D' },
    { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" />, color: '#FFCA28' },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden" id="tecnologias">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-20 left-10 text-blue-400/30 font-mono text-sm animate-float">const tech = 'React'</div>
        <div className="absolute top-40 right-20 text-green-400/30 font-mono text-sm animate-float-slow">npm install</div>
        <div className="absolute bottom-40 left-32 text-purple-400/30 font-mono text-sm animate-float">git push origin</div>
        <div className="absolute bottom-60 right-40 text-yellow-400/30 font-mono text-sm animate-float-slow">docker-compose up</div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">{t('technologies.title')}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-4">{t('technologies.subtitle')}</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 relative">
          <div className="relative w-full max-w-[500px]">
            <div className="w-full aspect-[500/320] max-w-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl border-4 sm:border-8 border-gray-700 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-gray-800 border-b border-gray-600 flex items-center px-2 sm:px-3 gap-2">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="flex-1 text-center text-gray-400 text-[10px] sm:text-xs font-mono">VS Code - Technologies.tsx</div>
              </div>

              <div className="absolute inset-0 top-6 sm:top-8 bg-[#1e1e1e] p-3 sm:p-4 lg:p-6 font-mono text-[8px] sm:text-[10px] lg:text-xs overflow-hidden">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex gap-2 sm:gap-3">
                    <span className="text-gray-600">1</span>
                    <div className="truncate"><span className="text-purple-400">import</span> <span className="text-blue-300">React</span> <span className="text-white">from</span> <span className="text-orange-300">'react'</span></div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="text-gray-600">2</span>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="text-gray-600">3</span>
                    <div className="truncate"><span className="text-purple-400">const</span> <span className="text-yellow-300">Technologies</span> = () =&gt; {'{'}</div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="text-gray-600">4</span>
                    <div className="pl-2 sm:pl-4 truncate"><span className="text-purple-400">return</span> (</div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="text-gray-600">5</span>
                    <div className="pl-4 sm:pl-8 truncate">&lt;<span className="text-green-400">section</span> <span className="text-blue-300">className</span>=<span className="text-orange-300">"tech"</span>&gt;</div>
                  </div>
                  <div className="flex gap-2 sm:gap-3 animate-pulse">
                    <span className="text-gray-600">6</span>
                    <div className="pl-6 sm:pl-12"><span className="w-1 h-3 sm:h-4 bg-blue-500 inline-block"></span></div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 lg:h-16 bg-black/90 border-t border-green-500/30 p-1.5 sm:p-2">
                  <div className="text-[8px] sm:text-[10px] lg:text-xs text-white flex items-center gap-1 sm:gap-2">
                    <span className="text-green-400 hidden sm:inline">jhernandez@ubuntu</span>
                    <span className="text-green-400 sm:hidden">jhernandez</span>
                    <span className="text-yellow-400 truncate">~/portfolio</span>
                    <span className="text-blue-400 hidden sm:inline">(main)</span>
                  </div>
                  <div className="text-[8px] sm:text-[10px] lg:text-xs text-white mt-0.5 sm:mt-1 flex items-center gap-1 truncate">
                    <span className="text-green-400">$</span>
                    <span className="truncate">git commit -m "Add tech stack with AI ✨"</span>
                  </div>
                  <div className="text-[8px] sm:text-[10px] lg:text-xs text-gray-400 mt-0.5 sm:mt-1 flex items-center gap-1 truncate hidden sm:flex">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span className="truncate">Copilot suggests: "Powered by AI assistance"</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[500px] h-2 sm:h-3 bg-gray-700 mx-auto rounded-b-sm"></div>
            <div className="w-24 sm:w-32 h-14 sm:h-20 bg-gradient-to-b from-gray-700 to-gray-800 mx-auto rounded-b-xl shadow-lg relative"></div>

            {/* Coffee Cup positioned on the right side with visible steam - Hidden on mobile */}
            <div className="hidden sm:block absolute -right-12 -bottom-4 w-20 h-24 bg-gradient-to-b from-orange-700 via-orange-800 to-orange-900 shadow-2xl" style={{ borderRadius: '10px 10px 25px 25px' }}>
              {/* More visible smoke animation with different delays */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300/60 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -top-14 left-1/3 -translate-x-1/2 w-5 h-5 bg-gray-300/50 rounded-full animate-float-slow blur-md" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -top-20 left-2/3 -translate-x-1/2 w-4 h-4 bg-gray-300/40 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-26 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-300/30 rounded-full animate-float-slow blur-md" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Cup rim */}
              <div className="absolute top-0 w-full h-3 bg-orange-600 rounded-t-lg shadow-md border-b-2 border-orange-700"></div>
              {/* Inner reflection */}
              <div className="absolute top-2 left-2 w-4 h-12 bg-white/15 rounded-full blur-md"></div>
              {/* Handle */}
              <div className="absolute right-0 top-4 w-6 h-10 border-4 border-orange-700 rounded-full" style={{ transform: 'translateX(50%)' }}></div>
              {/* Highlight/shine */}
              <div className="absolute top-1 left-3 w-2 h-8 bg-white/20 rounded-full blur-sm"></div>
            </div>

            {/* Terminal window - Hidden on mobile and small tablets */}
            <div className="hidden lg:block absolute -right-32 top-40 w-48 h-32 bg-black/90 rounded-lg shadow-xl transform rotate-12 overflow-hidden border border-gray-700">
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 p-3 font-mono text-[8px] leading-relaxed">
                <div className="text-green-400 mb-2">jhernandez@ai:~$</div>
                <div className="text-gray-300 space-y-1">
                  <div className="text-blue-400">&gt; copilot analyze</div>
                  <div className="text-green-400">✓ Suggestions ready</div>
                  <div className="text-yellow-400">⚡ AI enabled</div>
                </div>
              </div>
            </div>

            {/* Sticky note - Hidden on mobile */}
            <div className="hidden sm:block absolute -left-16 top-20 w-16 h-16 bg-yellow-300 shadow-lg transform -rotate-6 p-2 text-[8px] text-gray-800">
              <div>By JJ:</div>
              <div>Build</div>
              <div>Deploy</div>
              <div>Innovate</div>
            </div>
          </div>

          {/* Floating tech icons - Only show on large screens */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="absolute top-10 left-32 animate-float">
              <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-md rounded-xl border border-blue-400/30 flex items-center justify-center shadow-xl">
                <SiDocker className="text-4xl" style={{ color: '#2496ED' }} />
              </div>
            </div>

            <div className="absolute top-32 left-20 animate-float-slow">
              <div className="w-14 h-14 bg-blue-600/10 backdrop-blur-md rounded-xl border border-blue-500/30 flex items-center justify-center shadow-xl">
                <SiTypescript className="text-3xl" style={{ color: '#3178C6' }} />
              </div>
            </div>

            <div className="absolute top-20 right-40 animate-float">
              <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-md rounded-xl border border-blue-400/30 flex items-center justify-center shadow-xl">
                <SiKubernetes className="text-4xl" style={{ color: '#326CE5' }} />
              </div>
            </div>

            <div className="absolute top-1/2 right-28 animate-float-slow">
              <div className="w-16 h-16 bg-green-600/10 backdrop-blur-md rounded-xl border border-green-500/30 flex items-center justify-center shadow-xl">
                <SiMongodb className="text-4xl" style={{ color: '#47A248' }} />
              </div>
            </div>

            <div className="absolute bottom-40 right-32 animate-float">
              <div className="w-16 h-16 bg-orange-500/10 backdrop-blur-md rounded-xl border border-orange-400/30 flex items-center justify-center shadow-xl">
                <SiAmazon className="text-4xl" style={{ color: '#FF9900' }} />
              </div>
            </div>

            <div className="absolute bottom-32 left-40 animate-float-slow">
              <div className="w-14 h-14 bg-orange-500/10 backdrop-blur-md rounded-xl border border-orange-400/30 flex items-center justify-center shadow-xl">
                <SiNodedotjs className="text-3xl" style={{ color: '#68A063' }} />
              </div>
            </div>

            <div className="absolute top-1/2 left-28 animate-float">
              <div className="w-14 h-14 bg-red-600/10 backdrop-blur-md rounded-xl border border-red-500/30 flex items-center justify-center shadow-xl">
                <SiGit className="text-3xl" style={{ color: '#F05032' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-12 lg:mt-16 max-w-6xl mx-auto px-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group/tech flex items-center gap-2 sm:gap-3 hover:scale-110 transition-transform cursor-pointer"
            >
              <div style={{ color: tech.color }} className="flex-shrink-0">
                {tech.icon}
              </div>
              <span className="text-white font-medium text-xs sm:text-sm group-hover/tech:text-blue-300 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

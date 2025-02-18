import { RevealOnScroll } from '../RevealOnScroll'
export const About = () => {
  const skillList_1 = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte"
  ]
  const skillList_2 = [
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
    "GraphQL"
  ]
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto py-4">
          <h2 className="
            text-3xl
            font-bold
            mb-8
            bg-gradient
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
            bg-clip-text
            text-transparent
            text-center"
          >
            Section 2
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aliquid nesciunt libero necessitatibus magnam laboriosam incidunt possimus eaque laborum. Incidunt, ab hic illo voluptatem pariatur maxime itaque praesentium reiciendis exercitationem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Item 1</h3>
              <div className="flex flex-wrap gap-2">
                {
                  skillList_1.map((tech, key) => (
                    <span
                      key={key}
                      className="
                        bg-blue-500/10
                        text-blue-500
                        py-1
                        px-3
                        rounded-full
                        text-sm
                        hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,226,0.2)]
                        transition"
                    >
                      {tech}
                    </span>
                  ))
                }
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Item 2</h3>
              <div className="flex flex-wrap gap-2">
                {
                  skillList_2.map((tech, key) => (
                    <span
                      key={key}
                      className="
                        bg-blue-500/10
                        text-blue-500
                        py-1
                        px-3
                        rounded-full
                        text-sm
                        hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,226,0.2)]
                        transition"
                    >
                      {tech}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold-mb-4">Experience 1</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Item 01</li>
                <li>Item 02</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold-mb-4">Experience 2</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Title 1</h4>
                  <p>Description 1</p>
                </div>
                <div>
                  <h4 className="font-semibold">Title 2</h4>
                  <p>Description 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

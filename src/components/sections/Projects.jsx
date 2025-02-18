import { RevealOnScroll } from '../RevealOnScroll'
export const Projects = () => {
  return (
    <section
      id="projects"
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
            Section 3
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
                p-6
                rounded-xl
                border
                border-white/10
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                transition"
            >
              <h3 className="text-xl font-bold mb-2">Item 1</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusantium optio magni hic fugit cupiditate a quo tenetur ab perferendis minus eum molestiae voluptatem, accusamus, quis officia. Perspiciatis, debitis quibusdam!
              </p>
              <div>
                {['Item 1-1', 'Item 1-2', 'Item 1-3', 'Item 1-4'].map((item, key) => (
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
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >View Item →</a>
              </div>
            </div>

            <div
              className="
                p-6
                rounded-xl
                border
                border-white/10
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                transition"
            >
              <h3 className="text-xl font-bold mb-2">Item 2</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusantium optio magni hic fugit cupiditate a quo tenetur ab perferendis minus eum molestiae voluptatem, accusamus, quis officia. Perspiciatis, debitis quibusdam!
              </p>
              <div>
                {['Item 2-1', 'Item 2-2', 'Item 2-3', 'Item 2-4'].map((item, key) => (
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
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >View Item →</a>
              </div>
            </div>

            <div
              className="
                p-6
                rounded-xl
                border
                border-white/10
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                transition"
            >
              <h3 className="text-xl font-bold mb-2">Item 3</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusantium optio magni hic fugit cupiditate a quo tenetur ab perferendis minus eum molestiae voluptatem, accusamus, quis officia. Perspiciatis, debitis quibusdam!
              </p>
              <div>
                {['Item 3-1', 'Item 3-2', 'Item 3-3', 'Item 3-4'].map((item, key) => (
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
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >View Item →</a>
              </div>
            </div>

            <div
              className="
                p-6
                rounded-xl
                border
                border-white/10
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                transition"
            >
              <h3 className="text-xl font-bold mb-2">Item 4</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusantium optio magni hic fugit cupiditate a quo tenetur ab perferendis minus eum molestiae voluptatem, accusamus, quis officia. Perspiciatis, debitis quibusdam!
              </p>
              <div>
                {['Item 4-1', 'Item 4-2', 'Item 4-3', 'Item 4-4'].map((item, key) => (
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
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >View Item →</a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

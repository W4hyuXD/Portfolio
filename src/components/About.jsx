export default function About() {
  return (
    <section className="px-8 py-20 bg-gray-100 text-black max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="relative w-[200px] h-[260px] border-2 border-black cursor-pointer group">
          <div className="absolute top-3 left-3 w-[200px] h-[260px] border-2 border-black -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
          <img
            src="/profile.jpg"
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-extrabold mb-6">ABOUT ME</h2>
          <p className="text-lg mb-6">
            Hello Bro,<br />
            My name is WahyuDin Ambia.
          </p>
          <div>
            <p className="mb-2 font-semibold">Social Media:</p>
            <div className="border border-black px-4 py-2 inline-block cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
              Logo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
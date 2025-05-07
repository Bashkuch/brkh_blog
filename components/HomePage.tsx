const HomePage = () => {
  return (
    <>
      <section className="relative min-h-[250px] flex flex-row items-left justify-center text-center text-gray-100 ">
        <div
          className="w-full h-[30vh] bg-cover bg-center rounded-md absolute -z-10"
          style={{ backgroundImage: "url('/static/images/bg.jpg')" }}
        ></div>
        <div className="w-full h-[30vh] bg-black/55 absolute rounded-md -z-10"></div>

        <div className="flex h-[30vh] flex-col justify-center items-center p-8">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">
            برکه: بهترین‌ها را در زنجان پیدا کنید
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mb-6 sm:mb-8">
            برکه به شما کمک می‌کند بهترین فروشگاه‌ها، رستوران‌ها و خدمات زنجان را پیدا کنید.</p>
          <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-600 text-white rounded-xl text-base sm:text-lg hover:bg-primary-700 transition dark:bg-primary-500 dark:hover:bg-primary-600">
            شروع جستجو
          </button>
        </div>
      </section>

      <div className="w-full h-40 border border-primary-500 rounded-md my-5"></div>

    </>
  );
};

export default HomePage;

const HomePage = () => {
  return (
    <section className="relative min-h-[300px] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
        برکه
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6 sm:mb-8">
        محلی برای معرفی بهترین کلاس‌ها، دوره‌های آموزشی و مکان‌های جذاب و مفید در شهر زنجان
      </p>

      <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-xl text-base sm:text-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
        شروع جستجو
      </button>
    </section>
  );
};

export default HomePage;

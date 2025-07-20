function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-15"
    >
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center ">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">
            Education
          </h2>
        </div>

        <div className="rounded-xl p-8 border border-white/10  space-y-8 h-[460px]">
          <div className="py-1 ">
            <h3 className="text-xl font-bold text-green-600 mb-2 pb-2">
              University of Engineering and Management, Kolkata
            </h3>
            <p className="text-gray-300 text-[20px] ">
              Bachelor's of Technology (2020-24)
            </p>
            <div className="flex justify-between items-center pt-1">
              <p className="italic">
                Computer Science and Engineering (IoT, BCT, CS)
              </p>
              <p className="text-gray-300">
                CGPA:
                <span className="text-amber-300"> 8.90 / 10</span>
              </p>
            </div>
          </div>

          <div className="py-2 ">
            <h3 className="text-xl font-bold text-green-600 my-2 pb-2">
              Kendriya Vidyalaya Barrackpore(Airforce)
            </h3>
            <p className="text-gray-300 text-[17px] ">CBSE || 12th (2019-20)</p>
            <div className="flex justify-between items-center pt-1">
              <p className="italic">PCM</p>
              <p className="text-gray-300">
                Percentage:
                <span className="text-amber-300"> 88.6 / 100</span>
              </p>
            </div>
          </div>

          <div className="py-2 ">
            <h3 className="text-xl font-bold text-green-600 my-2 pb-2">
              Kendriya Vidyalaya Barrackpore(Airforce)
            </h3>
            <p className="text-gray-300 text-[17px] ">CBSE || 10th (2017-18)</p>
            <div className="flex justify-between items-center pt-1">
              <p className="italic">General</p>
              <p className="text-gray-300">
                Percentage:
                <span className="text-amber-300"> 86.6 / 100</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

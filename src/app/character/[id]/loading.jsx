export default function Loading() {
  return (
    <div className="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-40 animate-pulse">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full gap-6">

        {/* Breadcrumbs */}
        <div className="flex gap-2 px-4">
          <div className="h-4 w-14 bg-[#3a4331] rounded"></div>
          <div className="h-4 w-2 bg-[#3a4331] rounded"></div>
          <div className="h-4 w-24 bg-[#3a4331] rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">

          {/* LEFT */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Profile */}
            <div className="bg-[#303928] rounded-xl p-6 flex flex-col items-center text-center gap-4 border border-white/5">

              <div className="w-48 h-48 rounded-full bg-[#3a4331]"></div>

              <div className="space-y-2 w-full">
                <div className="h-6 w-40 bg-[#3a4331] rounded mx-auto"></div>

                <div className="flex items-center justify-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#3a4331]"></div>
                  <div className="h-4 w-12 bg-[#3a4331] rounded"></div>
                  <div className="h-4 w-4 bg-[#3a4331] rounded"></div>
                  <div className="h-4 w-16 bg-[#3a4331] rounded"></div>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 my-2"></div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center p-3 bg-[#192210]/50 rounded-lg gap-2">
                  <div className="h-6 w-6 bg-[#3a4331] rounded"></div>
                  <div className="h-3 w-10 bg-[#3a4331] rounded"></div>
                  <div className="h-4 w-14 bg-[#3a4331] rounded"></div>
                </div>

                <div className="flex flex-col items-center p-3 bg-[#192210]/50 rounded-lg gap-2">
                  <div className="h-6 w-6 bg-[#3a4331] rounded"></div>
                  <div className="h-3 w-10 bg-[#3a4331] rounded"></div>
                  <div className="h-4 w-14 bg-[#3a4331] rounded"></div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-[#303928] rounded-xl p-5 border border-white/5 space-y-5">
              <div className="h-6 w-32 bg-[#3a4331] rounded"></div>

              <div className="flex gap-4 p-3 bg-[#192210]/50 rounded-lg">
                <div className="h-8 w-8 bg-[#3a4331] rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-12 bg-[#3a4331] rounded"></div>
                  <div className="h-4 w-32 bg-[#3a4331] rounded"></div>
                  <div className="h-3 w-20 bg-[#3a4331] rounded"></div>
                </div>
              </div>

              <div className="flex gap-4 p-3 bg-[#192210]/50 rounded-lg">
                <div className="h-8 w-8 bg-[#3a4331] rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-20 bg-[#3a4331] rounded"></div>
                  <div className="h-4 w-28 bg-[#3a4331] rounded"></div>
                  <div className="h-3 w-16 bg-[#3a4331] rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 flex flex-col bg-[#303928] rounded-xl border border-white/5 overflow-hidden">

            <div className="p-6 border-b border-white/10 flex items-center gap-3">
              <div className="h-6 w-44 bg-[#3a4331] rounded"></div>
              <div className="h-5 w-10 bg-[#3a4331] rounded"></div>
            </div>

            <div className="overflow-y-auto max-h-[600px] p-4 flex flex-col gap-3">

              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-[#192210] rounded-lg border border-transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-[#303928] rounded"></div>

                    <div className="space-y-2">
                      <div className="h-4 w-40 bg-[#3a4331] rounded"></div>
                      <div className="h-3 w-24 bg-[#3a4331] rounded"></div>
                    </div>
                  </div>

                  <div className="h-6 w-14 bg-[#3a4331] rounded"></div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

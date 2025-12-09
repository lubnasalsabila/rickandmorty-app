"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center gap-6 p-6 
            bg-[#303928] rounded-xl border border-white/5 text-center max-w-md mx-auto mt-20">

          {/* Icon */}
          <div className="size-16 rounded-full bg-[#192210] flex items-center justify-center">
            <span className="material-symbols-outlined text-red-500 text-3xl">
              broken_image
            </span>
          </div>

          {/* Title */}
          <p className="text-white text-lg font-bold leading-tight">
            Wubba Lubba Dub Dub!
          </p>

          {/* Subtitle */}
          <p className="text-white/60 text-sm font-normal">
            We couldnt load the data. Jerry probably messed up the server cables again.
          </p>

          {/* ERROR MESSAGE (Real Error) */}
          <div className="bg-[#192210] text-[#abba9c] text-xs p-3 rounded-lg w-full text-left border border-white/10">
            <p className="font-bold mb-1">Error Message:</p>
            <pre className="whitespace-pre-wrap break-all">{error?.message}</pre>
          </div>

          {/* Retry */}
          <button
            onClick={() => reset()}
            className="flex items-center justify-center rounded-lg h-9 px-4 
            bg-white/10 hover:bg-white/20 text-white text-sm font-bold gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            Retry Portal Gun
          </button>
        </div>
      </body>
    </html>
  );
}

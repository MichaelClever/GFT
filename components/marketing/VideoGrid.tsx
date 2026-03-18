export function VideoGrid() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 z-10 relative pb-24">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                
                {/* Video 1 */}
                <div className="w-full md:w-1/2 aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/GBVU6uI3Qi4" 
                        title="Leslie Nielsen Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>
                
                {/* Video 2 */}
                <div className="w-full md:w-1/2 aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/tl3ExuvFuoo?start=1" 
                        title="An Introduction to Educational Gaming"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>

            </div>
        </section>
    );
}

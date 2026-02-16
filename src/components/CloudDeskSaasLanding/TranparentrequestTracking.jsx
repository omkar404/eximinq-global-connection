const TranparentrequestTracking = () => {
    return (
           <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Transparent Request Tracking</h2>
                <p className="text-slate-500 mt-2">From booking to completion, see every step in real-time.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* <!-- Step 1: Booking --> */}
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                            <div className="h-full w-0.5 bg-blue-100 my-2"></div>
                        </div>
                        <div className="pb-8">
                            <h4 className="font-bold text-slate-800">Instant Booking</h4>
                            <p className="text-sm text-slate-500 mt-1">Select service, upload docs, and confirm payment via Wallet or Credit Line.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                            <div className="h-full w-0.5 bg-blue-100 my-2"></div>
                        </div>
                        <div className="pb-8">
                            <h4 className="font-bold text-slate-800">Processing & Updates</h4>
                            <p className="text-sm text-slate-500 mt-1">Track progress on a live timeline. Chat directly with the expert if clarification is needed.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">Completion & Approval</h4>
                            <p className="text-sm text-slate-500 mt-1">Receive final output (Certificate/License). One-click approval closes the request.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Visual Timeline Mockup --> */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl relative">
                    <div className="absolute top-4 right-4 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Live Status: In Progress</div>
                    <h3 className="font-bold text-slate-800 mb-6">REQ-2025-1001: EPCG License</h3>
                    
                    <div className="space-y-6 relative pl-4">
                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
                        
                        <div className="flex gap-4 relative">
                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow-sm z-10"></div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">Request Initiated</p>
                                <p className="text-xs text-slate-500">Oct 26, 10:00 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative">
                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow-sm z-10"></div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">Documents Verified</p>
                                <p className="text-xs text-slate-500">Oct 26, 02:30 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-sm z-10 animate-pulse"></div>
                            <div>
                                <p className="text-sm font-bold text-blue-600">Draft Application Ready</p>
                                <p className="text-xs text-blue-500">Pending your approval</p>
                                <button className="mt-2 text-xs bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700">Review & Approve</button>
                            </div>
                        </div>
                        <div className="flex gap-4 relative opacity-50">
                            <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white shadow-sm z-10"></div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">Submission to DGFT</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    );
};
export default TranparentrequestTracking ;

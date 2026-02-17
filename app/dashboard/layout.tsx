import Sidebar from "@/components/layout/Sidebar";
import FloatingHeader from "@/components/layout/FloatingHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full bg-[#030712] overflow-hidden font-sans text-white">
            {/* Sidebar: Removed 'hidden' to force visibility for now */}
            <aside className="w-64 flex-shrink-0 border-r border-white/10 bg-[#030712] z-50">
                <Sidebar />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-black">

                {/* Floating Header */}
                <div className="w-full p-6 pb-0 z-40">
                    <FloatingHeader />
                </div>

                {/* Scrollable Page Content */}
                <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    {children}
                </div>
            </main>
        </div>
    );
}
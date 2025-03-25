

export default function Loading() {
    return (
        <section className="flex items-center justify-center fixed inset-0 ">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </section>
    );
}
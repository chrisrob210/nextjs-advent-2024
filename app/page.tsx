import AdventCalendar from '../src/components/AdventCalendar'

export default function Home() {
    return (
        <main className="min-h-screen bg-green-800 p-8">
            <h1 className="text-4xl font-bold text-center text-white mb-8">
                Advent Calendar
            </h1>
            <AdventCalendar />
        </main>
    )
}

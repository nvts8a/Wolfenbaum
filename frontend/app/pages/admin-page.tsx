import { useState } from "react";
import Event from '../components/_event'
import { EventData } from '../components/_event'


export function AdminPage() {
    const [events, setEvents] = useState([
        new EventData('NEMO 25', 'mordheim'), 
        new EventData('Dice Dojo 26th', 'mordheim')
    ])

    return (
        <main className='flex items-center justify-center pt-16 pb-4'>
        <div className='flex-1 flex flex-col items-center gap-16 min-h-0'>
            <header className='flex flex-col items-center gap-9'>
            <div className='header w-[700px] max-w-[200vw] p-4'>
                Wolfenbaum
            </div>
            </header>
            <div className='max-w-[400px] w-full space-y-6 px-4'>
                {events.map(ev => Event(ev))}
            </div>
        </div>
        </main>
    );
}

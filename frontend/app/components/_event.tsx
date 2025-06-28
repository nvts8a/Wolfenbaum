import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export interface EventData {

}

export class EventData {
    name: string;
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

export default function Event(data : EventData) {

    return(
        <nav className='text-center rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4'>
            <p className='leading-6 text-gray-700 dark:text-gray-200'>
                {data.name}
            </p>
            <p className='leading-6 text-gray-700 dark:text-gray-200'>
                {data.type}
            </p>
        </nav>
    )
}
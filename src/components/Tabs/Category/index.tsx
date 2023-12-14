import { ReactElement } from 'react'
import './styles.scss'

type Props = {
    content: ReactElement
}

export default function Category({ content }: Props) {
    return (
        <div className='grid-container gap-4'>
            {content}
        </div>
    )
}
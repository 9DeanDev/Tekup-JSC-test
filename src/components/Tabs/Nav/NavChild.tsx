import './NavChild.scss';

type Props = {
    content: string;

}

export default function NavChild({ content }: Props) {
    return (
        <div className='tekup_portfolio_filter'>
            <strong>
                {content}
            </strong>
        </div>
    )
}
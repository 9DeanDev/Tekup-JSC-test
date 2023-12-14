import './CategoryChild.scss'
import { FaAngleRight } from "react-icons/fa";

type Props = {
    img: any;
    card_Name: String;
}

export default function CategoryChild({ img, card_Name }: Props) {
    return (
        <div className='col-12 fly shadow'>
            <a>
                <div className='row card-container '>
                    <img src={img} className='col-4' style={{ width: '100%', height: 'auto' }} />
                    <div className='card-body'>
                        <div className='d-flex align-item-center justify-content-center'>
                            <h6>
                                {card_Name}
                            </h6>
                            <FaAngleRight />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
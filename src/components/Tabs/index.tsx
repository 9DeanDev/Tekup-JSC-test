import './styles.scss';
import NavChild from './Nav/NavChild'
import CategoryChild from './Category/CategoryChild'
import Category from './Category';
import img1 from '../../assets/image-1.png'
import img2 from '../../assets/doitac-dsoft.jpg'
import img3 from '../../assets/image.png'
import img4 from '../../assets/kiva-thumbnail.png'
type Props = {}

export default function Tabs({ }: Props) {
    return (
        <>
            <div className="container mt-3 ">
                <ul className="nav nav-pills d-flex justify-content-center" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="pill" href="#home">
                            <NavChild content='All' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="pill" href="#category1">
                            <NavChild content='Manpower Supply' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="pill" href="#category2">
                            <NavChild content='Mobile App / Websites' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="pill" href="#category3">
                            <NavChild content='UI/UX Design' />
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <Category content={
                            <>
                                <CategoryChild img={img1} card_Name='TOI 3D Customize E-commerce' />
                                <CategoryChild img={img1} card_Name='TOI 3D Customize E-commerce' />
                                <CategoryChild img={img1} card_Name='TOI 3D Customize E-commerce' />
                                <CategoryChild img={img1} card_Name='TOI 3D Customize E-commerce' />
                                <CategoryChild img={img1} card_Name='TOI 3D Customize E-commerce' />
                            </>}
                        />
                    </div>
                    <div id="category1" className="container tab-pane fade"><br />
                        <div id="home" className="container tab-pane active"><br />
                            <Category content={
                                <>
                                    <CategoryChild img={img2} card_Name='Dsoft' />
                                    <CategoryChild img={img2} card_Name='Dsoft' />
                                    <CategoryChild img={img2} card_Name='Dsoft' />
                                    <CategoryChild img={img2} card_Name='Dsoft' />
                                    <CategoryChild img={img2} card_Name='Dsoft' />
                                </>}
                            />
                        </div>
                    </div>
                    <div id="category2" className="container tab-pane fade"><br />
                        <div id="home" className="container tab-pane active"><br />
                            <Category content={
                                <>
                                    <CategoryChild img={img3} card_Name='E-learning – Internal training platform' />
                                    <CategoryChild img={img3} card_Name='E-learning – Internal training platform' />
                                    <CategoryChild img={img3} card_Name='E-learning – Internal training platform' />
                                    <CategoryChild img={img3} card_Name='E-learning – Internal training platform' />
                                    <CategoryChild img={img3} card_Name='E-learning – Internal training platform' />
                                </>}
                            />
                        </div>
                    </div>
                    <div id="category3" className="container tab-pane fade"><br />
                        <div id="home" className="container tab-pane active"><br />
                            <Category content={
                                <>
                                    <CategoryChild img={img4} card_Name='Summer 21 Cosmetic E-commerce Platform' />
                                    <CategoryChild img={img4} card_Name='Summer 21 Cosmetic E-commerce Platform' />
                                    <CategoryChild img={img4} card_Name='Summer 21 Cosmetic E-commerce Platform' />
                                    <CategoryChild img={img4} card_Name='Summer 21 Cosmetic E-commerce Platform' />
                                    <CategoryChild img={img4} card_Name='Summer 21 Cosmetic E-commerce Platform' />
                                </>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
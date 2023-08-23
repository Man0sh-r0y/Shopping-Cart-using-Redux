import Footer from "../Components/Footer";
import Product from "../Components/Product";
import productData from "../data";

function Home() {

    return (
        <div className="home-page-bg">
            <div className="home-page">
                <div className="home-page-div">
                    {
                        productData.map((item) => {
                            return <Product key={item.id} item={item} />
                        })
                    }
                </div>
            </div>

            <div className="footer-outer-div">
                <div className="footer-inner-div">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
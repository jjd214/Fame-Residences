import image1 from './assets/img1.jpg'
import image2 from './assets/img2.jpg'
import image3 from './assets/img3.jpg'

function Gallery() {
    return( <>
                <div className="gallery">
                    <h1>Gallery</h1>

                    <div className="box">
                        <div className="row1">
                            <img src={image1} alt="image" />
                            <img src={image2} alt="image" />
                            <img src={image3} alt="image" />
                        </div>
                        <div className="row2">
                            <img src={image1} alt="image" />
                            <img src={image2} alt="image" />
                            <img src={image3} alt="image" />
                        </div>
                        <div className="row3">
                            <img src={image1} alt="image" />
                            <img src={image2} alt="image" />
                            <img src={image3} alt="image" />
                        </div>
                    </div>
                </div>
            </>)
}

export default Gallery

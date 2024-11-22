function Contact() {
    return( <>
                <div className="contact">
                    <div className="container">
                        <div className="contact-us">
                            <h1>Contact Us</h1>
                            <label htmlFor="">Email: </label><br />
                            <input type="text" />
                            <br />
                            <label htmlFor="">Subject: </label><br />
                            <input type="text" />
                            <br />
                            <label htmlFor="">Message: </label><br />
                            <textarea name="" id="textField"></textarea>
                            <button id="btnSubmit">Submit</button>
                        </div>
                        <div className="contact-info">
                            <h1>Contact Information</h1>
                            <p><b>Email: </b> info@smdc.ph</p>
                            <p><b>Mobile no: </b> +63 999 999 999 </p>
                            <p><b>Viber: </b> +63 999 999 999 </p>
                            <p><b>Whatsapp: </b> +63 999 999 999 </p>
                            <p><b>Facebook: </b> Homes by SMDC</p>
                        </div>

                    </div>
                </div>
            </>)
}

export default Contact

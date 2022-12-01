function Contact() {
    return (
        <>
        <form>
            <div class="container">
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="name" class="form-control" id="exampleInputPassword1"/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <input type="textarea" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-sm btn-outline-secondary">Submit</button>
            </div>
        </form>
        </>
    )
}

export default Contact;
import Layout from './components/layout';

function Contact() {
    return (
        <>
        <Layout>
            <form>
                <div class="container">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name:</label>
                        <input type="name" class="form-control" id="exampleInputName" placeholder="John Smith"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Message:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-sm btn-outline-secondary">Submit</button>
                </div>
            </form>
        </Layout>
        </>
    )
}

export default Contact;
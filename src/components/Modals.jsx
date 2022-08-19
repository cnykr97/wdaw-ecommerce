const Modals = () => {
    return (
        <div className="modals">

            {/* login modal */}
            <div className="modal fade signin-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex flex-column">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-logo">
                                <img src="img/wdaw-logo.png" alt="wdaw-logo" className='img-fluid' />
                            </div>
                            <h2 className="modal-title mx-auto" id="exampleModalLabel" style={{ color: '#0d6efd' }}>Sign In</h2>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" required></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="col-form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" required></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex flex-column">
                            <button type="button" className="btn btn-primary mx-auto">Sign In</button>
                            <p className='mx-auto mt-4'>Don't you have an account? <a href="/">Sign up</a> now! </p>
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* login modal */}

        </div>
    );
}

export default Modals;
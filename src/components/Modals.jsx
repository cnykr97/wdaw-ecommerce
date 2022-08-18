const Modals = () => {
    return (
        <div className="modals">

            {/* login modal */}
            <div class="modal fade signin-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header d-flex flex-column">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-logo">
                                <img src="img/wdaw-logo.png" alt="wdaw-logo" className='img-fluid' />
                            </div>
                            <h2 class="modal-title mx-auto" id="exampleModalLabel" style={{ color: '#0d6efd' }}>Sign In</h2>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="email" required></input>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="col-form-label">Password:</label>
                                    <input type="password" class="form-control" id="password" required></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex flex-column">
                            <button type="button" class="btn btn-primary mx-auto">Sign In</button>
                            <p className='mx-auto mt-4'>Don't you have an account? <a>Sign up</a> now! </p>
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* login modal */}

        </div>
    );
}

export default Modals;
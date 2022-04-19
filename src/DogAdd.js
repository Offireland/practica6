import React, {Component} from 'react';

class DogAdd extends Component {
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={0}>
                        <div className="row mb-3 input-group-icon">
                            <label className="col-sm-2 col-form-label visually-hidden"
                                   htmlFor="inputName">Full Name</label>
                            <div className="col-sm-6">
                                <input className="form-control rounded-pill border-white input-box"
                                       id="firstName" name="firstName" value="firstName"
                                       onChange={0} type="text" placeholder="Enter your first name"/>
                                <svg className="bi bi-person-fill input-box-icon"
                                     xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </div>
                            <div className="col-sm-6">
                                <input className="form-control rounded-pill border-white input-box"
                                       id="lastName" name="lastName" value="lastName"
                                       onChange={this.changeHandler} type="text" placeholder="Enter your last name"/>
                                <svg className="bi bi-person-fill input-box-icon"
                                     xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="row mb-3 input-group-icon">
                            <label className="col-sm-2 col-form-label visually-hidden"
                                   htmlFor="email">Email</label>
                            <div className="col-sm-12">
                                <input className="form-control rounded-pill border-white input-box"
                                       id="inputName" name="email" value="email"
                                       onChange={this.changeHandler} placeholder="Enter your email address"/>
                                <svg className="bi bi-envelope-fill input-box-icon"
                                     xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                </svg>
                            </div>
                        </div>

                        <div className="row mb-3 input-group-icon">
                            <label className="col-sm-2 col-form-label visually-hidden"
                                   htmlFor="password">Password</label>
                            <div className="col-sm-12">
                                <input className="form-control rounded-pill border-white input-box"
                                       id="inputName" name="password" value="password"
                                       onChange={this.changeHandler} placeholder="Enter a secure password"/>
                                <svg className="bi bi-envelope-fill input-box-icon"
                                     xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </div>
                        </div>

                        <div className="row mb-3 input-group-icon">
                            <label className="col-sm-2 col-form-label visually-hidden"
                                   htmlFor="inputName">Address</label>
                            <div className="col-sm-12">
                                <input className="form-control rounded-pill border-white input-box"
                                       id="address" name="address" value="address"
                                       onChange={this.changeHandler} type="text" placeholder="Enter your address"/>
                                <svg className="bi bi-person-fill input-box-icon"
                                     xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="row mb-3 input-group-icon">
                            <label className="col-sm-2 col-form-label visually-hidden"
                                   htmlFor="inputName">birthday</label>
                            <div className="col-sm-12">
                                <input className="form-control rounded-pill border-white input-box"
                                       id="birthday" name="birthday" value="birthday"
                                       onChange={this.changeHandler} type="text"
                                       placeholder="Enter your date of birth: MM/DD/YYYY"/>
                                <svg className="bi bi-person-fill input-box-icon"
                                     xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"/>
                                    <path
                                        d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
                                </svg>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="d-grid">
                                    <button
                                        className="btn hover-top btn-glow btn-klean rounded-pill"
                                        type="submit">Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default DogAdd;
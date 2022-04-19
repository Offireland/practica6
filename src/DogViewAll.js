import React, {Component} from 'react';

class DogViewAll extends Component {
    render() {
        return (
            <div className="DogData">

                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <div className="form-outline">
                                <input type="search" id="form1" className="form-control" placeholder="Search"
                                       name="searchData" value={0}
                                />
                            </div>
                        </div>
                        <div className="col">
                        </div>
                        <div className="col">
                            <button className="btn hover-top btn-klean-outline">Create
                                New
                            </button>
                        </div>
                    </div>
                </div>





                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Race</th>
                        <th scope="col">IMG</th>
                        <th scope="col">Actions</th>
                        <th scope="col"/>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>

                    <tr key={0}>
                        <th scope="row">0</th>
                        <td>Pastor Aleman</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={1}>
                        <th scope="row">0</th>
                        <td>Bichon Maltes</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={2}>
                        <th scope="row">0</th>
                        <td>Salchicha</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={3}>
                        <th scope="row">0</th>
                        <td>Husky</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={4}>
                        <th scope="row">0</th>
                        <td>Bull Dog</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={5}>
                        <th scope="row">0</th>
                        <td>Labrador</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={6}>
                        <th scope="row">0</th>
                        <td>Chihuahua</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={7}>
                        <th scope="row">0</th>
                        <td>Dalmata</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key={8}>
                        <th scope="row">0</th>
                        <td>Akita</td>
                        <td>Insert Image</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm" key={0}> View
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-info btn-sm" key={0}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm" key={0}>
                                Delete
                            </button>
                        </td>
                    </tr>


                    </tbody>
                </table>
            </div>
        );
    }
}

export default DogViewAll;
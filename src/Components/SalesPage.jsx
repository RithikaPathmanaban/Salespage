import React from "react";
import "./SalesPage.css";
class SalesPage extends React.Component {
  componentDidMount() {
    $("#ExampleTable").DataTable({
      scrollX: true,
      scrollY: "338px",
      select: true,
      info: false,
      lengthChange: false,
      searching: false,
      paging: false,
      language: {
        emptyTable: " ",
      },
    });
    $(".chosen-select").chosen();
    this.initEditableTable();
    length;
  }

  initEditableTable() {
    const table = document.getElementById("EditableTable");
    const cells = table.querySelectorAll("td[contenteditable=true]");

    cells.forEach((cell) => {
      cell.addEventListener("input", () => {
        // Update the cell content directly
        cell.innerText = cell.innerText;
      });
    });
  }



 
  render() {
    return (
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-ld-6">
                <h1>Sales Page</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="">
          <section className="content">
            <div className="container-fluid">
              <div></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-8 pl-2">
                      <div className="card card primary">
                        <div className="card-header bg-purple">
                          <h3 className="card-title">Purchase Master</h3>
                        </div>
                        <div className="card-body">
                          <div className="row pt-2">
                            <div className="pt-0 col-lg-1">
                              <label className="form-label">BillNo</label>
                              <input
                                type="number"
                                className="form-control"
                                id="BillNo"
                              />
                            </div>
                            <div className="col-lg-2">
                              <label className="form-label">Date</label>
                              <input
                                type="date"
                                className="form-control"
                                id="Date"
                              />
                            </div>
                            <div className="col-lg-2">
                              <label className="form-label">
                                Supplier Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="SuppilerName"
                              />
                            </div>
                            <div className="col-lg-2">
                              <div className="mb-2">
                                <label className="form-label">Address</label>
                                {/* <textarea
                                  className="form-control"
                                  id="address"
                                  rows="1"
                                ></textarea> */}
                              </div>
                              <div className="row">
                                <div className="col-lg-2">
                                  <div>
                                    <label className="form-label">Ph:</label>
                                  </div>
                                </div>
                                {/* <input
                                      className="form-control"
                                      id="PhoneNumber"
                                      rows="1"
                                    ></input> */}
                              </div>
                            </div>
                            <div className="col-lg-2 text-bold">
                              Purchase Billbook
                              <select
                                id="PurchaseBillbook"
                                className="form-control chosen-select"
                                data-placeholder="Choose an option"
                              >
                                <option value=""></option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                            </div>
                            <div className="col-lg-2 text-bold">
                              Staff
                              <select
                                id="Staff"
                                className="form-control chosen-select"
                                data-placeholder="Choose an option"
                              >
                                <option value=""></option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                            </div>
                          </div>
                          <table id="ExampleTable" width="100%">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>UOM</th>
                                <th>NOP</th>
                                <th>Price</th>
                                <th>Net.Amt</th>
                                {/* Add more columns as needed */}
                              </tr>
                            </thead>
                            {/* <tbody>
                          <tr>
                            <td>John</td>
                            <td>Male</td>
                            <td>John</td>
                            <td><UomDropdown/>
                            </td>
                            <td>John</td>
                            <td>Male</td>
                            <td>John</td>
                          </tr>
                        </tbody> */}
                            <tfoot>
                              <tr>
                                <th>S.No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>UOM</th>
                                <th>NOP</th>
                                <th>Price</th>
                                <th>Net.Amt</th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 pl-0 pr-0">
                      <div className="card card-danger">
                        <div
                          className="card-header
                        "
                        >
                          <h3 className="card-title">Purchase Details</h3>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6">
                              <table id="EditableTable" width="100%">
                                <thead className="text-bold">
                                  <tr>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td  >Product 1</td>
                                    <td  >10</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td  >Product 2</td>
                                    <td >20</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td  >Product 3</td>
                                    <td  >30</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td  >Product 4</td>
                                    <td  >60</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="col-lg-6">
                       
                              <ul className="nav nav-tabs tab" role="tablist">
                                <li className="nav-item">
                                  <a
                                    className="nav-link active text-bold"
                                    data-toggle="tab"
                                    href="#tabs-1"
                                    role="tab"
                                  >
                                       Product
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link text-bold"
                                    data-toggle="tab"
                                    href="#tabs-2"
                                    role="tab"
                                  >
                                       Employee
                                  </a>
                                </li>
                              </ul>
                              <div className="tab-content">
                                <div
                                  className="tab-pane active"
                                  id="tabs-1"
                                  role="tabpanel"
                                >
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Product Id</th>
                                        <th>Name</th>
                                        <th>Qty</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>501</td>
                                        <td>Closeup</td>
                                        <td>50</td>
                                      </tr>
                                      <tr>
                                        <td>502</td>
                                        <td>Boat</td>
                                        <td>75</td>
                                      </tr>
                                      <tr>
                                        <td>503</td>
                                        <td>Kitkat</td>
                                        <td>90 </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div
                                  className="tab-pane"
                                  id="tabs-2"
                                  role="tabpanel"
                                >
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Employeeid</th>
                                        <th>Name</th>
                                        <th>Shift</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>101</td>
                                        <td>Selvaganesh</td>
                                        <td>Night</td>
                                      </tr>
                                      <tr>
                                        <td>102</td>
                                        <td>Umar</td>
                                        <td>Day</td>
                                      </tr>
                                      <tr>
                                        <td>103</td>
                                        <td>Jayapradha</td>
                                        <td>Day</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-6">
                              <table className="text-bold">
                                <tbody>
                                  <tr>
                                    <td>Bill Amount</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Added Amount</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Less Amount</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Total</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Bal.</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Total</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Cash Paid</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Net Balance</td>
                                    <td className="text-right" contentEditable="true"
                                  suppressContentEditableWarning={true}>0.00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="col-lg-6">
                              <div className="row mb-2">
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn btn-primary col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    Prev bill
                                  </button>
                                </div>
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn bg-purple col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    Click Me
                                  </button>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-lg-12">
                                  <button
                                    id="myButton"
                                    className="btn bg-pink col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    Tool bill
                                  </button>
                                </div>
                              </div>

                              <div className="row mt-2">
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn bg-indigo col-lg-12 "
                                    // onclick="myFunction()"
                                  >
                                    Delete
                                  </button>
                                </div>
                                {/* <div className="col-lg-1"></div> */}
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn btn-dark col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    Include
                                  </button>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn btn-success col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    Save
                                  </button>
                                </div>
                                {/* <div className="col-lg-1"></div> */}
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn btn-danger col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn btn-info col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    Print
                                  </button>
                                </div>
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn btn-warning col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    PDF
                                  </button>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn bg-orange col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    {"<<"}
                                  </button>
                                </div>
                                <div className="col-lg-6">
                                  <button
                                    id="myButton"
                                    className="btn bg-orange col-lg-12"
                                    // onclick="myFunction()"
                                  >
                                    {">>"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row ">
                            <div className="checkbox-container">
                              <label className="checkbox-label">Print QB</label>
                              <input
                                type="checkbox"
                                id="myCheckbox"
                                className="form-control"
                                name="myCheckbox"
                                value="checkboxValue"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default SalesPage;

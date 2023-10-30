import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <form>
                            <input type="text" placeholder='Input Angka' name="angka"></input>
                            <input type='button' id='btn_segitiga'>Generate segitiga</input>
                            <input type='button' id='btn_ganjil'>Generate Bilangan Ganjil</input>
                            <input type='button' id='btn_prima'>Generate Bilangan Prima</input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

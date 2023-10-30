import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <form>
                            <input type="text" placeholder='Input Angka' name="angka" id='input_angka'></input>
                            <br></br>
                            <input type='button' id='btn_segitiga'>Generate segitiga</input>
                            <input type='button' id='btn_ganjil'>Generate Bilangan Ganjil</input>
                            <input type='button' id='btn_prima'>Generate Bilangan Prima</input>
                            <br></br>
                            <h1>Result:</h1>
                            <p id='txt_hasil'></p>
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

var base_url = '127.0.0.1:8000';
document.getElementById('btn_segitiga').onclick = function () {
    var input_num = document.getElementById('input_angka').value;

    if (input_num === '') {
        txt_hasil.innerHTML('Input tidak boleh kosong');
    } else if (isNaN(input_num)) {
        txt_hasil.innerHTML('Input harus berupa angka');
    } else {
        $.ajax({
            url: base_url + '/api/segitiga',
            type: 'GET',
            dataType: 'json',
            data: input_num,
            success: (data) => txt_hasil.innerHTML(data)
        })
    }
}

document.getElementById('btn_ganjil').onclick = function () {
    var input_num = document.getElementById('input_angka').value;

    if (input_num === '') {
        txt_hasil.innerHTML('Input tidak boleh kosong');
    } else if (isNaN(input_num)) {
        txt_hasil.innerHTML('Input harus berupa angka');
    } else {
        $.ajax({
            url: base_url + '/api/ganjil',
            type: 'GET',
            dataType: 'json',
            data: input_num,
            success: (data) => txt_hasil.innerHTML(data)
        })
    }    
}

document.getElementById('btn_prima').onclick = function () {
    var input_num = document.getElementById('input_angka').value;

    if (input_num === '') {
        txt_hasil.innerHTML('Input tidak boleh kosong');
    } else if (isNaN(input_num)) {
        txt_hasil.innerHTML('Input harus berupa angka');
    } else {
        $.ajax({
            url: base_url + '/api/prima',
            type: 'GET',
            dataType: 'json',
            data: input_num,
            success: (data) => txt_hasil.innerHTML(data)
        })
    }
}

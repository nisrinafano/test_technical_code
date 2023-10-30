<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class angka extends Controller
{
    /**
     * Function to generate triangle based on the input
     */
    public function segitiga(Request $request) {
        $result = array(
            'error' => false,
            'message' => '',
            'segitiga' => ''
        );

        // validasi input adalah angka
        if (!is_numeric($request)) {
            $result['error'] = true;
            $result['message'] = 'Input harus berupa angka';
            return $result;
        }

        // validasi input merupakan bilangan positif
        if ($request < 0) {
            $result['error'] = true;
            $result['message'] = 'Angka yang dimasukkan tidak boleh negatif';
            return $result;
        }

        $input_str = stringValue($request);
        $split_input_str = str_split($input_str);

        $digit_count = count($split_input_str);

        $count_zero = 1;
        for ($i=0; $i < $digit_count; $i++) {
            $temp_str = $split_input_str[$i];
            for ($j=0; $j < $count_zero; $j++) {
                $temp_str += '0';
            }
            $temp_str += '\n';
            $result['segitiga'] = $temp_str;

            $count_zero++;
            $temp_str = '';
        }
    }

    /**
     * Function to generate odd number from 1 to input number
     */
    public function ganjil(Request $request) {
        $result = array(
            'error' => false,
            'message' => '',
            'ganjil' => ''
        );

        // validasi input adalah angka
        if (!is_numeric($request)) {
            $result['error'] = true;
            $result['message'] = 'Input harus berupa angka';
            return $result;
        }

        // validasi input merupakan bilangan positif
        if ($request < 0) {
            $result['error'] = true;
            $result['message'] = 'Angka yang dimasukkan tidak boleh negatif';
            return $result;
        }

        for ($i=0; $i < $request + 1; $i++) {
            if ($i % 2 == 1) $result['ganjil'] = $result['ganjil'] + ' ' + $i;
        }

        return $result;

    }

    /**
     * Function to generate prime number from 1 to input number
     */
    public function prima(Request $request) {
        $result = array(
            'error' => false,
            'message' => '',
            'prima' => ''
        );

        // validasi input adalah angka
        if (!is_numeric($request)) {
            $result['error'] = true;
            $result['message'] = 'Input harus berupa angka';
            return $result;
        }

        // validasi input merupakan bilangan positif
        if ($request < 0) {
            $result['error'] = true;
            $result['message'] = 'Angka yang dimasukkan tidak boleh negatif';
            return $result;
        }

        $is_prime = true;
        for ($i=1; $i < $request + 1; $i++) {
            for ($j=1; $j < $i; $j++) {
                if ($j != 1 && $i % $j == 0) {
                    $is_prime = false;
                    break;
                }
            }
            if ($is_prime) $result['prima'] = $result['prima'] + ' ' + $i;
            $is_prime = true;
        }

        return $result;
    }
}

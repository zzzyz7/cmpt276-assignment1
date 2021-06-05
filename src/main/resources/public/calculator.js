var mean = () => {
    calculator_mean("a1_g1", "a1_g2", "a2_g1", "a2_g2", "a3_g1", "a3_g2", "a4_g1", "a4_g2", "r1", "r2");
}
var calculator_mean = (input1_g1, input1_g2, input2_g1, input2_g2, input3_g1, input3_g2, input4_g1, input4_g2, output_r1, output_r2) => {
    var count = 4;
    /*first percent*/
    var input1 = document.getElementById(input1_g1);
    var input2 = document.getElementById(input1_g2);
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    /*invaild check*/
    if (num2 == 0 || num1 == NaN || num1 == NaN) {
        var res1 = 0;
        count = count - 1;
    } else {
        res1 = num1 / num2;
        p1.innerHTML = res1;
    }

    /*second percent*/
    var input3 = document.getElementById(input2_g1);
    var input4 = document.getElementById(input2_g2);
    var num3 = Number(input3.value);
    var num4 = Number(input4.value);
    /*invaild check*/
    if (num4 == 0 || num3 == NaN || num3 == NaN) {
        var res2 = 0;
        count = count - 1;
    } else {
        res2 = num3 / num4;
        p2.innerHTML = res2;
    }


    /*third percent*/
    var input5 = document.getElementById(input3_g1);
    var input6 = document.getElementById(input3_g2);
    var num5 = Number(input5.value);
    var num6 = Number(input6.value);
    /*invaild check*/
    if (num6 == 0 || num5 == NaN || num5 == NaN) {
        var res3 = 0;
        count = count - 1;
    } else {
        res3 = num5 / num6;
        p3.innerHTML = res3;
    }

    /*fourth percent*/
    var input7 = document.getElementById(input4_g1);
    var input8 = document.getElementById(input4_g2);
    var num7 = Number(input7.value);
    var num8 = Number(input8.value);
    /*invaild check*/
    if (num8 == 0 || num7 == NaN || num7 == NaN) {
        var res4 = 0;
        count = count - 1;
    } else {
        res4 = num7 / num8;
        p4.innerHTML = res4;
    }

    var res_mean = (res1 + res2 + res3 + res4) / count;
    res_mean = res_mean.toFixed(3);
    if (res_mean >= 0.95) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "A+";
    } else if (res_mean < 0.95 && res_mean >= 0.90) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "A";
    } else if (res_mean >= 0.85 && res_mean < 0.90) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "A-";
    } else if (res_mean >= 0.80 && res_mean < 0.85) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "B+";
    } else if (res_mean >= 0.75 && res_mean < 0.80) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "B";
    } else if (res_mean >= 0.70 && res_mean < 0.75) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "B-";
    } else if (res_mean >= 0.65 && res_mean < 0.70) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "C+";
    } else if (res_mean >= 0.60 && res_mean < 0.65) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "C";
    } else if (res_mean >= 0.55 && res_mean < 0.60) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "C-";
    } else if (res_mean >= 0.50 && res_mean < 0.55) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "D";
    } else {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "F";
    }

    var result_percent = document.getElementById(output_r1);
    result_percent.innerText = "Result: " + res_mean;
}

var weighted = () => {
    calculator_weighted("a1_g1", "a1_g2", "a2_g1", "a2_g2", "a3_g1", "a3_g2", "a4_g1", "a4_g2", "a1_w", "a2_w", "a3_w", "a4_w", "r1", "r2");
}
var calculator_weighted = (input1_g1, input1_g2, input2_g1, input2_g2, input3_g1, input3_g2, input4_g1, input4_g2, input_w1, input_w2, input_w3, input_w4, output_r1, output_r2) => {
    var input_weight1 = document.getElementById(input_w1);
    var input_weight2 = document.getElementById(input_w2);
    var input_weight3 = document.getElementById(input_w3);
    var input_weight4 = document.getElementById(input_w4);
    var weight1 = Number(input_weight1.value);
    var weight2 = Number(input_weight2.value);
    var weight3 = Number(input_weight3.value);
    var weight4 = Number(input_weight4.value);
    var total = weight1 + weight2 + weight3 + weight4;
    /*first percent*/
    var input1 = document.getElementById(input1_g1);
    var input2 = document.getElementById(input1_g2);
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    /*invaild check*/
    if (num2 == 0 || num1 == NaN || num1 == NaN || weight1 == 0 || weight1 == NaN) {
        var res1 = 0;
        total = total - weight1;
    } else {
        res1 = num1 / num2;
        p1.innerHTML = res1;
    }

    /*second percent*/
    var input3 = document.getElementById(input2_g1);
    var input4 = document.getElementById(input2_g2);
    var num3 = Number(input3.value);
    var num4 = Number(input4.value);
    if (num4 == 0 || num3 == NaN || num3 == NaN || weight2 == 0 || weight2 == NaN) {
        var res2 = 0;
        total = total - weight2;
    } else {
        res2 = num3 / num4;
        p2.innerHTML = res2;
    }

    /*third percent*/
    var input5 = document.getElementById(input3_g1);
    var input6 = document.getElementById(input3_g2);
    var num5 = Number(input5.value);
    var num6 = Number(input6.value);
    if (num6 == 0 || num5 == NaN || num5 == NaN || weight3 == 0 || weight3 == NaN) {
        var res3 = 0;
        total = total - weight3;
    } else {
        res3 = num5 / num6;
        p3.innerHTML = res3;
    }

    /*fourth percent*/
    var input7 = document.getElementById(input4_g1);
    var input8 = document.getElementById(input4_g2);
    var num7 = Number(input7.value);
    var num8 = Number(input8.value);

    if (num8 == 0 || num7 == NaN || num7 == NaN || weight4 == 0 || weight4 == NaN) {
        var res4 = 0;
        total = total - weight4;
    } else {
        res4 = num7 / num8;
        p4.innerHTML = res4;
    }
    var res_weighted = (res1 * weight1 + res2 * weight2 + res3 * weight3 + res4 * weight4) / total;
    res_weighted = res_weighted.toFixed(3);
    if (res_weighted >= 0.95) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "A+";
    } else if (res_weighted < 0.95 && res_weighted >= 0.90) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "A";
    } else if (res_weighted >= 0.85 && res_weighted < 0.90) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "A-";
    } else if (res_weighted >= 0.80 && res_weighted < 0.85) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "B+";
    } else if (res_weighted >= 0.75 && res_weighted < 0.80) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "B";
    } else if (res_weighted >= 0.70 && res_weighted < 0.75) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "B-";
    } else if (res_weighted >= 0.65 && res_weighted < 0.70) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "C+";
    } else if (res_weighted >= 0.60 && res_weighted < 0.65) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "C";
    } else if (res_weighted >= 0.55 && res_weighted < 0.60) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "C-";
    } else if (res_weighted >= 0.50 && res_weighted < 0.55) {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "D";
    } else {
        var result_grade = document.getElementById(output_r2);
        result_grade.innerText = "Letter Grade: " + "F";
    }
    var result_percent = document.getElementById(output_r1);
    result_percent.innerText = "Result: " + res_weighted;
}
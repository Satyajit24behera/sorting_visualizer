function RadixSort() {
    document.getElementById("Time_Worst").innerText = "O(d*(n+b))";
    document.getElementById("Time_Average").innerText = "O(d*(n+b))";
    document.getElementById("Time_Best").innerText = "O(d*(n+b))"; 
    document.getElementById("For_K").style.textTransform = "none";
    document.getElementById("For_K").innerText = "D : Number of Digits \n B : Base of the number system being used";

    document.getElementById("Space_Worst").innerText = "O(n + b)";

    c_delay = 0;

    var max = Math.max(...div_sizes);

    var num_digits = Math.floor(Math.log10(max)) + 1;

    for (var digit = 0; digit < num_digits; digit++) {
        var count = new Array(10).fill(0);

        for (var i = 0; i < array_size; i++) {
            var element_digit = getDigit(div_sizes[i], digit);
            count[element_digit]++;
            div_update(divs[i], div_sizes[i], "lightblue"); 
        }

        for (var i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        var output = new Array(array_size);
        for (var i = array_size - 1; i >= 0; i--) {
            var element_digit = getDigit(div_sizes[i], digit);
            output[count[element_digit] - 1] = div_sizes[i];
            count[element_digit]--;
            div_update(divs[i], div_sizes[i], "lightgreen"); 
        }

        for (var i = 0; i < array_size; i++) {
            div_sizes[i] = output[i];
            div_update(divs[i], div_sizes[i], "green"); 
        }
    }

    enable_buttons();
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

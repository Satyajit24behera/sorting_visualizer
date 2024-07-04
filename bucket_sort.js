function BucketSort() {
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N + K)";
    document.getElementById("Time_Best").innerText = "Ω(N + K)";
    document.getElementById("For_K").style.textTransform = "none";
    document.getElementById("For_K").innerText = "K : Number of Buckets";


    document.getElementById("Space_Worst").innerText = "O(N + K)";

    c_delay = 0;

    bucket_sort();

    enable_buttons();
}

function bucket_sort() {
    var buckets = new Array(Math.floor(array_size / 4));
    for (var i = 0; i < Math.floor(array_size / 4); i++) {
        buckets[i] = [];
    }

    for (var i = 0; i < array_size; i++) {
        var idx_buck = Math.floor(Math.floor(array_size / 4) * div_sizes[i] / inp_as.max);
        buckets[idx_buck].push(div_sizes[i]);
        div_update(divs[i], div_sizes[i], "lightblue");
    }

    var k = 0;
    for (var i = 0; i < Math.floor(array_size / 4); i++) {
        for (var j = 0; j < buckets[i].length; j++) {
            div_sizes[k++] = buckets[i][j];
            div_update(divs[k - 1], div_sizes[k - 1], "lightgreen");
        }
    }

    var lent = 0;
    for (var i = 0; i < Math.floor(array_size / 4); i++) {
        insertion_sort(div_sizes, lent, lent + buckets[i].length);
        lent = lent + buckets[i].length;
    }

}

function insertion_sort(bucket, start, end) {
    for (var j = start + 1; j < end; j++) {
        div_update(divs[j], bucket[j], "yellow");

        var key = bucket[j];
        var i = j - 1;

        while (i >= start && bucket[i] > key) {
            div_update(divs[i], bucket[i], "red");
            div_update(divs[i + 1], bucket[i + 1], "red");

            bucket[i + 1] = bucket[i];

            div_update(divs[i], bucket[i], "#07b2ab");
            if (i == (j - 1)) {
                div_update(divs[i + 1], bucket[i + 1], "yellow");
            } else {
                div_update(divs[i + 1], bucket[i + 1], "#07b2ab");
            }
            i -= 1;
        }
        bucket[i + 1] = key;

        // Update colors for sorted part
        for (var t = start; t <= j; t++) {
            div_update(divs[t], bucket[t], "green");
        }
    }
    // Final update for the last element
    div_update(divs[end - 1], bucket[end - 1], "green");
}


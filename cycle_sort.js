function CycleSort() {
    document.getElementById("Time_Worst").innerText = "O(N²)";
    document.getElementById("Time_Average").innerText = "Θ(N²)";
    document.getElementById("Time_Best").innerText = "Ω(N²)";
    document.getElementById("For_K").style.textTransform = "none";
    document.getElementById("For_K").innerText = "";

    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    cycle_sort();

    enable_buttons();
}

function cycle_sort() {
    for (var cycle_start = 0; cycle_start < array_size - 1; cycle_start++) {
        var item = div_sizes[cycle_start];
        var pos = cycle_start;
        div_update(divs[cycle_start], div_sizes[cycle_start], "yellow");  
        for (var i = cycle_start + 1; i < array_size; i++) {
            if (div_sizes[i] < item) {
                pos++;
            }
        }

        if (pos == cycle_start) {
            div_update(divs[cycle_start], div_sizes[cycle_start], "green"); 
            continue;
        }

        while (item == div_sizes[pos]) {
            pos++;
        }
        if (pos != cycle_start) {
            var temp = item;
            item = div_sizes[pos];
            div_sizes[pos] = temp;
            div_update(divs[pos], div_sizes[pos], "red"); 
        }

        while (pos != cycle_start) {
            pos = cycle_start;
            div_update(divs[pos], div_sizes[pos], "yellow");
            for (var i = cycle_start + 1; i < array_size; i++) {
                if (div_sizes[i] < item) {
                    pos++;
                }
            }

            while (item == div_sizes[pos]) {
                pos++;
            }
            if (item != div_sizes[pos]) {
                var temp = item;
                item = div_sizes[pos];
                div_sizes[pos] = temp;
                div_update(divs[pos], div_sizes[pos], "red"); 
            }
        }

        div_update(divs[cycle_start], div_sizes[cycle_start], "green"); 
    }
    div_update(divs[array_size - 1], div_sizes[array_size - 1], "green"); 
}

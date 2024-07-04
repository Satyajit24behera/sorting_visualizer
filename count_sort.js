function CountingSort() {
  document.getElementById("Time_Worst").innerText = "O(n + k)";
  document.getElementById("Time_Average").innerText = "O(n + k)";
  document.getElementById("Time_Best").innerText = "O(n + k)"; 
  document.getElementById("For_K").style.textTransform = "none";
  document.getElementById("For_K").innerText = "K : Size of the Count Array"; 

  document.getElementById("Space_Worst").innerText = "O(n + k)";

  c_delay = 0;

  var min = Math.min(...div_sizes);
  var max = Math.max(...div_sizes);

  var count = new Array(max - min + 1).fill(0);

  for (var i = 0; i < array_size; i++) {
    count[div_sizes[i] - min]++;
    div_update(divs[i], div_sizes[i], "lightblue"); 
  }

  for (var i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  var output = new Array(array_size);
  for (var i = array_size - 1; i >= 0; i--) {
    output[count[div_sizes[i] - min] - 1] = div_sizes[i];
    count[div_sizes[i] - min]--;
    div_update(divs[i], div_sizes[i], "lightgreen"); 
  }

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] = output[i];
    div_update(divs[i], div_sizes[i], "green"); 
  }

  enable_buttons();
}

function konversi() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
    alert("Masukkan angka yang valid!");
    return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("kalkulasi").value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kalkulasi").value = "";
}

function reverse() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
    alert("Masukkan angka Fahrenheit yang valid!");
    return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius;
    document.getElementById("kalkulasi").value = `${fahrenheit}°F - 32) * (5/9) = ${celsius}°C`;
}
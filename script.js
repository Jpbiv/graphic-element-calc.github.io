function updateMargin() {
    var shortside = parseFloat (document.getElementById('shortside').value);
    var longside = parseFloat (document.getElementById('longside').value);

    if (!isNaN(shortside) && !isNaN(longside) && longside !== 0) {
    var margin = (shortside / 25) * (1+(longside/shortside)/10);
    var windowradius = margin * 2; 
    var windowgap = (2/3) * margin;
    var linethickness = margin / 15;
    document.getElementById('marginresult').innerText = margin.toFixed(2);
    document.getElementById('windowradiusresult').innerText = windowradius.toFixed(2);
    document.getElementById('windowgapresult').innerText = windowgap.toFixed(2);
    document.getElementById('linethicknessresult').innerText = linethickness.toFixed(2);
    } else {
        document.getElementById('marginresult').innerText = "0";
        document.getElementById('windowradiusresult').innerText = "0";
        document.getElementById('windowgapresult').innerText = "0";
        document.getElementById('linethicknessresult').innerText = "0";
    }
}

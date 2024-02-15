function updateMargin() {
    var width = parseFloat (document.getElementById('width').value);
    var height = parseFloat (document.getElementById('height').value);

    if (!isNaN(height) && !isNaN(width)) {
    var margin = (height / 25) * (1+(width/height)/10);
        if (height > width) {
            document.getElementById('marginresult').innerText = "Longside shorter than Short Side";
            document.getElementById('windowradiusresult').innerText = "0";
            document.getElementById('windowgapresult').innerText = "0";
            document.getElementById('linethicknessresult').innerText = "0";
        } else {
    var windowradius = margin * 2; 
    var windowgap = (2/3) * margin;
    var linethickness = margin / 15;
    document.getElementById('marginresult').innerText = margin.toFixed(2);
    document.getElementById('windowradiusresult').innerText = windowradius.toFixed(2);
    document.getElementById('windowgapresult').innerText = windowgap.toFixed(2);
    document.getElementById('linethicknessresult').innerText = linethickness.toFixed(2);
        }
    } else {
        document.getElementById('marginresult').innerText = "0";
        document.getElementById('windowradiusresult').innerText = "0";
        document.getElementById('windowgapresult').innerText = "0";
        document.getElementById('linethicknessresult').innerText = "0";
    }
}

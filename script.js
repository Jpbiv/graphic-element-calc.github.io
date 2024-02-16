/*function updateMargin() {
    var width = parseFloat (document.getElementById('width').value);
    var height = parseFloat (document.getElementById('height').value);

    if (!isNaN(height) && !isNaN(width)) {
    var margin = (height / 25) * (1+(width/height)/10);
        if (height > width) {

        } else {
            if (unit === 'px') {
                var windowradius = margin * 2; 
                var windowgap = (2/3) * margin;
                var linethickness = margin / 15;
                document.getElementById('marginresult').innerText = margin.toFixed(0);
                document.getElementById('windowradiusresult').innerText = windowradius.toFixed(0);
                document.getElementById('windowgapresult').innerText = windowgap.toFixed(0);
                document.getElementById('linethicknessresult').innerText = linethickness.toFixed(0);
            } else {
                (unit === 'mm')
                var windowradius = margin * 2; 
                var windowgap = (2/3) * margin;
                var linethickness = margin / 15;
                document.getElementById('marginresult').innerText = margin.toFixed(2);
                document.getElementById('windowradiusresult').innerText = windowradius.toFixed(2);
                document.getElementById('windowgapresult').innerText = windowgap.toFixed(2);
                document.getElementById('linethicknessresult').innerText = linethickness.toFixed(2);
            }
        }
    } else { 
        document.getElementById('marginresult').innerText = "0";
        document.getElementById('windowradiusresult').innerText = "0";
        document.getElementById('windowgapresult').innerText = "0";
        document.getElementById('linethicknessresult').innerText = "0";
    }
}*/

// JavaScript code starts here

function calculateMargin(width, height) {
    return (height / 25) * (1 + (width / height) / 10);
}

function calculateWindowRadius(margin) {
    return margin * 2;
}

function calculateWindowGap(margin) {
    return (2 / 3) * margin;
}

function calculateLineThickness(margin) {
    return margin / 15;
}

function resetResults(partial = false) {
    const resetValue = partial ? document.getElementById('marginresult').innerText : "0";
    document.getElementById('marginresult').innerText = resetValue;
    document.getElementById('windowradiusresult').innerText = "0";
    document.getElementById('windowgapresult').innerText = "0";
    document.getElementById('linethicknessresult').innerText = "0";
}

function updateResults(width, height, unit) {
    let margin = calculateMargin(width, height);
    let windowRadius = calculateWindowRadius(margin);
    let windowGap = calculateWindowGap(margin);
    let lineThickness = calculateLineThickness(margin);

    let roundFunc = (unit === 'px') ? (num) => num.toFixed(0) : (num) => num.toFixed(2);

    document.getElementById('marginresult').innerText = roundFunc(margin);
    document.getElementById('windowradiusresult').innerText = roundFunc(windowRadius);
    document.getElementById('windowgapresult').innerText = roundFunc(windowGap);
    document.getElementById('linethicknessresult').innerText = roundFunc(lineThickness);
}

function updateMargin() {
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var unit = document.getElementById('unit').value;

    if (isNaN(width) || isNaN(height)) {
        console.error("Invalid input for width or height.");
        resetResults();
        return;
    }

    if (height > width) {
        document.getElementById('marginresult').innerText = "Longside shorter than Short Side";
        resetResults(true);
    } else {
        updateResults(width, height, unit);
    }
}

// Attaching event listeners to inputs for real-time updates
document.getElementById('width').addEventListener('input', updateMargin);
document.getElementById('height').addEventListener('input', updateMargin);
document.getElementById('unit').addEventListener('change', updateMargin);
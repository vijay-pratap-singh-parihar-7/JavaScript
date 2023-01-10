function pattern1(n) {
    n =20
    let dom = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j == i) {
                dom += "*";
            }
            else if (j == n + 1 - i) {
                dom += "*";
            }
            else {
                dom += "&nbsp";
            }
        }
        dom += "<br>";
    }
    document.getElementById("pattern").innerHTML =dom;
}


function pattern2(n) {
    n =20
    let dom = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1) {
                dom += "*";
            }
            else {
                if (j == 0 || j == n - 1) {
                    dom += "*";
                }
                else {
                    dom += "&nbsp&nbsp";
                }
            }
        }
        dom += "<br>";
    }
    document.getElementById("pattern").innerHTML = dom;
}

function pattern3(n) {
    n =20
    let dom = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > i; j--) {
            dom += "&nbsp";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            if (k === 0 || k === 2 * i - 2) {
                dom += "*";
            }
            else {
                dom += "&nbsp";
            }
        }
        dom += "<br>";
    }

    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < i; j++) {
            dom += "&nbsp"
        }
        for (let k = (n - i) * 2 - 1; k >= 1; k--) {
            if (k === 1 || k === (n - i) * 2 - 1) {
                dom += "*";
            }
            else {
                dom += "&nbsp";
            }
        }
        dom += "<br>";
    }
    document.getElementById("pattern").innerHTML = dom;
}
function pattern4(n) {
    n =20
    let dom = "";
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                dom += "*";
            }
            dom += "<br>";
        }
        for (let i = 1; i <= n - 1; i++) {
            for (let j = 0; j < n - i; j++) {
                dom += "*";
            }
            dom += "<br>";
        }
    
    document.getElementById("pattern").innerHTML = dom;
}

function pattern5(n){
    n = 5;
    let dom="";
        let i, j, k;
        for (i = 1; i <= n; i++)
        {
            for (k = 1; k < i; k++)
                dom +="&nbsp";
            for (j = i; j <= n; j++)
                dom+=j + "&nbsp";
 
            dom+="<br/>";
        }
        for (i = n - 1; i >= 1; i--)
        {
         
            for (k = 1; k < i; k++)
                dom+="&nbsp";
            for (j = i; j <= n; j++)
                dom+=j + "&nbsp";
 
            dom+="<br/>";
        }
        document.getElementById("pattern").innerHTML =dom;
}
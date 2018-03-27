window.onload = function() {

            var start = document.getElementById('start');
            var res = document.getElementById('reset');

            var Vo = document.getElementById('Vo');
            var Vk = document.getElementById('Vk');
            var t = document.getElementById('t');
            var s = document.getElementById('s');
            var a = document.getElementById('a');

            var c = document.getElementById('check');
            var formula = document.getElementById('formula');


            start.onclick = function Search() {
                console.log('start');


                if (c.checked) {
                    a.value = -a.value
                };
                if (Vo.value * 1 < Vk.value * 1) {
                    c.checked
                };

                while (a.value == "" || Vo.value == "" || Vk.valie == "" || t.value == "" || s.value == "") {



                    var SearchS = function(a, Vo, Vk, s, t) {
                        console.log("S")
                        let SearchS;
                        if (Vo.value != "" && t.value != "" && a.value != "") {
                            SearchS = (Vo.value * t.value) + (a.value * (t.value * t.value));
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>S= Vo*t +</div><div class='drob'>a*t<sup>2</sup><div class ='line'></div>2</div>";
                            formula.appendChild(formul);
                        } else
                        if (Vk.value != "" && Vo.value != "" && a.value != "") {
                            SearchS = ((Vk.value * Vk.value) - (Vo.value * Vo.value)) / (2 * a.value);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>S= </div><div class='drob'>Vk<sup>2</sup> - Vo<sup>2</sup><div class ='line'></div>2a</div>";
                            formula.appendChild(formul);
                        } else
                        if (Vk.value != "" && Vo.value != "" && t.value != "") {
                            SearchS = (((Vo.value * 1) + (Vk.value * 1)) / 2) * t.value;
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>S= </div><div class='drob'>Vo + Vk<div class ='line'></div>2</div><div class='centerv'>* t</div>";
                            formula.appendChild(formul);
                        };

                        if (SearchS != undefined || NaN) {
                            console.log(SearchS);
                            s.value = SearchS;
                        };
                    };

                    var SearchA = function(a, Vo, Vk, s, t) {
                        console.log("A")
                        let SearchA;
                        if (Vk.value != "" && Vo.value != "" && t.value != "") {
                            SearchA = ((Vk.value * 1) - (Vo.value * 1)) / t.value;
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>a= </div><div class='drob'>Vk - Vo<div class ='line'></div>t</div>";
                            formula.appendChild(formul);
                        } else
                        if (Vo.value != "" && t.value != "" && s.value != "") {
                            SearchA = (2 * ((s.value * 1) - (t.value * Vo.value))) / (t.value * t.value);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>a= </div><div class='drob'>2 * (S - Vo*t)<div class ='line'></div>t<sup>2</sup></div>";
                            formula.appendChild(formul);
                        } else
                        if (Vk.value != "" && Vo.value != "" && s.value != "") {
                            SearchA = ((Vk.value * Vk.value) - (Vo.value * Vo.value)) / (2 * s.value);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>a= </div><div class='drob'>Vk<sup>2</sup> - Vo<sup>2</sup><div class ='line'></div>2S</div>";
                            formula.appendChild(formul);
                        };
                        if (SearchA != undefined || NaN) {
                            console.log(SearchA);
                            a.value = SearchA;
                        };
                    };

                    var SearchT = function(a, Vo, Vk, s, t) {
                        console.log("T")
                        let SearchT;
                        if (Vo.value != "" && Vk.value != "" && s.value != "") {
                            SearchT = (2 * s.value) / ((Vo.value * 1) + (Vk.value * 1));
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>t=</div><div class='drob'>2 * S<div class ='line'></div>Vo</div><div class='centerv'>+ Vk</div>";
                            formula.appendChild(formul);
                        } else
                        if (Vo.value != "" && Vk.value != "" && a.value != "") {
                            SearchT = ((Vk.value * 1) - (Vo.value * 1)) / a.value;
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>t=</div><div class='drob'>Vk - Vo<div class ='line'></div>a</div>";
                            formula.appendChild(formul);
                        } else
                        if (Vo.value == "0" && a.value != "" && s.value != "") {
                            SearchT = Math.sqrt((2 * s.value) / a.value);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>t=Корень(</div><div class='drob'>2 * S<div class ='line'></div>a</div><div class='centerv'>)</div>";
                            formula.appendChild(formul);
                        };
                        if (SearchT != undefined || NaN) {
                            console.log(SearchT);
                            t.value = SearchT;
                        };
                    };

                    var SearchVk = function(a, Vo, Vk, s, t) {
                        console.log("Vk")
                        let SearchVk;
                        if (Vo.value != "" && a.value != "" && t.value != "") {
                            SearchVk = (Vo.value * 1) + (a.value * t.value);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>Vk= Vo + a*t</div>";
                            formula.appendChild(formul);
                        };
                        if (SearchVk != undefined || NaN) {
                            console.log(SearchVk);
                            Vk.value = SearchVk;
                        };
                    };

                    var SearchVo = function(a, Vo, Vk, s, t) {
                        console.log("Vo")
                        let SearchVo;
                        if (t.value != "" && a.value != "" && s.value != "") {
                            SearchVo = (s.value / t.value) - (0.5 * a.value * t.value);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>Vo= </div><div class='drob'>S<div class ='line'></div>t</div><div class='centerv'> - </div><div class='drob'>a*t<div class ='line'></div>2</div>";
                            formula.appendChild(formul);
                        } else
                        if (t.value != "" && Vk.value != "" && s.value != "") {
                            SearchVo = (s.value / t.value) - (Vk.value * 1);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>Vo= </div><div class='drob'>S<div class ='line'></div>t</div><div class='centerv'> - Vk<div>";
                            formula.appendChild(formul);
                        } else
                        if (Vk.value != "" && t.value != "" && a.value != "") {
                            SearchVo = (Vk.value * 1) - (a.value * t.value);
                            var formul = document.createElement('div');
                            formul.className = "formul";
                            formul.innerHTML = "<div class='centerv'>Vo= Vk - a*t</div>";
                            formula.appendChild(formul);
                        };
                        if (SearchVo != undefined || NaN) {
                            console.log(SearchVo);
                            Vo.value = SearchVo;
                        };
                    };

                    if (s.value == "") {
                        SearchS(a, Vo, Vk, s, t, formula);
                    };
                    if (a.value == "") {
                        SearchA(a, Vo, Vk, s, t);
                    };
                    if (Vo.value == "") {
                        SearchVo(a, Vo, Vk, s, t);
                    };
                    if (Vk.value == "") {
                        SearchVk(a, Vo, Vk, s, t);
                    };
                    if (t.value == "") {
                        SearchT(a, Vo, Vk, s, t);
                    };
                };

                reset.onclick = function() {
                    console.log("Clear!")
                    a.value = "";
                    Vk.value = "";
                    Vo.value = "";
                    s.value = "";
                    t.value = "";
                    Remove();
                };

                function Remove(){
                    var resFormula = document.getElementById('formula')
                    resFormula.parentNode.removeChild(formul);
                    return false;
                }
            };
        };
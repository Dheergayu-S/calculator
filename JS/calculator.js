// 1. SELECT ELEMENTS
        const display = document.getElementById("display");

        // 2. HELPER FUNCTION (Updates the screen)
        function appendValue(input) {
            if (display.innerText === "0" && input !== ".") {
                display.innerText = input;
            } else {
                display.innerText += input;
            }
        }

        // 3. NUMBER FUNCTIONS (Connected to onclick="numX()")
        function num0() { appendValue("0"); }
        function num1() { appendValue("1"); }
        function num2() { appendValue("2"); }
        function num3() { appendValue("3"); }
        function num4() { appendValue("4"); }
        function num5() { appendValue("5"); }
        function num6() { appendValue("6"); }
        function num7() { appendValue("7"); }
        function num8() { appendValue("8"); }
        function num9() { appendValue("9"); }

        // 4. SYMBOL LISTENERS (Connected via ID)
        document.getElementById("add").addEventListener("click", function() { appendValue("+"); });
        document.getElementById("subtract").addEventListener("click", function() { appendValue("-"); });
        document.getElementById("divide").addEventListener("click", function() { appendValue("/"); });
        document.getElementById("multiply").addEventListener("click", function() { appendValue("*"); });

        // 5. ACTION LISTENERS (Clear and Equals)
        document.getElementById("clear").addEventListener("click", function() {
            display.innerText = "0";
        });

        document.getElementById("equals").addEventListener("click", function() {
            try {
                // Warning: eval() is powerful but dangerous in real apps. Okay for practice.
                display.innerText = eval(display.innerText);
            } catch (e) {
                display.innerText = "Error";
            }
        });
let square = document.getElementById("square");
        let x = window.innerWidth / 2, y = window.innerHeight / 2;

        document.addEventListener("keydown", function(event) {
            if (event.key === "ArrowUp") y -= 10;
            if (event.key === "ArrowDown") y += 10;
            if (event.key === "ArrowLeft") x -= 10;
            if (event.key === "ArrowRight") x += 10;

            square.style.transform = `translate(${x}px, ${y}px)`;
        });
setTimeout(function () {
    document.getElementById("content1").innerText = 10;
    setTimeout(function () {
      document.getElementById("content1").innerText = 9;
      setTimeout(function () {
        document.getElementById("content1").innerText = 8;
        setTimeout(function () {
          document.getElementById("content1").innerText = 7;
          setTimeout(function () {
            document.getElementById("content1").innerText = 6;
            setTimeout(function () {
              document.getElementById("content1").innerText = 5;
              setTimeout(function () {
                document.getElementById("content1").innerText = 4;
                setTimeout(function () {
                  document.getElementById("content1").innerText = 3;
                  setTimeout(function () {
                    document.getElementById("content1").innerText = 2;
                    setTimeout(function () {
                      document.getElementById("content1").innerText = 1;
                      setTimeout(function () {
                        document.getElementById("content1").innerText = "";
                        document.getElementById(
                          "content2"
                        ).innerText = "happy Independence day".toUpperCase();
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 0);
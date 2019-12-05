$( function (){
	const player1 = "Jogador 1 (X)";
	const player2 = "Jogador 2 (O)";
	var playTime = player1;
	var gameOver = false;


	$(document).ready(function initiateSpace() {
		
		var space = $(".space");

		for (var i = 0; i < space.length; i++) {
			
			$(space[i]).click(function () {
			
				if(gameOver) {return;}
			

				/* if ($(".space").text() != "") {
					return;
				} */			

				if ($(this).val($(".h2").length == 0))  {

					if (playTime == player1) {

						$(this).text("X");
						$(this).attr("jogada", player1);
						playTime = player2;

					
					}else{
					
						$(this).val($(this).text("O"));
						$(this).attr("jogada", player2);
						playTime = player1;

					}
	

				}

				$(document).ready(function refreshScreen() {
					if(gameOver) {return;}

					if(playTime == player1){
						var player = $("#top").text("Jogador 1 (X)");
					
					}else {
						var player = $("#top").text("Jogador 2 (O)");
					}
				});

				$(document).ready(function verifyWinner() {
					var a1 = $("#a1").attr("jogada");
					var a2 = $("#a2").attr("jogada");
					var a3 = $("#a3").attr("jogada");

					var b1 = $("#c1").attr("jogada");
					var b2 = $("#c2").attr("jogada");
					var b3 = $("#c3").attr("jogada");

					var c1 = $("#c1").attr("jogada");
					var c2 = $("#c2").attr("jogada");
					var c3 = $("#c3").attr("jogada");

					var winner = '';

					if(((a1 == b1 && a1 == c1) || ( a1 == b2 && a1 == c3) || (a1 == a2 && a1 == a3)) && a1 != "") {
						vencedor = a1;
					
					}else if(((b2 == b1 && b2 == b3) || ( b2 == a3 && b2 == c1) || (b2 == a2 && b2 == c2)) && b2 != "") {
						vencedor = b2;	

					}else if(((c3 == c1 && c3 == c2) || ( c3 == b2 && c3 == a1) || (c3 == b3 && c3 == a3)) && c3 != "") {
						vencedor = c3;
					}

					if(vencedor != "") {
						gameOver = true;
						player = $("#win").text("O vencedor foi o: '<br><b><u>" + vencedor + "</b><u>'");

					

				}

				});

					
			});			
		

		}

	});
});
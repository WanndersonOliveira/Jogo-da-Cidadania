var personagem = {x: 20, y: 10, vivo: true};
			var mulher1 = {x: 10, y: 0, volta: 0};
			var mulher2 = {x: 30, y: 86, display: true, volta:0};
			var homem = {x: 25, y: 0, volta:0};
			var homem2 = {x:80, y:86, display: true};
			var senhora = {x: 40, y: 0, display: true, atravessando:false};
			var senhora2 = {x: 80, y: 0, display: false, atravessando: false};
			var senhora3 = {x: 75, y: 86, display: false, atravessando: false};
			var senhorasAtravessadas = 0;
			var arvore = {x: 5, y: 30};
			var arvore2 = {x: 75, y: 10};
			var carro = {x: 50, y: 84};
			var carro1 = {x: 50, y: 84};
			var carro2 = {x: 50, y: 84};
			var carro3 = {x: 50, y: 84};
			var carro4 = {x: 63, y: 0};
			var carro5 = {x: 63, y: 0};
			var carro6 = {x: 63, y: 0};
			var carro7 = {x: 63, y: 0};
			var timer2, timer3, timerCarro;
			var tempo = 0;
			var tempo2 = 70;

			function voltar(){
				window.location.href = "game.html";
				console.log("Clicado");
				alert("Clicado!");
			}

			function checar(event){
				var key = event.which || event.keyCode;

				if(key == 119 || key == 87){
					moverCima();
				} else if(key == 97 || key == 65){
					moverEsquerda();
				} else if(key == 100 || key == 68){
					moverDireita();
				} else if(key == 115 || key == 83){
					moverBaixo();
				} 
			}

			function initio(){
				document.getElementById("telainicial").style.display = "block";
			}

			function iniciarGame(){
				document.getElementById("telainicial").style.display = "none";
				tempo = 0;
				tempo2 = 70;
				setInterval(checarEspaco, 100);
				setInterval(moverMulher1, 200);
				setInterval(moverMulher2, 200);
				setInterval(moverSenhora, 300);
				setInterval(moverHomem2, 200);
				setInterval(checarMorte, 1000);
				setInterval(checarVitoria, 1000);
				timer2 = setInterval(checaSumicoMulher2, 5000);
				timer3 = setInterval(checaSumicoHomem2, 5000);
				timerCarro = setInterval(moveCarro, 200);
			}

			function checarVitoria(){
				if(senhorasAtravessadas == 3 & tempo2 >= 0){
					document.getElementById("finish").style.display="block";
					document.getElementById("next").style.display="block";
					document.getElementById("game_over_tela").style.display = "block";
					document.getElementById("menu").style.display = "block";

					document.getElementById("personagem").style.display = "none";
				} else if(senhorasAtravessadas < 3 & tempo2 == 0){
					document.getElementById("game_over").style.display="block";
					document.getElementById("game_over_tela").style.display = "block";
					document.getElementById("menu").style.display = "block";

					document.getElementById("personagem").style.display = "none";
				}
			}


			function checarMorte(){
				tempo = tempo+1;

				if(tempo2 > 0){
					tempo2 = tempo2-1;
				}

				document.getElementById("timer").innerHTML = tempo2;

				if(personagem.y >= (carro.y-9) & personagem.y <= (carro.y+9)){
					if(personagem.x >= (carro.x-4) & personagem.x <= (carro.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}

				if(personagem.y >= (carro1.y-9) & personagem.y <= (carro1.y+9)){
					if(personagem.x >= (carro1.x-4) & personagem.x <= (carro1.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}

				if(personagem.y >= (carro2.y-9) & personagem.y <= (carro2.y+9)){
					if(personagem.x >= (carro2.x-4) & personagem.x <= (carro2.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}

				if(personagem.y >= (carro3.y-9) & personagem.y <= (carro3.y+9)){
					if(personagem.x >= (carro3.x-4) & personagem.x <= (carro3.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}

				if(personagem.y >= (carro4.y-9) & personagem.y <= (carro4.y+11)){
					if(personagem.x >= (carro4.x-4) & personagem.x <= (carro4.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}

				if(personagem.y >= (carro5.y-9) & personagem.y <= (carro5.y+11)){
					if(personagem.x >= (carro5.x-4) & personagem.x <= (carro5.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}

				if(personagem.y >= (carro6.y-9) & personagem.y <= (carro6.y+11)){
					if(personagem.x >= (carro6.x-4) & personagem.x <= (carro6.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}

				if(personagem.y >= (carro7.y-9) & personagem.y <= (carro7.y+11)){
					if(personagem.x >= (carro7.x-4) & personagem.x <= (carro7.x+4)){
						personagem.vivo = false;
						document.getElementById("game_over").style.display="block";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("menu").style.display = "block";
						document.getElementById("personagem").style.display = "none";
					}
				}
			}

			function moverMulher1(){
				if(mulher1.volta == 0){
					if(mulher1.y < 88){
					 mulher1.y = mulher1.y+1;
				 	 document.getElementById("woman").style.top = mulher1.y+"%";
				 	 if(mulher1.y % 2 == 0){
						document.getElementById("woman").src = "../img/npc/woman1r.png";
					 } else {
					    document.getElementById("woman").src = "../img/npc/woman1l.png";
				     }
					}

					if(mulher1.y >= 45 & mulher1.y <= 50){
						mulher1.x = mulher1.x-1;
						document.getElementById("woman").style.left = mulher1.x+"%";
					}

					if(mulher1.y >= 88){
						document.getElementById("woman").style.display = "none";
						senhora2.display = true;
						document.getElementById("oldwoman2").style.display="block";
					}
				}
				

				if(mulher1.volta == 1){
					if(mulher1.y >= 88){
						mulher1.x = 94;
						mulher1.y = 10;
						document.getElementById("woman").style.top = mulher1.y+"%";
						document.getElementById("woman").style.left = mulher1.x+"%";
						document.getElementById("woman").style.display = "block";
					}

					if(mulher1.x > 90){
						mulher1.x = mulher1.x-1;
						document.getElementById("woman").style.left = mulher1.x+"%";
					}

					if(mulher1.y < 86){
						mulher1.y = mulher1.y+1;
						document.getElementById("woman").style.top = mulher1.y+"%";

						if(mulher1.y % 2 == 0){
							document.getElementById("woman").src = "../img/npc/woman1r.png";
					 	} else {
					    	document.getElementById("woman").src = "../img/npc/woman1l.png";
				     	}
					}

					if(mulher1.y == 86){
						document.getElementById("woman").style.display = "none";
						mulher1.volta = 2;
					}
				}
			}

			function moverMulher2(){
				if(mulher2.volta == 0){
					if(mulher2.y > 0){
				 		mulher2.y = mulher2.y-1;
				 		document.getElementById("woman2").style.top = mulher2.y+"%";

				 		if(mulher2.y % 2 == 0){
							document.getElementById("woman2").src = "../img/npc/woman2tr.png";
						} else {
							document.getElementById("woman2").src = "../img/npc/woman2tl.png";
						}
					}


					if(mulher2.y == 0){
						document.getElementById("woman2").style.display = "none";
						mulher2.display = false;
						mulher2.volta = 1;
					}
				}

				if(mulher2.volta == 1){
					if(mulher2.y == 0){
						mulher2.x = 90;
						document.getElementById("woman2").style.left = mulher2.x+"%";
						document.getElementById("woman2").src = "../img/npc/woman2.png";
					}

					if(mulher2.y < 86){
						mulher2.y = mulher2.y + 1;
						document.getElementById("woman2").style.display = "block";
						document.getElementById("woman2").style.top = mulher2.y+"%";

						if(mulher2.y % 2 == 0){
							document.getElementById("woman2").src = "../img/npc/woman2r.png";
						} else {
							document.getElementById("woman2").src = "../img/npc/woman2l.png";
						}
					}

					if(mulher2.y == 86){
						document.getElementById("woman2").style.display = "none";
					}
				}
			}

			function checaSumicoMulher2(){
				if(mulher2.display == false){
					document.getElementById("man").style.display = "block";
					clearInterval(timer2);

					timer2 = setInterval(moverHomem, 150);
				}
			}

			function checaSumicoHomem2(){
				if(homem2.display == false){
					clearInterval(timer3);
					mulher2.volta = 1;
					mulher1.volta = 1;
				}
			}

			function moverHomem(){
				if(homem.volta == 0){
					if(homem.y < 80){
						homem.y = homem.y+1;
						document.getElementById("man").style.top = homem.y+"%";

						if(homem.y % 2 == 0){
							document.getElementById("man").src = "../img/npc/man_frente_direita.png";
						} else {
							document.getElementById("man").src = "../img/npc/man_frente_esquerda.png";
						}
					}

					if(homem.y > 30 & homem.y < 40){
						homem.x = homem.x+1;
						document.getElementById("man").style.left = homem.x+"%";
					}

					if(homem.y >= 60 & homem.y <= 80){
						homem.x = homem.x - 1;
						document.getElementById("man").style.left = homem.x+"%";
					}
				}

				if(homem.volta == 1){
					if(homem.y == 80 & homem.x < 36){
						homem.x = homem.x+1;
						document.getElementById("man").style.left = homem.x+"%";

						if(homem.x % 2 == 0){
							document.getElementById("man").src = "../img/npc/man_lado1.png";
						} else {
							document.getElementById("man").src = "../img/npc/man_lado2.png";
						}
					}

					if(homem.x == 36 & homem.y > 0){
						homem.y = homem.y-1;
						document.getElementById("man").style.top = homem.y+"%";

						document.getElementById("man").src = "../img/npc/man_lado2.png";

						if(homem.y % 2 == 0){
							document.getElementById("man").src = "../img/npc/man_tras1.png";
						} else {
							document.getElementById("man").src = "../img/npc/man_tras2.png";
						}
					}

					if(homem.y == 0){
						document.getElementById("man").style.display = "none";
						clearInterval(timer2);
					}
				}

				if(homem.y == 80){
					homem.volta = 1;
				}

				if(homem.y == 90){
					clearInterval(timer2);
				}
			}

			function moverHomem2(){
				if(homem2.y > 0){
					homem2.y = homem2.y-1;
					document.getElementById("man2").style.top=homem2.y+"%";

					if(homem2.y % 2 == 0){
							document.getElementById("man2").src = "../img/npc/man_tras1.png";
					} else {
							document.getElementById("man2").src = "../img/npc/man_tras2.png";
					}
				}

				if(homem2.y <= arvore2.y+30 & homem2.y >= arvore2.y+20){
					homem2.x = homem2.x+1;
					document.getElementById("man2").style.left = homem2.x+"%";

					if(homem2.x % 2 == 0){
							document.getElementById("man2").src = "../img/npc/man_lado1.png";
					} else {
							document.getElementById("man2").src = "../img/npc/man_lado2.png";
					}
				}

				if(homem2.y == 0){
					document.getElementById("man2").style.display = "none";
					homem2.display = false;
				}
			}

			function moverSenhora(){
				if(senhora.y < 50){
					senhora.y = senhora.y+1;
					document.getElementById("oldwoman").style.top = senhora.y+"%";
				}

				if(senhora.y == 50){
					if(senhora.x < 44){
						senhora.x = senhora.x+1;
						document.getElementById("oldwoman").style.left = senhora.x+"%";
					}
				}

				if((senhora.y >= 50)&((personagem.x >= senhora.x-2)&(personagem.x <= senhora.x+10))&((personagem.y >= senhora.y) & personagem.y <= (senhora.y+10))){
					document.getElementById("oldwoman").style.left = personagem.x+"%";
					document.getElementById("oldwoman").style.top = (personagem.y-5)+"%";
					senhora.x = personagem.x;
					senhora.y = (personagem.y-5);
				}

				if(senhora.x == 90){
					senhorasAtravessadas++;
				}

				if(senhora3.x == 15){
					senhorasAtravessadas++;
				}

				if(senhora2.x == 15){
					senhorasAtravessadas++;
				}

				if(senhora.x > 70){
					console.log("Sras. atravessadas: "+senhorasAtravessadas);
					senhora.x = senhora.x+1;
					document.getElementById("oldwoman").style.left = senhora.x+"%";
				}

				if(senhora.x >= 93){
					document.getElementById("oldwoman").style.display = "none";
					senhora.display = false;
					senhora3.display = true;
					document.getElementById("oldwoman3").style.display = "block";	
				}


				if(senhora2.display == true){
					if(senhora2.y < 40) {
						senhora2.y = senhora2.y+1;
						document.getElementById("oldwoman2").style.top = senhora2.y+"%";
					}

					if(senhora2.y >= 14 & senhora2.y <= 25){
						senhora2.x = senhora2.x+1;
						document.getElementById("oldwoman2").style.left = senhora2.x+"%";
					}

					if(senhora2.y == 40 & senhora2.x > 69){
						senhora2.x = senhora2.x-1;
						document.getElementById("oldwoman2").style.left = senhora2.x+"%";
					}

					if(personagem.y >= 44 & personagem.y <= 50){
						if(personagem.x >= 67 & personagem.x <= 72){
							senhora2.atravessando = true;
						}
					}

					if(senhora2.atravessando == true){
						document.getElementById("oldwoman2").style.left = personagem.x+"%";
						document.getElementById("oldwoman2").style.top = (personagem.y-5)+"%";
						senhora2.x = personagem.x;
						senhora2.y = (personagem.y-5);
					}

					if(senhora2.x >= 40 & senhora2.x <= 45){
						senhora2.atravessando = false;
					}

					if(senhora2.atravessando == false){
						if(senhora2.x <= 45){
							senhora2.x = senhora2.x-1;
							document.getElementById("oldwoman2").style.left = senhora2.x+"%";

							if(senhora2.y >= 57){
								document.getElementById("oldwoman2").style.zIndex = 2;
							}

							if(senhora2.y < 57){
								document.getElementById("oldwoman2").style.zIndex = 1;
							}

						}
					}

					if(senhora2.x == 0){
						senhora2.display = false;
						document.getElementById("oldwoman2").style.display = "none";
					}
				}

				if(senhora3.display == true){
					if(senhora3.y > 58){
						senhora3.y = senhora3.y-1;
						document.getElementById("oldwoman3").style.top = senhora3.y+"%";
					}

					if(senhora3.y == 58 & senhora3.x > 69){
						senhora3.x = senhora3.x-1;
						document.getElementById("oldwoman3").style.left = senhora3.x+"%";
					}

					if(personagem.y >= 62 & personagem.y <= 66){
						if(personagem.x >= 68 & personagem.x <= 72){
							senhora3.atravessando = true;
						}
					}

					if(senhora3.atravessando == true){
						document.getElementById("oldwoman3").style.left = personagem.x+"%";
						document.getElementById("oldwoman3").style.top = (personagem.y-5)+"%";
						senhora3.x = personagem.x;
						senhora3.y = (personagem.y-5);
					}

					if(senhora3.x >= 40 & senhora3.x <= 45){
						senhora3.atravessando = false;
					}

					if(senhora3.atravessando == false){
						if(senhora3.x <= 45){
							senhora3.x = senhora3.x-1;
							document.getElementById("oldwoman3").style.left = senhora3.x+"%";
							if(senhora3.y >= 57){
								document.getElementById("oldwoman3").style.zIndex = 3;
							}
						}
					}

					if(senhora3.x <= 0){
						senhora3.display = false;
						document.getElementById("oldwoman3").style.display = "none";
					}
				}
			}

			function checarEspaco(){
				if(((personagem.x >= 19 & personagem.x <= 21)|(personagem.x <= 9 & personagem.x >= 7) & (personagem.y >= 56))){
					document.getElementById("tree").style.zIndex = 0;
				}

				if(personagem.y < 56){
					document.getElementById("tree").style.zIndex = 2;
				}

				if((personagem.x >= 73 & personagem.x <= 75) | (personagem.x >= 83 & personagem.x <= 84) & personagem.y >= 25){
					document.getElementById("tree2").style.zIndex = 0;
				}

				if(personagem.y < 25){
					document.getElementById("tree2").style.zIndex = 2;
				}
			}

			function moverDireita(){
				if(personagem.x < 94){
					personagem.x = personagem.x+1;
				document.getElementById("personagem").style.left = personagem.x+"%";
				}

				if(personagem.x % 2 == 0){
					document.getElementById("personagem").src = "../img/kaline_direita_1.png";
				} else {
					document.getElementById("personagem").src = "../img/kaline_direita_2.png";
				}

			}

			function moverEsquerda(){

				if(personagem.x > 0){
					personagem.x = personagem.x-1;
					document.getElementById("personagem").style.left = personagem.x+"%";
				}

				if(personagem.x % 2 == 0){
					document.getElementById("personagem").src = "../img/kaline_esquerda_1.png";
				} else {
					document.getElementById("personagem").src = "../img/kaline_esquerda_2.png";
				}

			}

			

			function moverCima(){

				if(personagem.y > 0 & !((personagem.y == 57)&(personagem.x > 9 & personagem.x < 19)) & !((personagem.y == 27) & (personagem.x > 75 & personagem.x < 83))){
					personagem.y = personagem.y-1;
					document.getElementById("personagem").style.top = personagem.y+"%";
				}

				if(personagem.y % 2 == 0){
					document.getElementById("personagem").src = "../img/kaline_tras_direita.png";
				} else {
					document.getElementById("personagem").src = "../img/kaline_tras_esquerda.png";
				}
			}


			function moverBaixo(){

				if(personagem.y < 90 & !((personagem.y == 55) & (personagem.x > 9 & personagem.x < 19)) & !((personagem.y == 25)& (personagem.x > 75 & personagem.x < 83))){
					personagem.y = personagem.y+1;
					document.getElementById("personagem").style.top = personagem.y+"%";
				}

				if(personagem.y % 2 == 0){
					document.getElementById("personagem").src = "../img/kaline_frente_direita.png";
				} else {
					document.getElementById("personagem").src = "../img/kaline_frente_esquerda.png";
				}
			}


			function terminar(){
				document.getElementById("personagem").src = "../img/kaline.png";
			}

			function alerta(){
				document.getElementById("personagem").style.backgroundColor = "black";
			}

			function alerta2(){
				document.getElementById("personagem").style.backgroundColor = "red";
			}

			function moveCarro(){
				if(carro.y >= 0){
					carro.y = carro.y - 1;
					document.getElementById("car").style.top = carro.y+"%";
				}

				if(carro.y < 0){
					document.getElementById("car").style.display = "none";
				}


				if(carro.y == 50){
					carro1.y = 84;
					document.getElementById("car1").style.top = carro1.y+"%";
					document.getElementById("car1").style.display = "block";
				}

				if(carro1.y >= 0 & carro.y < 50){
					carro1.y = carro1.y - 1;
					document.getElementById("car1").style.top = carro1.y+"%";
				}

				if(carro1.y == 0){
					document.getElementById("car1").style.display = "none";
				}

				if(carro1.y == 50){
					carro2.y = 84;
					document.getElementById("car2").style.top = carro2.y+"%";
					document.getElementById("car2").style.display = "block";
				}

				if(carro2.y >= 0 & carro1.y < 50){
					carro2.y = carro2.y - 1;
					document.getElementById("car2").style.top = carro2.y+"%";
				}

				if(carro2.y < 0){
					document.getElementById("car2").style.display = "none";
				}

				if(carro2.y == 0){
					carro.y = 84;
					document.getElementById("car").style.display = "block";
					document.getElementById("car").style.top = "84%";
				}

				if(carro2.y == 50){
					carro3.y = 84;
					document.getElementById("car3").style.top = carro3.y+"%";
					document.getElementById("car3").style.display = "block";
				}

				if(carro3.y >= 0 & carro2.y < 50){
					carro3.y = carro3.y-1;
					document.getElementById("car3").style.top = carro3.y+"%";
				}

				if(carro3.y < 0){
					document.getElementById("car3").style.display = "none";
				}



				if(carro4.y < 84){
					carro4.y = carro4.y+1;
					document.getElementById("car4").style.display = "block";
					document.getElementById("car4").style.top = carro4.y+"%";
				}

				if(carro4.y == 84){
					document.getElementById("car4").style.display = "none";
				}

				if(carro4.y == 30){
					carro5.y = 0;
					document.getElementById("car5").style.top = carro5.y+"%";
					document.getElementById("car5").style.display = "block";
				}

				if(carro5.y < 84 & carro4.y > 30){
					carro5.y = carro5.y + 1;
					document.getElementById("car5").style.top = carro5.y+"%";
				}

				if(carro5.y == 84){
					document.getElementById("car5").style.display = "none";
				}

				if(carro5.y == 30){
					carro6.y = 0;
					document.getElementById("car6").style.top = carro6.y+"%";
					document.getElementById("car6").style.display = "block";
				}

				if(carro6.y < 84 & carro5.y > 30){
					carro6.y = carro6.y + 1;
					document.getElementById("car6").style.top = carro6.y+"%";
				}

				if(carro6.y == 84){
					carro4.y = 0;
					carro6.y = carro6.y+1;
					document.getElementById("car6").style.display = "none";
				}

				if(carro6.y == 35){
					carro7.y = 0;
					document.getElementById("car7").style.top = carro7.y+"%";
					document.getElementById("car7").style.display = "block";
				}

				if(carro7.y < 84 & carro6.y > 35){
					carro7.y = carro7.y+1;
					document.getElementById("car7").style.top = carro7.y+"%";
				}

				if(carro7.y == 84){
					document.getElementById("car7").style.display = "none";
				}

			}

			function redMenu(){
				window.location.href = "../index.html";
			}

			function voltar(){
				window.location.href = "game.html";
			}

			function redProx(){
				window.location.href = "game2.html";
			}

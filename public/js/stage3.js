var personagem = {x: 20, y: 10, vivo: true, vida: 100};
			var cortador = {x: 0, y: 19};
			var formiga = {x: 77, y: 60, direcao:0};
			var formiga2 = {x: 77, y: 77, direcao: 0};
			var formiga3 = {x: 77, y: 32, direcao: 0};
			var timer = 60;
			var tempo = 0;
			var pontos = 0;
			var qtde = 0;
			//Segundo estágio

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

			function pegarCortador(){
				if((personagem.x >= cortador.x & personagem.x < cortador.x+5) & (personagem.y <= cortador.y & personagem.y >= cortador.y-5)){
					cortador.y = personagem.y+10;
					//personagem.y = personagem.y-5;
					document.getElementById("cortador").style.top = cortador.y+"%";
				}

				if(cortador.y > 80 & cortador.x < 85){
					cortador.y = 10;
					cortador.x += 13;
					document.getElementById("cortador").style.top = cortador.y+"%";
					document.getElementById("cortador").style.left = cortador.x+"%";
					qtde++;
					console.log("Qtde: "+qtde);
				}

				if(cortador.x >= 0 & cortador.x <= 11){
					if(cortador.y > 27){
						document.getElementById("grass8").src = "../img/sand.png";
					}

					if(cortador.y > 46){
						document.getElementById("grass15").src = "../img/sand.png";
					}

					if(cortador.y > 66){
						document.getElementById("grass22").src = "../img/sand.png";
					}

					if(cortador.y > 70){
						document.getElementById("grass29").src = "../img/sand.png";
					}
				}

				if(cortador.x >= 12 & cortador.x <= 23){
					if(cortador.y > 27){
						document.getElementById("grass9").src = "../img/sand.png";
					}

					if(cortador.y > 46){
						document.getElementById("grass16").src = "../img/sand.png";
					}

					if(cortador.y > 66){
						document.getElementById("grass23").src = "../img/sand.png";
					}

					if(cortador.y > 70){
						document.getElementById("grass30").src = "../img/sand.png";
					}
				}

				if(cortador.x >= 24 & cortador.x <= 35){
					if(cortador.y > 27){
						document.getElementById("grass10").src = "../img/sand.png";
					}

					if(cortador.y > 46){
						document.getElementById("grass17").src = "../img/sand.png";
					}

					if(cortador.y > 66){
						document.getElementById("grass24").src = "../img/sand.png";
					}

					if(cortador.y > 70){
						document.getElementById("grass31").src = "../img/sand.png";
					}
				}

				if(cortador.x >= 36 & cortador.x <= 47){
					if(cortador.y > 27){
						document.getElementById("grass11").src = "../img/sand.png";
					}

					if(cortador.y > 46){
						document.getElementById("grass18").src = "../img/sand.png";
					}

					if(cortador.y > 66){
						document.getElementById("grass25").src = "../img/sand.png";
					}

					if(cortador.y > 70){
						document.getElementById("grass32").src = "../img/sand.png";
					}
				}

				if(cortador.x >= 48 & cortador.x <= 59){
					if(cortador.y > 27){
						document.getElementById("grass12").src = "../img/sand.png";
					}

					if(cortador.y > 46){
						document.getElementById("grass19").src = "../img/sand.png";
					}

					if(cortador.y > 66){
						document.getElementById("grass26").src = "../img/sand.png";
					}

					if(cortador.y > 70){
						document.getElementById("grass33").src = "../img/sand.png";
					}
				}

				if(cortador.x >= 60 & cortador.x <= 71){
					if(cortador.y > 27){
						document.getElementById("grass13").src = "../img/sand.png";
					}

					if(cortador.y > 46){
						document.getElementById("grass20").src = "../img/sand.png";
					}

					if(cortador.y > 66){
						document.getElementById("grass27").src = "../img/sand.png";
					}

					if(cortador.y > 70){
						document.getElementById("grass34").src = "../img/sand.png";
					}
				}

				if(cortador.x >= 71 & cortador.x <= 81){
					if(cortador.y > 27){
						document.getElementById("grass14").src = "../img/sand.png";
					}

					if(cortador.y > 46){
						document.getElementById("grass21").src = "../img/sand.png";
					}

					if(cortador.y > 66){
						document.getElementById("grass28").src = "../img/sand.png";
					}

					if(cortador.y > 70){
						document.getElementById("grass35").src = "../img/sand.png";
						document.getElementById("game_over_tela").style.display = "block";
						document.getElementById("finish").style.display = "block";
						document.getElementById("menu").style.display = "block";
					}
				}
			}

			function iniciarTerceiroEstagio(){
				document.getElementById("telainicial").style.display = "none";
				document.getElementById("telaTerceiroEstagio").style.display = "block";


				tempo = 0;

				setInterval(checarMorte, 1000);
				setInterval(pegarCortador,250);
			}

			
			//A morte só acontecerá quando o personagem tiver o atributo vida = 0.
			function checarMorte(){
				tempo = tempo+1;

				if(timer > 0){
					timer = timer - 1;
				}

				document.getElementById("life").innerHTML = personagem.vida;

				//Movimento das formigas através do cenário
				if(tempo % 3 == 0){
					if(formiga2.x > 10 && formiga2.direcao == 0){
						formiga2.x-=5;
						document.getElementById("ant2").style.left=formiga2.x+"%";
					}

					if(formiga2.x <= 10){
						formiga2.direcao = 1;
						document.getElementById("ant2").src = "../img/ant/ant.png";
					}

					if(formiga2.direcao == 1 & formiga2.y > 10){
						formiga2.y-=5;
						document.getElementById("ant2").style.top=formiga2.y+"%";
					}

					if(formiga2.y <= 10){
						formiga2.direcao = 2;
						document.getElementById("ant2").src = "../img/ant/ant2.png";
					}

					if(formiga2.direcao == 2 && formiga2.x < 70){
						formiga2.x+=5;
						document.getElementById("ant2").style.left=formiga2.x+"%";
					}

					if(formiga2.x >= 70 && formiga2.direcao == 2){
						formiga2.direcao = 3;
						document.getElementById("ant2").src = "../img/ant/ant4.png";
					}

					if(formiga2.y < 63){
						formiga2.y+=5;
						document.getElementById("ant2").style.top=formiga2.y+"%";
					}

					if(formiga2.y >= 63 && formiga2.direcao == 3){
						formiga2.direcao = 0;
						document.getElementById("ant2").src = "../img/ant/ant4.png";
					}
				}

				//Movimento formiga 3
				if(formiga3.y > 5 && formiga3.direcao == 0){
					formiga3.y-=5;
					document.getElementById("ant3").style.top=formiga3.y+"%";
				}

				if(formiga3.y <= 5){
					formiga3.direcao=1;
					document.getElementById("ant3").src = "../img/ant/ant4.png";
				}

				if(formiga3.direcao == 1 && formiga3.x > 5){
					formiga3.x--;
					document.getElementById("ant3").style.left = formiga3.x+"%";
				}

				if(formiga3.x <= 5){
					formiga3.direcao = 2;
					document.getElementById("ant3").src = "../img/ant/ant3.png";
				}

				if(formiga3.direcao == 2 && formiga3.y < 77){
					formiga3.y += 3;
					document.getElementById("ant3").style.top = formiga3.y+"%";
				}

				if(formiga3.y >= 77){
					formiga3.direcao = 3;
					document.getElementById("ant3").src = "../img/ant/ant2.png";
				}

				if(formiga3.direcao == 3 && formiga3.x < 65){
					formiga3.x += 5;
					document.getElementById("ant3").style.left = formiga3.x+"%";
				}

				if(formiga3.x >= 65 && formiga3.direcao == 3){
					formiga3.direcao = 0;
					document.getElementById("ant3").src = "../img/ant/ant.png";
				}

				if(tempo % 2 == 0){


					if(formiga.y > 15 && formiga.direcao == 0){
						formiga.y-=5;
						document.getElementById("ant").style.top=formiga.y+"%";
					}

					if(formiga.y < 17 & formiga.x > 3 && formiga.direcao == 0){
						formiga.x -= 5;
						document.getElementById("ant").src="../img/ant/ant4.png";
						document.getElementById("ant").style.left = formiga.x+"%";
					}

					if(formiga.x <= 3 && formiga.direcao == 0){
						document.getElementById("ant").src = "../img/ant/ant2.png";
						formiga.x += 5;
						document.getElementById("ant").style.left = formiga.x+"%";
						formiga.direcao++;
					}

					if(formiga.x < 50 & formiga.y < 17 & formiga.direcao == 1){
						formiga.x += 5;
						document.getElementById("ant").style.left = formiga.x+"%";
					}	

					if(formiga.x >= 50 & formiga.y <= 75 & formiga.direcao == 1){
						formiga.y += 5;
						document.getElementById("ant").src="../img/ant/ant3.png";
						document.getElementById("ant").style.top = formiga.y+"%";
					}

					if(formiga.y > 75){
						document.getElementById("ant").src="../img/ant/ant.png";
						formiga.direcao--;
					}
				}

				if(pontos == 28){
					document.getElementById("game_over_tela").style.display = "block";
					document.getElementById("finish").style.display = "block";
					document.getElementById("next").style.display = "block";
					document.getElementById("menu").style.display = "block";
				}

				if(personagem.vivo == false){
					document.getElementById("game_over").style.display="block";
					document.getElementById("game_over_tela").style.display = "block";
					document.getElementById("menu").style.display = "block";
				}


				/*Personagem perdendo vida com a interação com os antagonistas*/
				if((((personagem.y+9) > formiga.y) & (personagem.y < (formiga.y+20))) & ((personagem.x+4) > formiga.x) & (personagem.x < (formiga.x+8))){
					personagem.vida-=5;
				}

				if((((personagem.y+9) > formiga2.y) & (personagem.y < (formiga2.y+20))) & ((personagem.x+4) > formiga2.x) & (personagem.x < (formiga2.x+8))){
					personagem.vida-=5;
				}

				if((((personagem.y+9) > formiga3.y) & (personagem.y < (formiga3.y+20))) & ((personagem.x+4) > formiga3.x) & (personagem.x < (formiga3.x+8))){
					personagem.vida-=5;
				}

				if(personagem.vida == 0){
					personagem.vivo = false;
				}
			}


			function moverDireita(){
				if(personagem.x < 94 & personagem.vivo == true & !(((personagem.x >= cortador.x-3) & (personagem.y >= cortador.y &personagem.y <= cortador.y+12)))){

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

				if(personagem.x > 0 & personagem.vivo == true & !(((personagem.x < cortador.x+9) & (personagem.y >= cortador.y &personagem.y <= cortador.y+12)))){
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

				if(personagem.y > 0 & personagem.vivo == true & !((personagem.x >= cortador.x & personagem.x < cortador.x+7) & (personagem.y <= cortador.y+12))){
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
				if(personagem.y < 90 & personagem.vivo == true & !((personagem.x >= cortador.x & personagem.x < cortador.x+5) & (personagem.y <= cortador.y & personagem.y >= cortador.y-5))){
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

			
var personagem = {x: 20, y: 10, vivo: true};
			var timer = 60;
			var tempo = 0;
			var pontos = 0;
			var lixos = new Array();
			var lixoCapturado = new Array();
			var pegouLixo = 0;
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
				} else if(key == 32){
					jogarNaLixeira();
				}
			}

			function iniciarSegundoEstagio(){
				document.getElementById("telainicial").style.display = "none";
				document.getElementById("telaSegundoEstagio").style.display = "block";


				tempo = 0;

				setInterval(gerarLixo, 1000);
				setInterval(checarMorte, 1000);

			}

			function gerarLixo(){
				var t = "garbage";
				
				if(tempo < 31){
					var k = tempo-1;
					t = "garbage"+k;
					var lixo = {x:20, y:50, nome: t, noChao: true};
					lixo.x = Math.random()*50;
					lixo.y = Math.random()*90;

					document.getElementById(t).style.top = lixo.y+"%";
					document.getElementById(t).style.left = lixo.x+"%";
					document.getElementById(t).style.display = "block";
					lixos[tempo] = lixo;
					console.log(lixos[tempo]);
				}
				
			}


			function checarLixo(){

				for(var i = 1; i < lixos.length; i++){
					if((personagem.y >= lixos[i].y-5 && personagem.y <= lixos[i].y+5 && personagem.x >= lixos[i].x-5 && personagem.x <= lixos[i].x+5 && pegouLixo <= 3) && lixos[i].noChao == true){
						document.getElementById(lixos[i].nome).style.display="none";
						lixoCapturado[pegouLixo] = lixos[i];
						lixos[i].noChao = false;
						pegouLixo++;
						document.getElementById("coleta_bar").style.height = ((pegouLixo+1)*50)+"px";
						console.log(lixoCapturado);
					}
				}

				if(pontos >= 20){
					document.getElementById("lixo_bar").style.backgroundColor = "green";

				}

			}

			function jogarNaLixeira(){
				if(personagem.x >= 8 && personagem.x <= 13){
					if(personagem.y >= 76 && personagem.y <= 88){
						for(var i = 0; i < lixoCapturado.length; i++){
							if(lixoCapturado[i] != null){
								pontos++;
								lixoCapturado[i] = null;
								pegouLixo--;
								document.getElementById("coleta_bar").style.height = ((pegouLixo)*50)+"px";
								document.getElementById("lixo_bar").style.height = ((pontos)*10)+"px";
								console.log("Score: "+pontos);
							}
						}
					}
				}
			}


			

			function checarMorte(){
				tempo = tempo+1;

				if(timer > 0){
					timer = timer - 1;
					document.getElementById("timer").innerHTML = timer;
				}

				if(tempo > 60 & pontos < 20){
					personagem.vivo = false;
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
			}


			function moverDireita(){
				if(personagem.x < 94 & personagem.vivo == true){
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

				if(personagem.x > 0 & personagem.vivo == true){
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

				if(personagem.y > 0 & personagem.vivo == true){
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

				if(personagem.y < 90 & personagem.vivo == true){
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

			
			
			setInterval(checarLixo, 100);
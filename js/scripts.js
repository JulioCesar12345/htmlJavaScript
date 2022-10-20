 alert('Este é um alerta')<!-- alerta basico,janela na pagina
 
 document.write("Hello Moto");<!-- Escreve no corpo da pagina
 document.write("<h2>"+document.title+"</h2>");<!-- Alterando propriedade via javaScript.
 
 function mostraData(){
	 document.getElementById("data").innerHTML=Date();
 }
 
 var nome=prompt("Digite o seu nome: ");
 alert(nome)
 var idade=prompt("Digite a sua idade: ");
 var acordado="true";
 var vetor=[1,"lucas",true]
 alert(vetor)
 
 document.write("Meu nome é ",nome," e tenho ",idade, "anos.");
 alert("Meu nome é: "+nome+" minha idade é: "+idade);
 
 var n1 = prompt("Digite o primeiro numero: ");
 var n2 = prompt("Digite o segundo numero: ");
 
 document.write("A soma é= ",parseInt(n1)+parseInt(n2));
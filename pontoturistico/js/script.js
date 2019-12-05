$('img').click(function () { // inicio da função.

// O "$" (cifrão) que está para iniciar uma função.

// Dentro dos parenteses vai o parametro que quer pegar. Seja ele ID, CLASSE, ou qualquer TAG.

// O ".click" é o evento JQuery que está para fazer na função.  

// " quando CLICLAR em alguma tag do nome img, fará a função: "
	var img = $( this ).attr("src"); // criei uma variável chamada "img". 
/* atribui a variavel, o valor dele mesmo (this), ou seja: como ainda estamos dentro da função, quando eu clicar em alguma imagem,
o valor da mesma será guardada na variavel "img" */

/* o ".attr" significa "GetAttribute" no JS puro. Ou seja, o "this" irá pegar o atributo dele pagina HTML. 
o atributo que irá pegar, esta dentro do parenteses (src) */

  $( "#preview" ).html( "<img src='" + img + "'>");

// "#preview" é uma ID na pagina HTML onde irá mostrar as imagens.
// ".html" é um evento Jquery onde ele pode mexer diretamente na pagina HTML.
// dentro dos parenteses do evento "html" está o que eu quero que ele edite. 

});



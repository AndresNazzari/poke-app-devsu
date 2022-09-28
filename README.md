<div class="content-0-2-92" bis_skin_checked="1"><div class="content-0-2-95" bis_skin_checked="1"><p><strong>1) Deberá subir un .zip para compartir todos los archivos del código a realizar.&nbsp;</strong></p>
<p><span style="font-weight: 400;">Esquema de ejercicio propuesto:&nbsp;</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Maquetación de un diseño propuesto&nbsp;&nbsp;</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Implementación de pruebas&nbsp;&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Implementar las siguientes funcionalidades:&nbsp;</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Funcionalidad de mostrar pokemons.&nbsp;</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Funcionalidad de búsqueda.&nbsp;</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Funcionalidad de agregar pokemons.&nbsp;</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Funcionalidad de editar pokemons.&nbsp;</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Funcionalidad de eliminar pokemons.&nbsp;</span><span style="font-weight: 400;"></span></li>
</ul>
<div bis_skin_checked="1"><img src="https://www.codingame.com/work/servlet/fileservlet?id=51108534513639" alt="" width="740" height="502"></div>
<p><strong>Historia de usuario 1&nbsp;</strong><span style="font-weight: 400;">&nbsp;</span></p>
<p><span style="font-weight: 400;">Como Carlos quiero tener una aplicación para visualizar los pokemons, crear, eliminar y editar los pokemons.&nbsp;</span></p>
<p><span style="font-weight: 400;">&nbsp;</span></p>
<p><strong>Criterios de aceptación:&nbsp;</strong><span style="font-weight: 400;">&nbsp;</span></p>
<p>&nbsp;</p>
<p><strong>Requerimiento A</strong><span style="font-weight: 400;">: Maquetar diseño propuesto&nbsp;</span></p>
<p><span style="font-weight: 400;">Dado: que se desea evaluar el nivel de conocimiento en el desarrollo front end.&nbsp;</span></p>
<p><span style="font-weight: 400;">Como: Evaluador&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">Requiero: que se maquete e implemente el diseño propuesto.&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">&nbsp;</span></p>
<p><strong>Requerimiento B</strong><span style="font-weight: 400;">: Implementación de pruebas&nbsp;</span></p>
<p><span style="font-weight: 400;">Dado: que se desea evaluar el nivel de conocimiento en pruebas.&nbsp;</span></p>
<p><span style="font-weight: 400;">Como: Evaluador&nbsp;</span></p>
<p><span style="font-weight: 400;">Requiero: que el código desarrollado tenga pruebas unitarias de los diferentes componentes&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">&nbsp;</span></p>
<p><strong>Requerimiento C</strong><span style="font-weight: 400;">: Implementación de funcionalidad&nbsp;</span></p>
<p><span style="font-weight: 400;">Dado: que se desea mostrar elementos consumidos desde un API.&nbsp;</span></p>
<p><span style="font-weight: 400;">Como: Evaluador&nbsp;</span></p>
<p><span style="font-weight: 400;">Requiero: que se muestren los elementos consumidos desde la API en el diseño propuesto, además que se puedan realizar las acciones de búsqueda, crear, eliminar y editar mediante el consumo de la API.</span></p>
<p><span style="font-weight: 400;">&nbsp;</span></p>
<p><strong>Notas de calificación</strong><span style="font-weight: 400;">:&nbsp;</span></p>
<ul>
<li><span style="font-weight: 400;">Subir un <strong>.zip o .rar</strong> con todos los archivos</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Se tomará en cuenta que cumpla todos los requerimientos mencionados y que la maquetación esté conforme al diseño. Debe obviamente integrarse al back end provisto.</span><span style="font-weight: 400;"></span></li>
<li><span style="font-weight: 400;">Se debe implementar de buenas prácticas</span>
<ul>
<li><span style="font-weight: 400;">Clean Code</span></li>
<li><span style="font-weight: 400;">SOLID principles</span></li>
<li><span style="font-weight: 400;">Desacoplar lógica de componentes&nbsp;</span></li>
</ul>
</li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Usar ES6 o Typescript</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Se debe aplicar TDD (pruebas unitarias)</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Preferiblemente no se debe usar ningún framework de estilos o componentes prefabricados para maquetar el diseño propuesto.</span></li>
</ul>
<div bis_skin_checked="1">&nbsp;</div>
<p><strong>API Docs</strong></p>
<p><strong>CONSULTAR (GET) Y CREAR (POST CON JSON)</strong></p>
<p><a href="https://bp-pokemons.herokuapp.com/?idAuthor=1" target="_blank" rel="noopener">https://bp-pokemons.herokuapp.com/?idAuthor=1</a>&nbsp;</p>
<p><strong>CONSULTAR POR ID (GET)</strong></p>
<p><a href="https://bp-pokemons.herokuapp.com/:id&nbsp;" target="_blank" rel="noopener">https://bp-pokemons.herokuapp.com/:id&nbsp;</a></p>
<p><strong>CONSULTAR POR N DE REGISTROS (GET)&nbsp;</strong></p>
<p><a href="https://bp-pokemons.herokuapp.com/" target="_blank" rel="noopener">https://bp-pokemons.herokuapp.com/count?idAuthor=1&nbsp;</a></p>
<p><strong>ACTUALIZAR (PUT CON JSON) Y BORRAR (DELETE)</strong></p>
<p><a href="https://bp-pokemons.herokuapp.com/" target="_blank" rel="noopener">https://bp-pokemons.herokuapp.com/:id</a></p>
<p><strong>Documentación Endpoints:</strong> <a href="https://docs.google.com/document/d/16IJEsv8wciKLzxRcIlyHn-QQIgKLJSLS6HUMqE4KzGw/edit?usp=sharing" target="_blank" rel="noopener">Link Endpoints</a></p>
<p>&nbsp;</p></div></div>

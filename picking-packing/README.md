# Picking & packing

_En **picking & packing** encontraras el listado de las ordenes confirmadas por el usuario, asi tambien con las pasarelas de pagos, podras asignar pickers a los pedidos, asi como gestionar el proceso de los mismo, recojer productos, cambiarlos, eliminarlos etc..._

_Para entrar a esta seccion, es tan simple como ir al navbar izquierdo de la app desplegar el dropdown de **Fulfillment** dentro de **orders** y seleccionar la opcion de **Picking & packing**._


<img class="lightbox" src="/img/1.png"/>

## Manejo de pedidos

_Una vez que estes dentro de **Picking & packing** podras ver la ventana para el manejo de pedidos, aqui se encontraran con:_

* **Barra de busqueda**

<img class="lightbox" src="/img/barradebusquedapickingandpacking.png">

<br>

_Este campo de texto le permitira buscar de una manera rapida sus ordenes, aqui puede escribir el numero de orden o el nombre del cliente "el que realizo el pedido"._

* **Filtros**

_Para filtrar las ordenes visualizadas debe dar un click sobre el boton de Filtro._
<br><img class="lightbox" src="/img/botonfiltropickingandpacking.png"><br>
_este boton desplegara un Offcanva con todas las opciones de filtro, las opciones de filtro son las siguientes:_

  * **Orden**
    <br><img class="lightbox" src="/img/filtroordenpickingandpacking.png"><br>
    _Se organizara según la fecha y hora de entrega establecida por el cliente, en el checkout ascendente para las ordenes con fecha y hora mas cercana primero, y descendente para ver las fechas mas lejanas primero._

  * **Fecha del pedido**
    <br><img class="lightbox" src="/img/filtrofechapedidopickingandpacking.png"><br>
    _se mostraran las ordenes cuyas fechas de pedido coincidan dentro de los limites de las fechas inicio y final establecidas._

  * **Fecha limite**
    <br><img class="lightbox" src="/img/filtrofechalimitepickingandpacking.png"><br>
    _esta seccion permite filtrar las ordenes cuya fecha limite coincidan dentro de los limites de las fechas inicio y final establecidas._

  * **Estado**
    <br><img class="lightbox" src="/img/filtroestadopickingandpacking.png"><br>
    _solo se mostraran las ordenes cuyo estado de proceso coincida con alguno de los estados descritos en el._

  * **Valor del pedido**
    <br><img class="lightbox" src="/img/filtrovalordelpedidopickingandpacking.png"><br>
    _se puede establecer un rango del costo de los pedidos que va desde 0 hasta el monto establecido en el, con un maximo de 5 millones._

  * **Numero de items**
    <br><img class="lightbox" src="/img/filtronumerodeitemspickingandpacking.png"><br>
    _sirve para filtrar las ordenes en funcion del numero de elementos que la conformen minimo 0 max 99._

  * **Transportadora**
    <br><img class="lightbox" src="/img/filtrotransportadorapickingandpacking.png"><br>
    _en este filtro se establece especificamente la transportadora de la orden._

  * **Medio de pago**
    <br><img class="lightbox" src="/img/filtromediosdepagopickingandpacking.png"><br>
    _sirve para filtrar las ordenes en funcion del tipo de pago establecido por el cliente._

  * **Picker**
    <br><img class="lightbox" src="/img/filtropickerpickingandpacking.png"><br>
    _esta seccion despliega los correos de los pickers disponibles, al escoger uno solo se mostraran las ordenes asignadas a ese picker._

  * **Categorias**
    <br><img class="lightbox" src="/img/filtrocategoriapickingandpacking.png"><br>
    _esta seccion despliega las categorias de los items, al escojerla filtrara aquellas ordenes que tengan items que coincidan con la categoria._

## Importar ordenes

_Este boton sirve para importar una orden_
<br><img class="lightbox" src="/img/botonimportarpickingandpacking.png"><br>
_este boton lanzara un modal, en el input del mismo debemos escribir el id de la orden que queremos importar, luego le damos click al check que dice "Sólo se importaran órdenes que no se hayan descargado automáticamente" y por ultimo presionamos el boton azul "importar"_
<br><img class="lightbox" src="/img/modalimportarpickingandpacking.png"><br>

## Exportar ordenes

_Este boton sirve para exportar una orden_
<br><img class="lightbox" src="/img/botonexportarpickingandpacking.png"><br>
_este boton lanzara un modal, este modal cuenta con una serie de dropdowns para construir el filtro de las ordenes que queremos exportar, los filtros disponibles para ello son: "picker", "categories", "transportadora", "start date", "end date", "City" y "Seller".
Se puede agregar mas de un filtro dandole al boton "+ agregar filtro" y al final que tengas los filtros necesarios, solo debes darle un click al boton "exportar"_
<br><img class="lightbox" src="/img/modalexportarpickingandpacking.png"><br>

## Detalle inicial de la orden

<br><img class="lightbox" src="/img/detalleinicialdelaordenpickingandpacking.png"><br>

_El detalle inicial de la orden muestra detalles especificos de la orden en dos etapas, la inicial que es la que se ve sin mas "fondo blanco", y detalles mas especificos que se despliegan al dar un click sobre ella "fondo gris".
En esta orden se puede observar como la seccion superior esta sobreseñalada con la cabecera del recuadro, entre estas secciones podemos ver:_

* **Fecha de creacion**: es la fecha y hora cuando se realizo el pedido.<br><img class="lightbox" src="/img/detalleinicialdelaordenfechadecreacion.png">
* **Fecha para entrega**: es la fecha limite objetivo del cliente para recibir su pedido.
<br><img class="lightbox" src="/img/detalleinicialdelaordenfechaparaentrega.png">
* **Forma de entrega**: muestra el medio por el cual el usuario solicita la entrega de su pedido.
<br><img class="lightbox" src="/img/detalleinicialdelaordenformadeentrega.png">
* **Nº de pedido**: es el numero de identificacion unico que corresponde e identifica el pedido.
<br><img class="lightbox" src="/img/detalleinicialdelaordennumerodepedido.png">
* **Alistador**: es el nombre del picker asignado al pedido, se muestra como "Sin asignacion" por defecto hasta que se le asigne un picker.
<br><img class="lightbox" src="/img/detalleinicialdelaordenalistador.png">
* **Estado**: refleja el estado en el que se encuentra el proceso del pedido "si no sabes cuales son estos estados, dale un click aca" <a href="#estados-de-la-orden">estados de la orden</a>
<br><img class="lightbox" src="/img/detalleinicialdelaordenestado.png"><br>
_Tambien podemos observar en la parte inferior detalles un poco mas especificos de este pedido como:_

* **Datos del cliente**: aqui se puede ver el nombre del cliente que realizo el pedido asi como su correo electronico.
<br><img class="lightbox" src="/img/detalleinicialdelaordendatosdelcliente.png">

* **Datos de entrega**: esta seccion muestra la direccion de entrega del pedido "proporcionado por el cliente".
<br><img class="lightbox" src="/img/detalleinicialdelaordendatosdelcliente.png">

* **Franja de entrega**: muestra la fecha en la que se realizo el pedido, asi como la fecha objetivo del pedido.
<br><img class="lightbox" src="/img/detalleinicialdelaordenfranjadeentrega.png">

* **Item(s) del pedido**: muestra el numero de items del pedido, asi como las categorias de los mismos.
<br><img class="lightbox" src="/img/detalleinicialdelaordenitemsdelpedido.png">

* **Medio de pago**: aca se puede ver el tipo de pago establecido por el cliente asi como el valor total a pagar.
<br><img class="lightbox" src="/img/detalleinicialdelaordenmediodepago.png"><br>

_los detalles iniciales de la orden tienen un dropdown que despliega tres opciones adicionales sobre ella "Ver detalles", "Imprimir comanda" y "Asignar"_
<br><img class="lightbox" src="/img/detalleinicialdelaordenmasopciones.png"><br>

* **Ver detalles**: Esta opcion lanzara una ventana de picking donde podra gestionar con mayor deta

_"sugerencias" y "busqueda" nos ayudan a reemplazar los productoslle el proceso de picking y packing "click aca para ver mas detalles" <a href="#picking-desktop">picking desktop</a>
<br><img class="lightbox" src="/img/verdetallespickingandpacking.png">

* **Imprimir comanda**: Esta opcion lanza una ventana con la factura del pedido.
<br><img class="lightbox" src="/img/imprimircomandapickingandpacking.png">

* **Asignar**: Esta opcion despliega un modal para asignar un picker al pedido, para asignarlo se debe dar un click sobre el dropdown en el, y seleccionar el picker a eleccion.
<br><img class="lightbox" src="/img/asignarusuariopickingandpacking.png">

## Estados de la orden

_A continuacion, estos son los estados en los que puede estar un pedido:_

* **Pendiente**: Ordenes que no han sido tratadas en fulfillment y estan listas para ser gestionadas.
<br><img class="lightbox" src="/img/estadoordenes/pendiente.png">

* **Por alistar**: Ordenes que no han sido tratadas en fulfillment y estan listas para ser gestionadas.
<br><img class="lightbox" src="/img/estadoordenes/poralistar.png">

* **Listo para empacar**: Ordenes que no han sido tratadas en fulfillment y estan listas para ser gestionadas.
<br><img class="lightbox" src="/img/estadoordenes/listoparaempacar.png">

* **Empacando**: Ordenes que no han sido tratadas en fulfillment y estan listas para ser gestionadas.
<br><img class="lightbox" src="/img/estadoordenes/empacando.png">

* **Listo para facturar**: Ordenes que no han sido tratadas en fulfillment y estan listas para ser gestionadas.
<br><img class="lightbox" src="/img/estadoordenes/listoparafacturar.png">

* **Facturado**: Ordenes que no han sido tratadas en fulfillment y estan listas para ser gestionadas.
<br><img class="lightbox" src="/img/estadoordenes/facturado.png">

* **Listo para despacho**: Ordenes que no han sido tratadas en fulfillment y estan listas para ser gestionadas.
<br><img class="lightbox" src="/img/estadoordenes/listoparadespacho.png">

## Asignar un alistador

_Al iniciar el proceso de alistamiento, se despliega un modal para la asignacion del alistador, una vez que se seleccione un alistador y se confirme, se puede iniciar el proceso de alistamiento._

<img class="lightbox" src="/img/pickingdesktop.png">

## Dropdown "ver mas" del pedido

_Este es un dropdown situado en la parte superior derecha del pedido y ofrece 3 funcionalidades: Imprimir comanda, Imprimir voucher y Agregar item._

<img class="lightbox" src="/img/2.png">


## Imprimir comanda

_La comanda es una factura orientada al alistador, con informacion relevante del pedido y los items del mismo, puede ser util para complementar el proceso de alistamiento y se puede imprimir dando un click sobre el **dropdown "ver mas"** del pedido, y seleccionando la opcion "Imprimir comanda", esto desplegara una nueva pestaña con la comanda._

<img class="lightbox" src="/img/comanda.png">

## Imprimir voucher

_El voucher es una factura orientada al cliente, con informacion general del pedido y los costos del mismo, tiene un espacio para que el cliente firme, se puede imprimir dando un click sobre el **dropdown "ver mas"** del pedido, y seleccionando la opcion "Imprimir voucher", esto desplegara una nueva pestaña con el voucher._

<img class="lightbox" src="/img/voucher.png">

## Agregar producto al pedido

_Para agregar un producto al pedido, debemos dar un click sobre el **dropdown "ver mas"** del pedido, y seleccionar la opcion "Agregar item", esto desplegara un modal en el cual debemos buscar el producto a agregar, seleccionarlo y agregar una cantidad definida al pedido y confirmando para finalizar._

<img class="lightbox" src="/img/pickingdesktop/1.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/2.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/3.png">

## Crear producto

_Para crear un producto se debe dar un click sobre el boton "+" en el modal de **"Agregar producto al pedido"**, esto despliega un nuevo modal donde se deben diligenciar los datos del producto correspondiente y por ultimo confirmar para agregar el producto creado._

<img class="lightbox" src="/img/pickingdesktop/4.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/5.png">


<br>

<img class="lightbox" src="/img/pickingdesktop/6.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/7.png">

## Dropdown "ver mas" del producto

_El dropdown "ver mas" del producto, despliega las funcionalidades de: sugerencias, busqueda, cambiar precio y eliminar item._

_"sugerencias" y "busqueda" nos ayudan a reemplazar los productos, con la diferencia que sugerencias nos ofrece recomendaciones de cambio "estas recomendaciones dependen de la relacion interna del inventario de las tiendas"._

<img class="lightbox" src="/img/pickingdesktop/8.png">

## Reemplazar producto

_Para reemplazar un producto debemos desplegar el **dropdown "ver mas" del pedido**, y seleccionar la opcion de "busqueda", esto desplegara un modal donde debemos buscar el producto objetivo a cambiar, seleccionarlo y confirmar el cambio definiendo las razones del reemplazo "el producto se alistara automaticamente, mientras el producto original sera rechazado por el motivo de reemplazo"_

<img class="lightbox" src="/img/pickingdesktop/9.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/10.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/11.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/12.png">

## Cambiar precio del producto

_Para cambiar el precio de un producto, debemos desplegar el **dropdown "ver mas" del pedido**, y seleccionar la opcion de "cambiar precio", esto desplegara un nuevo modal donde debemos establecer el nuevo precio y las razones del cambio del mismo, por ultimo solo debemos confirmar el cambio._

<img class="lightbox" src="/img/pickingdesktop/13.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/14.png">

## Rechazar producto

_Para rechazar un producto "eliminar el producto del pedido", debemos desplegar el **dropdown "ver mas" del pedido**, y seleccionar la opcion de "eliminar item", definir las razones del rechazo y confirmar este proceso._

<img class="lightbox" src="/img/pickingdesktop/15.png">

## Alistar producto

_Para alistar un producto se debe definir la cantidad de unidades recojidas, una vez estas unidades sean iguales o superiores a la cantidad objetivo, aparecera un boton azul en la parte derecha del pedido, se debe dar un click sobre el y confirmar el alistamiento para establecer el producto como "preparado"._

<img class="lightbox" src="/img/pickingdesktop/16.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/17.png">

## Empacar

_Una vez termine el proceso de alistamiento se debe dar un click sobre el boton de "empacar" situado en la parte inferior del estado del pedido, especificamente en la parte superior derecha de la ventana._

<img class="lightbox" src="/img/pickingdesktop/18.png">

_Una vez hecho esto, se establecera la ventana de empaque, en la cual debemos agregar los paquetes que sean necesarias con el boton de agregar paquete._

<img class="lightbox" src="/img/pickingdesktop/19.png">

_Para cada paquete podemos agregar uno o todos los productos, a traves de las opciones del dropdown "ver mas" del paquete._

<img class="lightbox" src="/img/pickingdesktop/20.png">

_Una vez todos los productos esten empacados debemos cerrar el paquete a travez del boton "cerrar paquetes", estge ultimo cerrara los paquetes y no permitira hacer cambios, agregar o eliminar paquetes._

<img class="lightbox" src="/img/pickingdesktop/21.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/22.png">

## Facturar pedido

_Una vez los pedidos fueron empacados, deben ser facturados, para esto debemos dar un click sobre el boton "a facturacion", este ultimo despliega un modal donde definimos los valores de la factura, guardamos la factura y listo._

<img class="lightbox" src="/img/pickingdesktop/23.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/24.png">

## Agregar servicio de envio

_Una vez el pedido sea facturado podemos agregar un servicio de transporte para el mismo, para ello debemos dar un click sobre el boton "agregar servicio", este ultimo agregara una tarjeta donde debemos establecer las fechas de recojida y envio, asi como el tipo de servicio de transporte vamos a asignar y los paquetes que llevara el mismo, una vez hecho todo esto solo debemos confirmar envio para finalizar._

<img class="lightbox" src="/img/pickingdesktop/25.png">

<br>

<img class="lightbox" src="/img/pickingdesktop/26.png">

<style>
    img{
        border: 1px solid black;
        max-height: 700px;
    }
    .color-gray{
      color: gray;
    }
    .color-blue{
      color: blue;
    }
    .next-link {
      display: flex;
      width: 100%;
    }
    .next-link > a {
      margin-left: auto;
      font-size: 1.5em;
    }
</style>

<div class="next-link">
  <a href="/tracking/">ir a Tracking →</a>
</div>
<VideoModal src="/video/video1.mp4" />
<div>
<script src="https://upload-file-and-get-url.herokuapp.com/uploads/61af4d2ba98aee41b66baad1/simple_lightbox.js"></script>
</div>
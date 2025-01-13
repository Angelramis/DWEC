// Creación de un componente
export default function Titulo(props) { 
  return (
    <> {/* Fragmento: tag sin contenido*/}
      <h1 className="titulo">{props.titulo}</h1> 
      <br/>
      <h2 className="subtitulo">{props.subTitulo}</h2>
    </>
  )
}
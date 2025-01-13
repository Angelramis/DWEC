import  "./Modal.css"; // importar el css

export default function Modal({children}) {
  return (
    <div>
      <div className="modal-fondo">
        <div className="modal">
          {children} {/* Busca lo que está dentro de Modal*/}
        </div>
      </div>      
    </div>
  )
}

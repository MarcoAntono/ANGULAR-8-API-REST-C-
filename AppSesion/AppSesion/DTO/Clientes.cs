using System.ComponentModel.DataAnnotations;

namespace AppSesion.DTO
{
    public class Clientes
    {
        [Key]
        public string idCliente { get; set; }
        public string NombreContacto { get; set; }
        public string CargoContacto { get; set; }
        public string Ciudad { get; set; }
        public string Region { get; set; }
        public string Telefono { get; set; }
        public string Clave { get; set; }

    }
}

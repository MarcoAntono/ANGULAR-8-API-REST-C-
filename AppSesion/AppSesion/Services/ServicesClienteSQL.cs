using AppSesion.Context;
using AppSesion.DTO;
using System.Linq;

namespace AppSesion.Services
{
    public class ServicesClienteSQL : IServicesClienteSQL
    {
        NetpunoBD _NetpunoBD = null;

        public ServicesClienteSQL(NetpunoBD netpunoBD)
        {
            this._NetpunoBD = netpunoBD;
        }
        
        public Clientes Recuperar(Clientes dto)
        {
            return this._NetpunoBD.Clientes.First(a => a.idCliente == dto.idCliente && a.Clave == dto.Clave);
        }
    }
}

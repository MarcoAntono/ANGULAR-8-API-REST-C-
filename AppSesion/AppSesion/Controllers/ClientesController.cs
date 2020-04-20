using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppSesion.DTO;
using AppSesion.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AppSesion.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        IServicesClienteSQL _IServicesClienteSQL = null;
        public ClientesController(IServicesClienteSQL servicesClienteSQL)
        {
            this._IServicesClienteSQL = servicesClienteSQL;
        }

        [HttpPost]
        public IActionResult Recuperar([FromBody] Clientes dto)
        {
            if (string.IsNullOrEmpty(dto.idCliente) || string.IsNullOrEmpty(dto.Clave))
                return BadRequest("Se ha generado un error al iniciar sesion");
            return Ok(this._IServicesClienteSQL.Recuperar(dto));
        }


    }
}